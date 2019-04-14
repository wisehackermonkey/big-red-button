/*
 big red button script
 by Oran C
 oranbusiness@gmail.com
 github.com/wisehackermonkey
 20190413
*/

function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("demo").innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", "localhost:3000", true);
    xhttp.send();
}

