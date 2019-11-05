function ttest(s) {
    var sres = "Прочитаний текст:" + " \r\n" + s + "\r\n" +
        'Текст в стовпчик:' + "\r\n"
    var cur = ""
    for (var i = 0; i <= s.length - 1; i += 1) {
        c = s.charAt(i);
        cur += c + "\r\n"
    }
    sres += cur
    return sres
}

function numword(obj) {
    var h = obj.data.value
    var s = obj.textin.value
    s = ' ' + s + ' '
    h = ' ' + h + ' '
    var m = h.length
    var res = 0
    var i = 0
    while (i <= s.length - 1) {
        ch = s.substr(i, m)
        if (ch == h) { res += 1; i = i + m - 1 } else { i++ }
    }
    obj.result.value = res
} 