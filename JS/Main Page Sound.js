function toggleMute() {
    var video = document.getElementById('BGVideo');
    var icon = document.getElementById('muteIcon');

    if (video.muted) {
        video.muted = false; 
        icon.classList.remove('fa-volume-mute');  
        icon.classList.add('fa-volume-up');  
    
    } else {
        video.muted = true;  
        icon.classList.remove('fa-volume-up');  
        icon.classList.add('fa-volume-mute'); 
    }
}
