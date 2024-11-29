const Slides = document.querySelectorAll(".slide-page img");
let index = 0;
let InterValid = null;

document.addEventListener("DOMContentLoaded", InitializeSlider);

function InitializeSlider() {
    if(Slides.length > 0) {
        Slides[index].classList.add("DisplaySlide");
        InterValid = setInterval(NextSlide, 5000);
    }
}

function ShowSlide(index) {
    if(index >= Slides.length) {
        index = 0;
    } else if(index < 0) {
        index = Slides.length - 1;
    }

    Slides.forEach(slide => {
        slide.classList.remove("DisplaySlide");
    });
    Slides[index].classList.add("DisplaySlide");
}

function PreviousSlide() {
    index--;
    ShowSlide(index);
}

function NextSlide() {
    index++;
    ShowSlide(index);
}
