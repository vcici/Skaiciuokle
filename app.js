var output = document.getElementById("atsakymas");
var btSkaiciuoti = document.getElementById("skaiciuoti");
var cm = document.getElementById("cm");
var coliai = function (cm) {
    return cm * 0.39370;
};
var skaiciuoti = function () {
    var centimetrai = cm.valueAsNumber;
    if (output != null) {
        output.innerHTML = '' + coliai(centimetrai);
    }
};
if (btSkaiciuoti != null) {
    btSkaiciuoti.onclick = skaiciuoti;
}
