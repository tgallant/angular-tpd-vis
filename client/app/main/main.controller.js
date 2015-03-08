'use strict';

angular.module('angularTpdVisApp')
.controller('MainCtrl', function ($scope, $http, socket, uiGmapGoogleMapApi, incidents) {

var colorScale = d3.scale.category20().domain(
  [
  "ACCIDENT",
  "FOR DISPACCADVEV",
  "INCIDENT",
  "FOR DISPASSNCASE",
  "SUPPLEMENT",
  "INCIDENT/ARREST",
  "CRIMESCENE WORKED",
  "INCIDENT/ACCIDENT",
  "ACCIDENT",
  "FIELD INTERVIEW",
  "MISC INCIDENT",
  "TRAFFIC CITATION",
  "NO PAPERWORK",
  "FALSE ALARM",
  "CITATION ARREST",
  "TRANSPORT WORKED",
  "ERROR/SHELL NOT NEEDED"
  ]);


uiGmapGoogleMapApi.then(function(maps) {
  var makeOverlay = function(map) {
    var overlay = new maps.OverlayView();

    function processData(map, data, overlay, dateRept) {
      console.log(data.length);

      overlay.onAdd = function() {
        var layer = d3.select(overlay.getPanes().overlayMouseTarget).append("div")
        .attr("class", "stations");

        overlay.draw = function() {
          var projection = overlay.getProjection(),
          padding = 10;

          var marker = layer.selectAll("svg")
          .data(data)
          .each(transform)
          .enter().append("svg:svg")
          .each(transform)
          .attr("class", "marker1");

          marker.append("svg:circle")
          .attr("r", 2)
          .attr("cx", padding)
          .attr("cy", padding)
          //.attr("fill", function(d) { return colorScale(d.CSDISPDESC); })
          //.attr("stroke", function(d) { return colorScale(d.CSDISPDESC); })
          .attr("fill", "red")
          .attr("stroke", "red")
          .style("opacity", 0)
          .transition().delay(function(d, i) { return i/data.length; }).duration(5000)
          .style("opacity", 1)
          .transition().duration(15000)
          .style("opacity", 0.0);
          
          marker.transition().duration(20000).remove();

          marker.append("svg:text")
          .attr("x", padding + 7)
          .attr("y", padding)
          .attr("dy", ".31em")
          .text(function(d) { return d.CSDISPDESC; });

          function transform(d, i) {
            d = new maps.LatLng(d.LATITUDE, d.LONGITUDE);
            d = projection.fromLatLngToDivPixel(d);
            return d3.select(this)
            .style("left", (d.x - padding) + "px")
            .style("top", (d.y - padding) + "px");
          };
        };
      };
      overlay.setMap(map);
      setTimeout(function() { 
        incidents.getIncidents(10000, dateRept.add(1, 'days').format())
          .then(function(data) { 
            processData(map, data, new maps.OverlayView(), dateRept); 
          }); 
        }, 1000);
    };
    incidents.minDate().then(function(minDate) {
      incidents.getIncidents(10000, minDate[0].DATE_REPT).then(function(data) { 
        processData(map, data, overlay, moment(minDate[0].DATE_REPT)); 
      })
    });
};

$scope.map =
{
  center: {
    latitude: 32.2317,
    longitude: -110.9519
  },
  zoom: 12,
  events: {
    tilesloaded: function (map) {
      makeOverlay(map);
    }
  },
};

$scope.mapStyles = [
{
  stylers: [
  { hue: "#00ffe6" },
  { saturation: -100 }
  ]
},{
  featureType: "all",
  elementType: "all", 
  stylers: [
  { visibility: "off" }
  ]
},{
  featureType: "road",
  elementType: "geometry",
  stylers: [
  { lightness: 100 },
  { visibility: "simplified" }
  ]
},{
  featureType: "road",
  elementType: "labels",
  stylers: [
  { visibility: "on" }
  ]
},{
  featureType: "road.all",
  elementType: "labels.text",
  stylers: [
  { visibility: "off" }
  ]
}
];
});
});
