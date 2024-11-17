const ImageBox = document.querySelector.selector('.slider-images');
const Images = document.querySelectorAll('.slider-images img');
const TotalImages = images.length;
let Index = 0;
const SlideInterval = 5000;

function SlideImage() {
    Index = (index + 1) % TotalImages;

    const OffsetX = -Index * 100;

    ImagesContainer.style.trasnform = `translateX(${offsetX}%)`;
}

setInterval(SlideImage, SlideInterval);