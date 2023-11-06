document.addEventListener("DOMContentLoaded", function() {
    const darkModeVideo = document.getElementById('darkModeVideo');
    const lightModeVideo = document.getElementById('lightModeVideo');

    // Set the correct paths or URLs for your video files
    darkModeVideo.src = 'docs/dark.mp4';
    lightModeVideo.src = 'docs/light.mp4';
    document.getElementById('modeSwitch').addEventListener('click', function() {
        if (darkModeVideo.style.display === 'none') {
            darkModeVideo.style.display = 'block';
            lightModeVideo.style.display = 'none';
            this.textContent = 'Switch to Dark Mode';
        } else {
            darkModeVideo.style.display = 'none';
            lightModeVideo.style.display = 'block';
            this.textContent = 'Switch to Light Mode';
        }
    });
    
});