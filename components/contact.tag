<contact>
  <div class="container">
    <div class="info">
    <h3>{opts.title}</h3>
      <ul>
        <li>{ opts.name }</li>
        <li>{ opts.tel }</li>
        <li>{ opts.phone }</li>
    </ul>
   
    </div>
    <div class="map">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.394658475166!2d-98.04803516907432!3d19.04637804841881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cfeb62eb1b52f9%3A0x1ad412546408e66f!2sCalle+4+Pte.+705%2C+San+Miguel%2C+72990+Amozoc+de+Mota%2C+Pue.!5e0!3m2!1ses-419!2smx!4v1457481430673" width="700" height="400" frameborder="0" style="border:0" allowfullscreen></iframe>
    </div>
  </div>
<style>
contact .container{
    padding: 20px;
}
contact h3{
   font-size: 60px;
   text-align: center;
   margin-top: 50px;
   margin-bottom: 50px;
 } 
contact .info ul li{
    list-style: none;
    color: #333
}    
contact .map{
    width: 100%;
}
</style>
    

</contact>
/**
<!--
Add the code below to the bottom of your page, just before the closing </body> tag.
Edit myLatlng and the other variables.

Find syntax for Features that can be styled here:

https://developers.google.com/maps/documentation/javascript/reference#MapTypeStyleFeatureType

Or use a service such as:

http://software.stadtwerk.org/google_maps_colorizr/#
http://gmaps-samples-v3.googlecode.com/svn/trunk/styledmaps/wizard/index.html
https://developers.google.com/maps/documentation/javascript/tutorialg
-->


<!--
<script src="https://maps.googleapis.com/maps/api/js"></script>
<script>
  var bittersMap = (function () {
    var myLatlng = new google.maps.LatLng(59.342457, 18.057340),
        mapCenter = new google.maps.LatLng(59.340458, 18.057340),
        mapCanvas = document.getElementById('map_canvas'),
        mapOptions = {
          center: mapCenter,
          zoom: 13,
          scrollwheel: false,
          draggable: true,
          disableDefaultUI: true,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        },
        map = new google.maps.Map(mapCanvas, mapOptions),
        contentString =
          '<div id="content">'+
          '<div id="siteNotice">'+
          '</div>'+
          '<h1 id="firstHeading" class="firstHeading">thoughtbot</h1>'+
          '<div id="bodyContent"'+
          '<p>Sveavägen 98</p>'+
          '</div>'+
          '</div>',
        infowindow = new google.maps.InfoWindow({
          content: contentString,
          maxWidth: 300
        }),
        marker = new google.maps.Marker({
          position: myLatlng,
          map: map,
          title: 'thoughtbot (Sweden)'
        });

    return {
      init: function () {
        map.set('styles', [{
          featureType: 'landscape',
          elementType: 'geometry',
          stylers: [
            { hue: '#ffff00' },
            { saturation: 30 },
            { lightness: 10}
          ]}
        ]);

        google.maps.event.addListener(marker, 'click', function () {
          infowindow.open(map,marker);
        });
      }
    };
  }());

  bittersMap.init();
</script>
-->


<div id="map_canvas"></div>


<style>
#map_canvas {
  height: 400px;
  width: 100%;
}

#map_canvas img { 
  max-width: none; // to prevent UI control bug
}

#map_canvas .content {
  padding: 0 0.5em 1em 0.5em;
}

#map_canvas .firstHeading {
  font-size: 1em;
  line-height: 1em;
  font-weight: bold;
  margin: 0;
}

#map_canvas #bodyContent p {
  font-size: 1em;
  margin: 0;
}

</style>
**/
