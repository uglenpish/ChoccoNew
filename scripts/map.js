
  ymaps.ready(init);
  
  function init(){
        // Создание карты.
    var myMap = new ymaps.Map("map", {
      center: [55.76, 37.64],
      zoom: 12,
      controls:['zoomControl'],
    });

  var coords = [
    [55.75530088809163,37.620462216918966],
    [55.74958897919116,37.60424021679689],
    [55.75888250412392,37.58226756054687],
    [55.74261737607743,37.58046511608888]
  ];
  
  var myCollection = new ymaps.GeoObjectCollection({}, {
    iconLayout: 'default#image',
    draggable: false,
    iconImageHref: 'img/icon/mapMarker.svg',
    iconImageSize: [46, 57],
    iconImageOffset: [-35, -52]
  });

  for (var i = 0; i < coords.length; i++) {
    myCollection.add(new ymaps.Placemark(coords[i]));
  }

  myMap.geoObjects.add(myCollection);

  myMap.behaviors.disable('scrollZoom'); 
}
