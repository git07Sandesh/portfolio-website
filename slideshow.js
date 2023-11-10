
document.addEventListener("DOMContentLoaded", function() {
    var scrollLinks = document.querySelectorAll('.scroll-link');
    scrollLinks.forEach(function(scrollLink) {
        scrollLink.addEventListener('click', function(event) {
            event.preventDefault();
            var targetId = this.getAttribute('href').substring(1);
            var targetElement = document.getElementById(targetId);
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        });
    });
});
