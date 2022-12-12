const video = document.getElementById('video');
const pipButton = document.getElementById('pipButton');

if ('pictureInPictureEnabled' in document) {
  pipButton.classList.remove('hidden');
  pipButton.disabled = false;
  
  pipButton.addEventListener('click', () => {
    if (document.pictureInPictureElement) {
      document
        .exitPictureInPicture()
        .catch(error => {
          console.error(error);
        });
    } else {
      video
      .requestPictureInPicture()
      .catch(error => {
        console.error(error);
      });
    }
  });
}

video.addEventListener('enterpictureinpicture', () => {
    pipButton.textContent = 'Exit Picture-in-Picture mode';
});

video.addEventListener('leavepictureinpicture', () => {
    pipButton.textContent = 'Enter Picture-in-Picture mode';
});