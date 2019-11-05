function chan (obj) {
	var r1 = Number(obj.a1.value)
	var r2 = Number(obj.a2.value)

	if ((r1 < 1) || (r1 > 3) || (r2 < 1) || (r2 > 3)) { alert('Неправильно задані номери зображень!') } else {
		var z = document.images[r1 - 1].src
		document.images[r1 - 1].src = document.images[r2 - 1].src
		document.images[r2 - 1].src = z
	}
}

function choice (n) {
	document.images[9].src = document.images[n + 5].src
}

function picsize (n) {
	if (n) { document.images[10].width = 450 } else { document.images[10].width = 90 }
}

function img (n, action) {
	if (action) {
		document.images[n + 2].src = '../image/whome' + n + '.jpg'
	} else {
		document.images[n + 2].src = '../image/home' + n + '.jpg'
	}
}

function setArrow (str, event) {
	const arrow = document.getElementById(str)
	if (event) {
		const newArrow = document.createElement('img')
		newArrow.src = '../image/arrow.png'
		newArrow.width = 45
		arrow.appendChild(newArrow)
	} else {
		arrow.removeChild(arrow.firstChild)
	}
}
