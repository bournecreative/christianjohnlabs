var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 33.641132, lng: -117.918669 }, //identifies part of world
    zoom: 13, // 21 max - street level - 1 min - shows world
    streetViewControl: false,
    mapTypeControl: false,
    disableDoubleClickZoom: true,
    zoomControl: false,
    scaleControl: false,
    scrollwheel: false,
    styles: styles
  });
  // designates where the marker should be placed on map
  var hometown = {lat: 33.641132, lng: -117.918669};
  // designates marker characteristics
  var marker = new google.maps.Marker({
    position: hometown,
    map: map,
    icon: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png",
    animation: google.maps.Animation.BOUNCE
  });
  // create object instance of InfoWindow
  var homeTownInfo = new google.maps.InfoWindow({
    content: "Located in sunny Costa Mesa Ca"
  });
  //create an event listen for the marker so the infoWindow knows when to appear
  marker.addListener('click',function(){
    //method that opens the window method
    //map specifies the map on which to open
    //marker specifies the anchor to optionally anchor it
    homeTownInfo.open(map, marker);
  });
  var styles = [
    {
      stylers: [
        { hue: "#4CBAB1" },
        { saturation: 90 }
      //  4CBAB1
      //  00A99D
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
    },{
      featureType: "water",
      elementType: "all",
      stylers:[
        { color:"#66CBC4" }
      ]
    }
  ];
  map.setOptions({styles: styles});
}