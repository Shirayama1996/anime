var slideIndex = 1;
showIndex(slideIndex);

function moveSlide(n) {
	showIndex(slideIndex += n);
}

function showIndex(n) {
	let numberOfSlides = document.getElementsByClassName("slides");
	if (n > numberOfSlides.length) {
		slideIndex = 1;
	}
	if (n < 1) {
		slideIndex = 3;
	}

	for (let i = 0; i < numberOfSlides.length; i++) {
		numberOfSlides[i].style.display = "none";
	}

	numberOfSlides[slideIndex - 1].style.display = "block";
}

var seriesIndex = 1;
showSeries(seriesIndex);

function moveSeries(n) {
	showSeries(seriesIndex += n);
}

function showSeries(n) {
	let numberOfSeries = document.getElementsByClassName("series");
	if (n > 2) {
		seriesIndex = 2;
	}
	if (n < 1) {
		seriesIndex = 1;
	}
	for (let i = 0; i < numberOfSeries.length; i++) {
		numberOfSeries[i].style.display = "none";
	}

	if (seriesIndex - 1 == 0) {
		for (let i = 0; i < numberOfSeries.length/2; i++) {
			numberOfSeries[i].style.display = "block";
		}
	}
	else if (seriesIndex - 1 == 1) {
		for (let i = 6; i < numberOfSeries.length; i++) {
			numberOfSeries[i].style.display = "block";
		}
	}
}