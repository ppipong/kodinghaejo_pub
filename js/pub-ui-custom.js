/* pub-js */
document.addEventListener('click', function(event) {
  if (event.target.matches('.xi-bookmark-o') || event.target.matches('.xi-bookmark')) {
    event.target.classList.toggle("xi-bookmark-o");
    event.target.classList.toggle("xi-bookmark");
  }
});

document.addEventListener('click', function(event) {
  if (event.target.matches('.xi-heart-o') || event.target.matches('.xi-heart')) {
    event.target.classList.toggle("xi-heart-o");
    event.target.classList.toggle("xi-heart");
  }
});
