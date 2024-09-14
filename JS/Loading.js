 function delayNavigation(url) {
    document.getElementById('Loading').style.display = 'flex';
    
    setTimeout(function() {
        window.location.href = url; 
    }, 3000); 
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.nav-link').forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault(); 
            delayNavigation(this.href); 
        });
    });
});