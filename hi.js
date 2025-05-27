function showSection(sectionId) {
   
    var sections = document.querySelectorAll('.content-section');
    sections.forEach(function(section) {
        section.style.display = 'none';
    });

    
    var activeSection = document.getElementById(sectionId);
    if (activeSection) {
        activeSection.style.display = 'block';
    }
}


document.addEventListener('DOMContentLoaded', function() {
    showSection('home');
});