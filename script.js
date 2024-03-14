var images = [
  { src: "img/pics/iot.png", },
  { src: "img/pics/web.png",},
  { src: "img/pics/app.png",}
];

var currentImage = 0;
var bannerImage = document.getElementById("banner-image");
var captionElement = document.getElementById("caption");

function changeImage() {
  bannerImage.style.opacity = 0;
  captionElement.style.opacity = 0;

  setTimeout(function() {
      bannerImage.src = images[currentImage].src;
      captionElement.textContent = images[currentImage].caption;
      currentImage = (currentImage + 1) % images.length;

      bannerImage.style.opacity = 1;
      captionElement.style.opacity = 1;
  }, 500); // Delay the image change for 500ms for smooth transition
}

setInterval(changeImage, 2500); 





