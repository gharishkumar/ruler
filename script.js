document.getElementsByTagName('pinch-zoom')[1].style.display = "none";
document.getElementsByTagName('pinch-zoom')[0].style.display = "";

function toggleScale() {
    zoom = !zoom;
    var btn = document.getElementById('calibrate');
    btn.innerHTML = zoom ? 'OK' : 'Calibrate';
    if(zoom) {
        document.getElementsByTagName('pinch-zoom')[1].style.display = "";
        document.getElementsByTagName('pinch-zoom')[0].style.display = "none";
    }
    else {
        document.getElementsByTagName('pinch-zoom')[1].style.display = "none";
        document.getElementsByTagName('pinch-zoom')[0].style.display = "";
        zoom = !zoom;
        document.getElementsByTagName('pinch-zoom')[0].scaleTo(document.getElementsByTagName('pinch-zoom')[1].scale, opts = {});
        zoom = !zoom;
    }
}
