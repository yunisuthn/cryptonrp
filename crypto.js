var tab = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var nb = 13;
var a = ['T', 'E', 'X', 'T'];
var sortie = [];
var nba = a.length;

var b ="TEXTX";

for (var j = 0; j<=25; j++ ){
    document.write(tab[j]);
}

document.write('<br>');
for (var j = 0; j<=25; j++ ){
    document.write(tab[(j+(nb))%26]);
}

document.write('<br>');
for (var j = 0; j<nba; j++ ){
    document.write(a[j]);
}

document.write('<br>');
for (var i = 0; i<nba; i++ ){
    for (var j = 0; j<=25; j++ ){
        if(tab[j] == a[i]){
            document.write(tab[(j+(nb))%26]);
        }
    }
}

document.write('<br>');
document.write(b);
document.write('<br>');
for (var i = 0; i<b.length; i++ ){
    for (var j = 0; j<=25; j++ ){
        if(tab[j] == b.substr(i, 1)){
            document.write(tab[(j+(nb))%26]);
        }
    }
}


function fonction(){
    var solution;
    var dec = document.getElementById("Decalage").value;
    var dec1 = parseInt(dec);
    var text = document.getElementById("text").value; 
    
    for (var i = 0; i<text.length; i++ ){
        for (var j = 0; j<=25; j++ ){
            if(tab[j] == text.substr(i, 1)){
                document.getElementById("reponse").innerHTML = document.getElementById("reponse").innerHTML + tab[(j+(dec1))%26];
            }
        }
    }
}
