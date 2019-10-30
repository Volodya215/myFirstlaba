function nod(obj) {
    var n = obj.num1.value
    var m = obj.num2.value
    var p = n % m
    while (p != 0) {
        n = m
        m = p
        p = n % m
    }
    obj.res.value = m
}

function Goodnumber() {
    var n = parseInt(prompt("Вкажіть натуральне число", 6));
    var sum = n - 1; var temp = n;
    for (var i = 2; n > 1;) {
        if (!(n % i)) {
            sum -= i;
            n = n / i;
        }
        else
            i++;
    }
    if (!sum)
        alert("Число: " + temp + " є досконалим");
    else
        alert("Число: " + temp + " не є досконалим");
}

function propobj(obj) {
    var result = ""
    for (var i in obj) {
        result += obj.data.value + "." + i + " = " + (obj.data)[i] + "\r\n"
    } 
    result += "\n\r"
    form2.data.value = result
} 

function reverse(obj){
    var k = Number(obj.chuslo.value);
    var res = 0;

    while (k!=0){
        res=res*10+(k%10);
        k = Math.trunc(k/10);
    }
    document.number.result.value = res;
}

function calc()
{
	var r=1;
	for (let i=0; i<999999;i++)
	{
		let n=i;
		let s=0;
		for (let j=0; j<3; j++)
		{
			s+=n%10;
			n=Math.trunc(n/10);
		}

		for (let j=0; j<3; j++)
		{
			s-=n%10;
			n=Math.trunc(n/10);
		}
		if (s==0) r++;
	}
    document.ticket.rez.value = r;
}

function dil(obj)
{
	let n = Number(obj.num.value);
	let s="Дільники заданого натурального числа: "+"\n";
	for (let i=1; i<=n/2; i++)
	{
		if ((n%i)==0) s+=i+"\n";
    }
	s+=n;
	document.formx.restext.value=s;
}