setInterval(doIt, 1000);

const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function doIt () {
	const now = new Date();

	const sec = now.getSeconds();
	const secDegrees = ((sec / 60 ) * 360 ) + 90;
	secondHand.style.transform = `rotate(${secDegrees}deg)`

	const min = now.getMinutes();
	const minDegrees = ((min / 60 ) * 360 ) + 90;
	minuteHand.style.transform = `rotate(${minDegrees}deg)`

	const hour = now.getHours();
	const hourDegrees = ((hour / 12 ) * 360 ) + 90;
	hourHand.style.transform = `rotate(${hourDegrees}deg)`

	console.log('seconds', sec);
	console.log('minuts', min);
	console.log('hours', hour);

}