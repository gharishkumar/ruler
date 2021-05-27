var btn = document.getElementById('calibrate');
var pinchZoom1 = document.getElementsByTagName('pinch-zoom')[0];
var pinchZoom2 = document.getElementsByTagName('pinch-zoom')[1];

pinchZoom1.style.display = "";
pinchZoom2.style.display = "none";

if(localStorage.zoom) {
    btn.innerHTML = "Re-calibrate"
    pinchZoom1.scaleTo(localStorage.zoom, opts = {});
}
function toggleScale() {
    zoom = !zoom;
    btn.innerHTML = zoom ? "OK" : "Re-calibrate";
    if(zoom) {
        pinchZoom1.style.display = "none"
        pinchZoom2.style.display = "";
    }
    else {
        pinchZoom1.style.display = "";
        pinchZoom2.style.display = "none";
        zoom = !zoom;
        pinchZoom1.scaleTo(pinchZoom2.scale, opts = {});
        localStorage.setItem("zoom",pinchZoom2.scale);
        zoom = !zoom;
    }
}
