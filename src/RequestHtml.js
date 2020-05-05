import axios from 'axios';


/*axios.get('https://httpbin.org/get')
    .then(function (response) {
        console.log(response.data);
        console.log(response.status);
    }); */

function getAlert() {
    alert("Hello World!");
}

function reqListener() {
    alert(this.responseText);
}

var oReq = new XMLHttpRequest();
oReq.addEventListener("load", reqListener);
oReq.open("GET", "http://localhost:5000/api/Email/teste01@gmail.com");
oReq.send();