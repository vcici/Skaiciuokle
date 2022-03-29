const output:HTMLElement|null = document.getElementById("atsakymas");
const btSkaiciuoti = document.getElementById("skaiciuoti");
let cm = <HTMLInputElement> document.getElementById("cm");

const coliai = (cm) => {
    return cm * 0.39370;
}

const skaiciuoti = () => {
    let centimetrai = cm.valueAsNumber;
    if (output != null){
        output.innerHTML = '' + coliai(centimetrai);
    }
    
}

if (btSkaiciuoti != null){
    btSkaiciuoti.onclick = skaiciuoti;
}