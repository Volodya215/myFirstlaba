function ttest(s) {
	var sres =
		'Прочитаний текст:' +
		' \r\n' +
		s +
		'\r\n' +
		'Текст в стовпчик:' +
		'\r\n';
	var cur = '';
	for (var i = 0; i <= s.length - 1; i += 1) {
		c = s.charAt(i);
		cur += c + '\r\n';
	}
	sres += cur;
	return sres;
}

function numword(obj) {
	var h = obj.data.value;
	var s = obj.textin.value;
	s = ' ' + s + ' ';
	h = ' ' + h + ' ';
	var m = h.length;
	var res = 0;
	var i = 0;
	while (i <= s.length - 1) {
		ch = s.substr(i, m);
		if (ch == h) {
			res += 1;
			i = i + m - 1;
		} else {
			i++;
		}
	}
	obj.result.value = res;
}

function ttest1(s) {
	return s
		.replace(/\s\s+/g, ' ')
		.split(' ')
		.map(item => Number(item) || item)
		.filter(item => item === String(item) && item)
		.length;
}

function probil(s) {
	return s.replace(/\s\s+/g, ' ')
}

function myFunction() {
	var str = document.getElementById('demo').innerHTML;
	var res = str.replace(/\btext\b/g, 'words');
	document.getElementById('demo').innerHTML = res;
}
