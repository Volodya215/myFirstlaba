var s = "";
var sum = 0;

function gr(obj, m) {
    var r = 100 * (Number(m) + 1);
    s += ((obj.elements[0])[m]).text + "\r\n"
    obj.restext.value = s
    sum += r
    obj.res.value = r
}

var sum1 = 0;
var q;
var a;

function eq() {
    q = test.question.value
    a = test.answer.value;
    if (a == q)
    sum1 += 1
}

function result() {
    document.test.res.value = sum1
}

function ChangeColor(obj) {
    let i = parseInt(obj.indexrow.value) - 1;
    let j = parseInt(obj.indexcal.value) - 1;
    document.getElementById("tb").rows[i].cells[j].style.backgroundImage = 'url()';
    if (obj.color.value == "green")
        document.getElementById("tb").rows[i].cells[j].style.backgroundColor = "green";
    else if (obj.color.value == "red")
        document.getElementById("tb").rows[i].cells[j].style.backgroundColor = "red";
    else if (obj.color.value == "blue")
        document.getElementById("tb").rows[i].cells[j].style.backgroundColor = "blue";
    else if (obj.color.value == "none")
        document.getElementById("tb").rows[i].cells[j].style.backgroundColor = obj.ucolor.value;
}

function ChangeImg(obj) {
    let i = parseInt(obj.indexrow.value) - 1;
    let j = parseInt(obj.indexcal.value) - 1;

    if (obj.color1.value == 'pic1')
        document.getElementById("tb").rows[i].cells[j].style.backgroundImage = 'url(../image/home1.jpg)';
    else if (obj.color1.value == 'pic2')
        document.getElementById("tb").rows[i].cells[j].style.backgroundImage = 'url(../image/home2.jpg)';
}

var sumt = ""
var sump = 0
var count = 0
function lis(obj, m) {
    var r = 15 * (Number(((obj.elements[0])[m]).value) + 1);
    sumt += ((obj.elements[0])[m]).text + "\r\n";
    obj.restext.value = sumt;
    sump += r;
    obj.res.value = r;
    count++;

   // document.list.resgr.value = sump;
    //document.list.Count.value = count;
}

function sumlist() {
    document.list.resgr.value = sump;
    document.list.Count.value = count;
}