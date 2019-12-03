// Reference: P. 442-447 in "Javascript & JQuery: Interactive Front-End Web Development" by Jon Duckett
// Referred to https://www.w3schools.com/js/js_function_call.asp for additonal support

function init() {
  var mapOptions = {
    center: new google.maps.LatLng(64.7511563,-147.3793779),
    mapTypeID: google.maps.MapTypeId.ROADMAP,
    zoom:13 };
    
    var venueMap;
    venueMap = new google.maps.Map (document.getElementByID('northpole'), mapOptions);
}

function loadScript(){ 
  var script = document.createElement('script');
  script.src = 'http://maps.googleapis.com/api/js?sensor=false&callback=init';
  document.body.appendChild(script);
  
  window.onload = loadScript;
