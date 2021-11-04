function toggleVideo() {
  const trailer = document.querySelector('.trailer');
  const video = document.querySelector('video');
  trailer.classlist.toggle('active');

  video.currentTime= 0;
  video.pause();
}