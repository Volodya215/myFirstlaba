function test(k, obj) {
    var a = obj.data.value
    if (a != "")
        obj.res.value = k * Math.pow(a, 2)
    else
        alert("Enter value")
}

function chpict(obj) {
    if ((obj.elements[0]).checked)
        document.mypict.align = "left"
    else
        document.mypict.align = "right"
}

function rset(obj) {
    document.mypict.align = "left"
}

function tagchange(k, obj) {
    if (k == 1)
        document.getElementById('nyteg').width = "500px";
    else if (k == 2)
        document.getElementById('nyteg').align = "right";
    else if (k == 3)
        document.getElementById('nyteg').color = "green";
}

function resetag() {
    document.getElementById('nyteg').width = "300px";
    document.getElementById('nyteg').color = "white";
    document.getElementById('nyteg').align = "center";
}
var g, s;
var n;
function sex(k) {
    n = k;
    if (k==1)
        g = "Чоловік. ";
    else if(k==0)
        g = "Жінка. ";
}

function status(k) {
    if (n==1) {
        if (k == 1)
            s = "Одружений. ";
        else if (k == 2)
            s = "Вільний. ";
        else
            s = "В активному пошуку. ";
    }
    else if(n==0){
        if (k == 1)
            s = "Заміжня. ";
        else if (k == 2)
            s = "Вільна. ";
        else
            s = "В активному пошуку. ";
    }
}

function res(obj) {
    var text = g + s + obj.age.value + " років";

    alert(text);
}