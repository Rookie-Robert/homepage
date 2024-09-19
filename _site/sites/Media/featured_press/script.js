// Get The Date
var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function checkTime() {
	var date = new Date();
	var sufix = '';
	var hours = ('0' + date.getHours()).slice(-2);
	var minutes = ('0' + date.getMinutes()).slice(-2);
	var day = date.getDate();
	var month = monthNames[date.getMonth()];
	var weekday = dayNames[date.getDay()];
	var year = date.getFullYear();
	if (day > 3 && day < 21) sufix = 'th';
	switch (day % 10) {
		case 1:
			sufix = "st";
		case 2:
			sufix = "nd";
		case 3:
			sufix = "rd";
		default:
			sufix = "th";
	}
	document.getElementById('time').innerHTML = weekday + ' ' + day + sufix + ', ' + month + ' ' + year;
}
setInterval(checkTime(), 1000);





// Dark Mode Switcher
// Source: https://dev.to/ananyaneogi/create-a-dark-light-mode-switch-with-css-variables-34l8
const toggleSwitch = document.querySelector('.dark_mode_switch input[type="checkbox"]');
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
  
    if (currentTheme === 'dark') {
    	toggleSwitch.checked = true;
    }
}

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
    else {
		document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }    
}

toggleSwitch.addEventListener('change', switchTheme, false);