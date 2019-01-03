window.onload = function agefunc() {
	var today = new Date();
    var birthDate = new Date('February 3, 1999, 02:25:00');
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    console.log(age);
    document.getElementById('age').innerText = age + "";
}