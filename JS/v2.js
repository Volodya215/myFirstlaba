function square(a,h){
    var s = (a*h)/2
    alert("Площа прямокутного трикутника = " + s + ".");
    return s
}

function square_rec(obj){
    obj.res.value = obj.num1.value*obj.num1.value
}

function triang(obj){
    var temp1 = obj.x1.value*obj.y2.value + obj.x2.value*obj.y3.value+obj.x3.value*obj.y1.value
    var temp2 = obj.x2.value*obj.y1.value + obj.x3.value*obj.y2.value+obj.x1.value*obj.y3.value
    var temp3 =  Math.abs((temp1-temp2)/2)
    obj.resu.value = temp3
}

function point(obj){
    obj.result.value = Math.sqrt(Math.pow(obj.x1.value,2)+Math.pow(obj.y1.value,2))
}

function change(obj){
    temp = obj.x.value
    obj.x.value = obj.y.value
    obj.y.value = temp
}