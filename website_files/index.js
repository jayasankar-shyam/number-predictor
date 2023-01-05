const images = ["sample1.png", "sample2.png", "sample3.png"];

const random = Math.floor(Math.random() * images.length);
console.log(images[random]);
function changeImage() {
    document.getElementById("d-img").setAttribute('href', "images/"+images[random])
}
window.onload = changeImage;