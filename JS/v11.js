function mult() {
	img_array = new Array()
	for (var i = 0; i < 6; i++) { img_array[i] = new Image(50, 100) }
	// eslint-disable-next-line no-redeclare
	for (var i = 1; i < 7; i++) { img_array[i - 1].src = '../cartoon/cat' + i + '.png' }
	// img_array[0].src = '../cartoon/cat1.png'
	// img_array[1].src = '../cartoon/cat2.png'
	// img_array[2].src = '../cartoon/cat3.png'
	// img_array[3].src = '../cartoon/cat4.png'
	// img_array[4].src = '../cartoon/cat5.png'
	// img_array[5].src = '../cartoon/cat6.png'
	var t = new Date()
	p = -1
}

var x = 1;

function s() {
	p = p + 1
	document.images[0].src = img_array[p].src
	// eslint-disable-next-line no-implied-eval
	if (x == 1) setTimeout('s()', 600)
	else return

	if (p == 5) p = -1
}

function stop() {
	x = 0;
	document.images[0].src = img_array[0].src
}

var input = new Array(1, 2, 3, -3, -2, -1, 0, 1);

function countPositiveNumbers() {
	var result = new Array()
	input.forEach((number) => {
		if (Number(number) && number > 0) {
			result.push(number)
		}
	})
	document.plus.res.value = result.join(', ')
}

var mass = new Array(15, 22, 3, -32, -12, -7, 9, 451);

function findMax() {
	var max = mass[0];
	mass.forEach((number) => {
		if (Number(number) && number > max) {
			max = number
		}
	})
	document.max.res.value = max;
}
