window.onload = function () { var images = ['imagens/bk/01.jpg', 'imagens/bk/02.jpg', 'imagens/bk/03.jpg', 'imagens/bk/04.jpg'];
var image = images[Math.floor(Math.random() * images.length)];
document.getElementsByTagName('body')[0].style.backgroundImage = "url('" + image + "')";
document.getElementsByTagName('body')[0].style.backgroundRepeat = "no-repeat";
document.getElementsByTagName('body')[0].style.backgroundPositionX = "center";
document.getElementsByTagName('body')[0].style.backgroundSize = "cover";
}