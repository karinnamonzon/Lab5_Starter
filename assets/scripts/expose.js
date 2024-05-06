// expose.js

window.addEventListener('DOMContentLoaded', init);
const jsConfetti = new JSConfetti();

function init() {
  const volumeInput = document.getElementById("volume");
  const volumeImage = document.querySelector("#volume-controls img");
  
  function updateVolumeImage(volume) {
    if (volume < 1) {
      volumeImage.src = "assets/icons/volume-level-0.svg";
    } else if (volume < 33) {
      volumeImage.src = "assets/icons/volume-level-1.svg";
    } else if (volume < 67) {
      volumeImage.src = "assets/icons/volume-level-2.svg";
    } else {
      volumeImage.src = "assets/icons/volume-level-3.svg";
    }
  }

  
    // Event listener for volume input change
  volumeInput.addEventListener("input", function () {
    updateVolumeImage(volumeInput.value);
  });

  const hornSelect = document.getElementById("horn-select");
  const hornImage = document.querySelector("#expose img");
  const audioElement = document.querySelector("audio");
  const playButton = document.querySelector("button");

  // Object to map horn values to corresponding image and audio sources
  const hornSources = {
    "select": { 
      image: "assets/images/no-image.png",
      audio: "" 
    },
    "air-horn": { 
      image: "assets/images/air-horn.svg",
      audio: "assets/audio/air-horn.mp3" 
    },
    "car-horn": { 
      image: "assets/images/car-horn.svg",
      audio: "assets/audio/car-horn.mp3" 
    },
    "party-horn": { 
      image: "assets/images/party-horn.svg",
      audio: "assets/audio/party-horn.mp3" 
    }
  };

  function updateHornSelection() {
    const selectedHorn = hornSelect.value;
    hornImage.src = hornSources[selectedHorn].image;
    audioElement.src = hornSources[selectedHorn].audio;
  }

  // Event listener for horn selection change
  hornSelect.addEventListener("change", function () {
    updateHornSelection();
  });

  playButton.addEventListener("click", function () {
    // Play the audio
    audioElement.volume = volumeInput.value / 100;
    audioElement.play();

    if (hornSelect.value === "party-horn") {
      jsConfetti.addConfetti();
    }
  });
}