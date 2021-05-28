//import 'https://cdn.jsdelivr.net/npm/@pwabuilder/pwaupdate';

//const el = document.createElement('pwa-update');
//document.body.appendChild(el);

var btn = document.getElementById("calibrate");
var zoom = false;
var pinchZoom1 = document.getElementsByTagName("pinch-zoom")[0];
var pinchZoom2 = document.getElementsByTagName("pinch-zoom")[1];
var calibration_ins = document.getElementById("calibration-ins");
var card_ins = document.getElementById("card-ins");
var moreinfo = document.getElementsByClassName("moreinfo");
var moreinfobtn = document.getElementsByClassName("moreinfobtn");

pinchZoom1.style.display = "";
pinchZoom2.style.display = "none";

if(localStorage.zoom) {
    btn.innerHTML = "Re-calibrate"
    zoom = !zoom;
    pinchZoom1.scaleTo(localStorage.zoom, opts = {});
    zoom = !zoom;
    pinchZoom1.style.display = "";
}
else {    
    calibration_ins.style.display = "";
}
function toggleScale() {
    zoom = !zoom;
    btn.innerHTML = zoom ? "OK" : "Re-calibrate";
    calibration_ins.style.display = "none";
    if(zoom) {
        pinchZoom1.style.display = "none"
        pinchZoom2.style.display = "";
    }
    else {
        pinchZoom1.style.display = "";
        pinchZoom2.style.display = "none";
        localStorage.setItem("zoom",pinchZoom2.scale);
        zoom = !zoom;
        pinchZoom1.scaleTo(pinchZoom2.scale, opts = {});
        zoom = !zoom;
    }
    if(!localStorage.zoom) {
        card_ins.style.display = "";
    }
}
function showMoreInfo() {
    for(var i =0; i<moreinfo.length; i++){
        moreinfo[i].style.display = '';
    }
    for(var i =0; i<moreinfobtn.length; i++){
        moreinfobtn[i].style.display = 'none';
    }
}
function hideCardIns() {
    card_ins.style.display = 'none'
}
