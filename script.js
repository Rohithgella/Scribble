const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");
const close = document.getElementById("close");
if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}
if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}



const video = document.getElementById('my-video');
function updateVideoSource() {
  if (window.matchMedia('(max-width: 799px)').matches) {
    video.src = 'img/about/abc2.mp4';
  } else {
    video.src = 'img/about/abc.mp4';
  }
}

window.addEventListener('resize', updateVideoSource);
updateVideoSource();

