function c1 (obj) {
	var t = new Date()
	var h = t.getHours()
	var m = t.getMinutes()
	var s = t.getSeconds()
	var res = ''
	if (h < 10) {
		res += '0' + h
	} else {
		res += h
	}
	if (m < 10) {
		res += ':0' + m
	} else {
		res += ':' + m
	}
	if (s < 10) {
		res += ':0' + s
	} else {
		res += ':' + s
	}
	obj.rest.value = res
}

function def13 (obj) {
	var t = new Date()
	var c = ''
	var y = Number(obj.fye.value)
	for (var i = 0; i <= 11; i++) {
		t.setYear(y)
		t.setMonth(i)
		t.setDate(13)
		if (t.getDay() == 5) {
			с = c + fmon(i) + '\r\n'
		}
	}
	obj.res.value = с
}

function fmon (mont) {
	var s
	switch (mont) {
	case 0: s = 'січень'; break
	case 1: s = 'лютий'; break
	case 2: s = 'березень'; break
	case 3: s = 'квітень'; break
	case 4: s = 'травень'; break
	case 5: s = 'червень'; break
	case 6: s = 'липень'; break
	case 7: s = 'серпень'; break
	case 8: s = 'вересень'; break
	case 9: s = 'жовтень'; break
	case 10: s = 'листопад'; break
	case 11: s = 'грудень'; break
	}
	return s
}

function numberweek (obj) {
	var d = Number(obj.den.value)
	var m = Number(obj.mon.value)
	var countDay
	var result

	if (m < 1 || m > 12) {
		document.nweek.result.value = 'Невірний місяць!'
		return
	}
	if ((d < 1) || (m == 2 && d > 29)) {
		document.nweek.result.value = 'Невірна дата!'
		return
	}
	if (m == (1 || 3 || 5 || 7 || 8 || 10 || 12) && d > 31) {
		document.nweek.result.value = 'Невірна дата!'
		return
	}
	if (m == (4 || 6 || 9 || 11) && d > 30) {
		document.nweek.result.value = 'Невірна дата!'
		return
	}

	switch (m) {
	case 2: countDay = 31; break
	case 3: countDay = 59; break
	case 4: countDay = 90; break
	case 5: countDay = 120; break
	case 6: countDay = 151; break
	case 7: countDay = 181; break
	case 8: countDay = 212; break
	case 9: countDay = 243; break
	case 10: countDay = 273; break
	case 11: countDay = 304; break
	case 12: countDay = 334; break
	}
	countDay += d
	result = Math.trunc(countDay / 7)
	document.nweek.result.value = result
}

function znakzod (obj) {
	var month = obj.bmonth.value
	var date = obj.bdata.value
	var value
	if (month == 1 && date >= 20 || month == 2 && date <= 18) value = 'Водолій'
	else if (month == 2 && date >= 19 || month == 3 && date <= 20) value = 'Риби'
	else if (month == 3 && date >= 21 || month == 4 && date <= 19) value = 'Овен'
	else if (month == 4 && date >= 20 || month == 5 && date <= 20) value = 'Телець'
	else if (month == 5 && date >= 21 || month == 6 && date <= 21) value = 'Близнята'
	else if (month == 6 && date >= 22 || month == 7 && date <= 22) value = 'Рак'
	else if (month == 7 && date >= 23 || month == 8 && date <= 22) value = 'Лев'
	else if (month == 8 && date >= 23 || month == 9 && date <= 22) value = 'Діва'
	else if (month == 9 && date >= 23 || month == 10 && date <= 22) value = 'Терези'
	else if (month == 10 && date >= 23 || month == 11 && date <= 21) value = 'Скорпіон'
	else if (month == 11 && date >= 22 || month == 12 && date <= 21) value = 'Стрілець'
	else if (month == 12 && date >= 22 || month == 1 && date <= 19) value = 'Козеріг'
	else value = 'Невірна дата!'

	if ((date < 1) || (month == 2 && date > 29)) value = 'Невірна дата!'
	if (month == (1 || 3 || 5 || 7 || 8 || 10 || 12) && date > 31) value = 'Невірна дата!'
	if (month == (4 || 6 || 9 || 11) && date > 30) value = 'Невірна дата!'
	document.znak.result.value = value
}

function checkyear (obj) {
	var n = Number(obj.myear.value)
	var s = ''
	if (n >= 1984) n = (n - 1984) % 60
	else n = (60 - (1984 - n)) % 60

	switch (Math.trunc(n / 12)) {
 		case 0: s += 'зелений '; break
 		case 1: s += 'червоний '; break
 		case 2: s += 'жовтий '; break
 		case 3: s += 'білий '; break
 		case 4: s += 'чорний '; break
	case -1: s += 'червоний '; break
	case -2: s += 'жовтий '; break
	case -3: s += 'білий '; break
	case -4: s += 'чорний '; break
 	}
 	switch (n % 12) {
 		case 0: s += 'пацюк'; break
 		case 1: s += 'корова'; break
 		case 2: s += 'тигр'; break
 		case 3: s += 'заєць'; break
 		case 4: s += 'дракон'; break
 		case 5: s += 'змія'; break
 		case 6: s += 'кінь'; break
 		case 7: s += 'вівця'; break
 		case 8: s += 'мавпа'; break
 		case 9: s += 'курка'; break
 		case 10: s += 'собака'; break
 		case 11: s += 'свиня'; break
	case -1: s += 'корова'; break
	case -2: s += 'тигр'; break
	case -3: s += 'заєць'; break
	case -4: s += 'дракон'; break
	case -5: s += 'змія'; break
	case -6: s += 'кінь'; break
	case -7: s += 'вівця'; break
	case -8: s += 'мавпа'; break
	case -9: s += 'курка'; break
	case -10: s += 'собака'; break
	case -11: s += 'свиня'; break
 	}
 	obj.result.value = s
}
