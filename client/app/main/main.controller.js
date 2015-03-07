'use strict';

angular.module('angularTpdVisApp')
.controller('MainCtrl', function ($scope, $http, socket, uiGmapGoogleMapApi, incidents) {

  $scope.itemsLoaded = 0;

  uiGmapGoogleMapApi.then(function(maps) {
    var makeOverlay = function(map) {
      if($scope.itemsLoaded == 0) {
        d3.json("/api/incidents?limit=10000", function(data) {
          data = data.data;
        // console.log(data);

        var overlay = new maps.OverlayView();

        overlay.onAdd = function() {
          var layer = d3.select(this.getPanes().overlayLayer).append("div")
          .attr("class", "stations");

          overlay.draw = function() {
            var projection = this.getProjection(),
            padding = 10;

            var marker = layer.selectAll("svg")
            .data(data)
            .each(transform)
            .enter().append("svg:svg")
            .each(transform)
            .attr("class", "marker");

            marker.append("svg:circle")
            .attr("r", 2)
            .attr("cx", padding)
            .attr("cy", padding);

            marker.append("svg:text")
            .attr("x", padding + 7)
            .attr("y", padding)
            .attr("dy", ".31em")
            .text(function(d) { return d.key; });

            function transform(d) {
              d = new maps.LatLng(d.LATITUDE, d.LONGITUDE);
              d = projection.fromLatLngToDivPixel(d);
              return d3.select(this)
              .style("left", (d.x - padding) + "px")
              .style("top", (d.y - padding) + "px");
            };
          };
        };
        overlay.setMap(map);
        $scope.itemsLoaded = 1;
      });
};
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
  }
};

$scope.mapStyles = [
{
  stylers: [
  { hue: "#00ffe6" },
  { saturation: -20 }
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
  { visibility: "off" }
  ]
}
];
});
});
