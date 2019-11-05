var s = 'Baм подобається: \r\n'

function set (vch) {
	s = s + vch + '\r\n'
	document.form1.area.value = s
}

function grant () {
	var d = document
	var k = 0
	if ((d.form2.elements[0]).checked) { k = k + Number(d.form2.elements[0].value) }
	if ((d.form2.elements[1]).checked) { k = k + Number(d.form2.elements[1].value) }
	if ((d.form2.elements[2]).checked) { k = k + Number(d.form2.elements[2].value) }
	form2.ww.value = 'Ваша винагорода ' + k + ' y.e.'
}

function pay () {
	var d = document
	var k = 0
	var course = 0

	if ((d.form3.elements[0]).checked) { k = k + Number(d.form3.elements[0].value) } else if ((d.form3.elements[1]).checked) { k = k + Number(d.form3.elements[1].value) } else if ((d.form3.elements[2]).checked) { k = k + Number(d.form3.elements[2].value) } else {
		alert('Виберіть тип курсу!')
		return
	}

	if ((d.form3.elements[3]).checked) { k = k + Number(d.form3.elements[3].value) } else if ((d.form3.elements[4]).checked) { k = k + Number(d.form3.elements[4].value) } else if ((d.form3.elements[5]).checked) { k = k + Number(d.form3.elements[5].value) } else {
		alert('Виберіть тривалість курсу!')
		return
	}

	course = k

	if ((d.form3.elements[6]).checked) { k = k + Number(d.form3.elements[6].value) }
	if ((d.form3.elements[7]).checked) { k = k + Number(d.form3.elements[7].value) }
	if ((d.form3.elements[8]).checked) { k = k + Number(d.form3.elements[8].value) }

	if ((d.form3.elements[9]).checked) { k = k + Number(d.form3.elements[9].value) }
	if ((d.form3.elements[10]).checked) { k = k + Number(d.form3.elements[10].value) }

	form3.wwc.value = 'Вартість курсу: ' + course + ' y.e.'
	form3.wws.value = 'Вартість навчання: ' + k + ' y.e.'
}
