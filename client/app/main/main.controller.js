'use strict';

angular.module('angularTpdVisApp')
.controller('MainCtrl', function ($scope, $http, socket, uiGmapGoogleMapApi, incidents) {

  var appendOrdinalHorizontalLegend = function(node, labels, params) {
  // Default parameters.
  var p =
  {
    xoffset         : 10,
    yoffset         : 20,
    cellWidth       : 30,
    cellHeight      : 20,
    tickLength      : 25,
    caption         : "Legend",
    palette         : d3.scale.category20c(),
    captionFontSize : 14,
    captionXOffset  : 0,
    captionYOffset  : -6
  };

  // If we have parameters, override the defaults.
  if (params !== 'undefined')
  {
    for (var prop in params)
    {
      p[prop] = params[prop];
    }
  }

  // Create our x scale
  var x = d3.scale.ordinal()
  .domain(labels)
  .range(d3.range(labels.length).map(function(i) { return i * p.cellWidth; }));

  // Create the x axis.
  var xAxis = d3.svg.axis()
  .scale(x)
  .orient("bottom")
  .tickSize(p.tickLength)
  .tickPadding(10)
  .tickValues(labels)
  .tickFormat(function(d) { return d; });

  // Append a graphics node to the supplied svg node.
  var g = node.append("g")
  .attr("class", "key")
  .attr("transform", "translate(" + p.xoffset + "," + p.yoffset + ")");

  // Draw a colored rectangle for each ordinal range.
  g.selectAll("rect")
  .data(labels)
  .enter().append("rect")
  .attr("height", p.cellHeight)
  .attr("x", function(d, i) { return x(i); })
  .attr("y", 0)
  .attr("width", function(d) { return p.cellWidth; })
  .style("fill", function(d, i)
  {
    return p.palette(i);
  });

  // Add the caption.
  g.call(xAxis).append("text")
  .attr("class", "caption")
  .attr("y", p.captionYOffset)
  .attr("x", p.captionXOffset)
  .text(p.caption)
  .style("font-size", p.captionFontSize);
}

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
appendOrdinalHorizontalLegend(d3.select("body"), colorScale.domain());

// var minDate = 
uiGmapGoogleMapApi.then(function(maps) {
  var makeOverlay = function(map) {
    var overlay = new maps.OverlayView();

    function processData(map, data, overlay) {
      data = data.data;

      overlay.onAdd = function() {
        var layer = d3.select(overlay.getPanes().overlayLayer).append("div")
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
          .attr("fill", function(d) { return colorScale(d.CSDISPDESC); })
          .attr("stroke", function(d) { return colorScale(d.CSDISPDESC); })
          .transition().duration(5000)
          .style("opacity", 0);
          
          marker.transition().duration(5000).remove();

          marker.append("svg:text")
          .attr("x", padding + 7)
          .attr("y", padding)
          .attr("dy", ".31em");
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
      setTimeout(function() { incidents.getIncidents(1000/*,minDate + 1*/).then(function(data) { processData(map, data, new maps.OverlayView()); }); }, 5000);
    };
    incidents.getIncidents(1000/*, minDate*/).then(function(data) { processData(map, data, overlay); });
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
