var mode = 0;

function ulang() {
    document.getElementById("box1").value = "";
    document.getElementById("box2").value = "";
    hapus();
}

function konvert() {
    var x = document.getElementById("box1").value;
    var y = document.getElementById("teks1").textContent;

    if (x == "") {
        alert("Your input field is empty!");
    } else {
        y == "Celcius (°C): " ? document.getElementById("box2").value=(9/5*x)+32 : document.getElementById("box2").value=(x-32)*5/9;
        tulis();
    }
}

function balik() {
    if(mode == 0) {
        mode = 1;
        document.getElementById("teks1").innerHTML = "Fahrenheit (°F):";
        document.getElementById("teks2").innerHTML = "Celcius (°C):";   
        tuker();
    }
    else {
        mode = 0;
        document.getElementById("teks1").innerHTML = "Celcius (°C):";
        document.getElementById("teks2").innerHTML = "Fahrenheit (°F):";
        tuker();
    }
}

function tuker() {
    var f = document.getElementById("box1").value;
    var c = document.getElementById("box2").value;
    document.getElementById("box1").value = c;
    document.getElementById("box2").value = f;
    // tulis();
    hapus();
}

function tulis() {
    var x = document.getElementById("box1").value;
    var y = document.getElementById("teks1").textContent;
    y == "Celcius (°C): " ? document.getElementById("cara").innerHTML="(9/5x"+x+")+32="+((9/5*x)+32) : document.getElementById("cara").innerHTML="("+x+"-32)x5/9="+((x-32)*5/9);
}

function hapus() {
    document.getElementById("cara").innerHTML="[Script]";
}