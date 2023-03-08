const movieCards = document.querySelectorAll(".card");

movieCards.forEach((card) => {
  const popup = card.querySelector(".movie-popup");

  card.addEventListener("mouseenter", () => {
    popup.style.display = "block";
  });

  card.addEventListener("mouseleave", () => {
    popup.style.display = "none";
  });
});

let currentVideo = null;
function playTrailer(videoUrl) {
  document.body.style.overflow = "hidden";

  if (currentVideo !== null) {
    currentVideo.pause();
    currentVideo.parentNode.removeChild(currentVideo);
  }
  var popup = document.createElement("div");
  popup.classList.add("popup");
  let htmlData = `
  <div class="overlay">
        <div class="content">
            <i class="fa fa-xmark" id="cancel"></i>
            <video src="" class='video_playing'></video>
        </div>
    </div>
`;
  popup.insertAdjacentHTML("afterbegin", htmlData);
  document.body.appendChild(popup);

  let video = document.querySelector(".video_playing");
  video.src = videoUrl;
  video.setAttribute("autoplay", "");
  video.setAttribute("controls", "");
  currentVideo = video;

  let cancel = document.querySelector("#cancel");
  cancel.addEventListener("click", () => {
    popup.remove();
    document.body.style.overflow = "auto";
  });
}
