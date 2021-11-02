window.onload = function () { var images = ['bk/01.jpg', 'bk/02.jpg', 'bk/03.jpg', 'bk/04.jpg', 'bk/05.jpg', 'bk/06.jpg', 'bk/07.jpg', 'bk/08.jpg', 'bk/09.jpg', 'bk/10.jpg', 'bk/11.jpg', 'bk/12.jpg', 'bk/13.jpg', 'bk/14.jpg'];
var image = images[Math.floor(Math.random() * images.length)];
document.getElementsByTagName('body')[0].style.backgroundImage = "url('" + image + "')";
document.getElementsByTagName('body')[0].style.backgroundRepeat = "no-repeat";
document.getElementsByTagName('body')[0].style.backgroundPositionX = "center";
document.getElementsByTagName('body')[0].style.backgroundSize = "cover";
}