var tag = document.createElement("script");

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;

function onYouTubeIframeAPIReady() {
  player = new YT.Player("player", {
    height: "360",
    width: "640",
    videoId: "hHW1oY26kxQ",
    events: {
      onReady: onPlayerReady,
      onStateChange: onPlayerStateChange
    }
  });
}

// The API will call this function when the video player is ready.
function onPlayerReady(event) {
  event.target.playVideo();
}

// 	  The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;

function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING && !done) {
    setTimeout(stopVideo, infinity);
    done = true;
  }
}

// Stop video
function stopVideo() {
  player.stopVideo();
}

function playVideo() {
  player.playVideo();
}

var button = document.querySelector(".btn");

button.addEventListener("click", () => {
  if (player.getPlayerState() === 1) {
    button.innerHTML = "Play";
    player.stopVideo();
  } else {
    button.innerHTML = "Pause";
    player.playVideo();
  }
});

document.addEventListener(
  "k",
  e => {
    if (e.key === "k") {
      player.playVideo();
    }
  },
  false
);
