// Referred to P. 442-447 in "Javascript & JQuery: Interactive Front-End Web Development" by Jon Duckett
// Referred to https://www.w3schools.com/js/js_function_call.asp for additonal support
// Referred to https://www.sitepoint.com/google-maps-javascript-api-the-right-way/

document.addEventListener('LoadContent', function ()
  if (document.querySelectorAll('#northpole').length >0)

{

function init() {
  var mapOptions = {
    center: new google.maps.LatLng(64.7511563,-147.3793779),
    mapTypeID: google.maps.MapTypeId.ROADMAP,
    zoom:13 };
    
    var venueMap;
    venueMap = new google.maps.Map (document.getElementById('northpole'), mapOptions);
}

function loadScript(){ 
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = 'https://maps.googleapis.com/api/js?key=AIzaSyBjZiWFPIlj4Gx4aa2YQsphCnOOVR5UBj8&callback=initMap';
  document.getElementByTagName('northpole')[0].appendChild(script); }}
  
  window.onload = loadScript);
