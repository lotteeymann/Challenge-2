setInterval(displayKlok,1000);
setInterval(displayDatum, 1000);

function displayKlok() {

    var today = new Date();

    var hours = today.getHours();
    var minutes = today.getMinutes();
    var seconds = today.getSeconds();

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    document.getElementById('Klok').innerHTML = hours + ":" + minutes + ":" + seconds;
}

document.getElementById('Button').onclick=function(){
    document.getElementById('Klok').style.color = 'rgb(255,255,255)';
};

function displayDatum(){
    
    var today = new Date();

    var months = new Array('januari', 'februari', 'maart', 'april', 'mei', 'juni', 'juli', 'augustus', 'september', 'oktober', 'november', 'december');

    document.getElementById('datum').innerHTML = today.getDate() + ' ' + months[today.getMonth()] + ' ' + today.getFullYear();
}

function displayImage() {

    var today = new Date();

    var image = today.getHours();

    if (image >= 10 && image < 17) {
        document.getElementById('Image').src = "Day.png";
    }
    
    else if (image >= 17 && image < 20) {
        document.getElementById('Image').src = "Noon.png";
    }

    else {
        document.getElementById('Image').src = "Night.png";
    }
}

displayDatum(), displayImage(), displayKlok();