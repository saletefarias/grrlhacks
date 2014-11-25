
    var map;
    var layer_0;
    function initialize() {
    google.maps.visualRefresh = true;
    var isMobile = (navigator.userAgent.toLowerCase().indexOf('android') > -1) ||
      (navigator.userAgent.match(/(iPod|iPhone|iPad|BlackBerry|Windows Phone|iemobile)/));
    if (isMobile) {
      var viewport = document.querySelector("meta[name=viewport]");
      viewport.setAttribute('content', 'initial-scale=1.0, user-scalable=no');
    }
    var mapDiv = document.getElementById('googft-mapCanvas');
    mapDiv.style.width = isMobile ? '100%' : '1300px';
    mapDiv.style.height = isMobile ? '100%' : '450px';
    var map = new google.maps.Map(mapDiv, {
      center: new google.maps.LatLng(13.848600470447943, -37.441107999999986),
      zoom: 3,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });
    map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(document.getElementById('googft-legend-open'));
    map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(document.getElementById('googft-legend'));

    layer = new google.maps.FusionTablesLayer({
      map: map,
      heatmap: { enabled: false },
      query: {
        select: "col7",
        from: "1vYQp4N5B9jB-7X7e22UJWgqVTC7rlZY3aK3vI7n6",
        where: ""
      },
      options: {
        styleId: 3,
        templateId: 3
      }
    });

    if (isMobile) {
      var legend = document.getElementById('googft-legend');
      var legendOpenButton = document.getElementById('googft-legend-open');
      var legendCloseButton = document.getElementById('googft-legend-close');
      legend.style.display = 'none';
      legendOpenButton.style.display = 'block';
      legendCloseButton.style.display = 'block';
      legendOpenButton.onclick = function() {
        legend.style.display = 'block';
        legendOpenButton.style.display = 'none';
      }
      legendCloseButton.onclick = function() {
        legend.style.display = 'none';
        legendOpenButton.style.display = 'block';
      }
    }
  }


    function changeMap_0() {
      var whereClause;
      var searchString = document.getElementById('search-string_0').value.replace(/'/g, "\\'");
      if (searchString != '--Select--') {
        whereClause = "'tipoproj' = '" + searchString + "'";
      }
      layer_0.setOptions({
        query: {
          select: "col7",
          from: "1vYQp4N5B9jB-7X7e22UJWgqVTC7rlZY3aK3vI7n6",
          where: whereClause
        }
      });
    }
    google.maps.event.addDomListener(window, 'load', initialize);
  
