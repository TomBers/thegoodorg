Template.map.rendered = function () {
  Meteor.subscribe('Places');
  map = null;
  fc = null;
  Mapbox.load();



  this.autorun(function () {
    Session.set('pos',Geolocation.latLng() || { lat: 0, lng: 0 });
    console.log(Session.get('pos'));

    if ( Mapbox.loaded() && Session.get('pos').lat != 0  && Session.get('pos').lng != 0 && map == null) {

      console.log('Draw Map');
      L.mapbox.accessToken = 'pk.eyJ1IjoidG9tYmVycyIsImEiOiJwdkVzMXF3In0.tYVES5240mnmR1Dzon0nxg';
      map = L.mapbox.map('map', 'tombers.lb0738je').setView(Session.get('pos'), 14);



      var fixedMarker = L.marker(new L.LatLng(Session.get('pos').lat,Session.get('pos').lng), {
        icon: L.mapbox.marker.icon({
          'marker-color': 'ff8888'
        })
      }).bindPopup('Mapbox DC').addTo(map);
      //
      // fc = fixedMarker.getLatLng();
    }

    // try{
    //   Places.find().forEach(function(place){
    //     // console.log(place);
    //     L.mapbox.featureLayer(place.loc)
    //     .bindPopup('<a href="/place/'+place._id+'">Go here</a>')
    //     .addTo(map);
    //   });
    // }catch(e){
    //
    // }



  });

};

Template.map.helpers({
  loc: function () {
    // return 0, 0 if the location isn't ready
    return Geolocation.latLng() || { lat: 0, lng: 0 };
  },
  error: Geolocation.error,

});





function addMarker(lng,lat,name,img){
var geeson = {
  // this feature is in the GeoJSON format: see geojson.org
  // for the full specification
  type: 'Feature',
  geometry: {
    type: 'Point',
    // coordinates here are in longitude, latitude order because
    // x, y is the standard for GeoJSON and many formats
    coordinates: [lng,lat]
  },
  properties: {
    title: name,
    description: '<img src="'+img+'">',
    'marker-symbol': "star",
    'marker-size': "medium",
    'marker-color': "#f44"

  }
};
Meteor.call('addPlace',geeson);
L.mapbox.featureLayer(geeson).addTo(map);


}

function onMapClick(e) {

var name = prompt("Please enter a name", "");
if (name != null) {
  var lg = e.latlng.lng;
  var lt = e.latlng.lat;
  MeteorCamera.getPicture({width:100,height:100,quality:100},function(err,img){
    addMarker(lg,lt,name,img);
  });

}



}
