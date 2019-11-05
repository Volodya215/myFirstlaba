function maxval (obj) {
	var a = Number(obj.num1.value)
	var b = Number(obj.num2.value)
	var c = Number(obj.num3.value)
	var m = a
	if (b > m) { m = b }
	if (c > m) { m = c }
	obj.res.value = m
}

function maxval1 (obj) {
	var a = Number(obj.num1.value)
	var b = Number(obj.num2.value)
	var c = Number(obj.num3.value)
	var m = Math.max(Math.max(a, b), c)
	obj.res1.value = m
}

function maxval5 (obj) {
	var a = Number(obj.num1.value)
	var b = Number(obj.num2.value)
	var c = Number(obj.num3.value)
	var d = Number(obj.num4.value)
	var e = Number(obj.num5.value)
	var m = Math.max(Math.max(Math.max(a, b), c), Math.max(e, d))
	obj.res.value = m
}

function triangle (obj) {
	var a = Number(obj.num1.value)
	var b = Number(obj.num2.value)
	var c = Number(obj.num3.value)

	if (a > b + c || b > a + c || c > a + b) { obj.res.value = 'не можна' } else { obj.res.value = 'можна' }
}

function point (obj) {
	var x = Number(obj.num1.value)
	var y = Number(obj.num2.value)

	if (x == 0 && y == 0) { obj.res.value = 'Початок координат' } else if (x > 0 && y > 0) { obj.res.value = 1 } else if (x < 0 && y > 0) { obj.res.value = 2 } else if (x < 0 && y < 0) { obj.res.value = 3 } else { obj.res.value = 4 }
}
