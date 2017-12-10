// Scroll Reveal
window.sr = ScrollReveal();
sr.reveal('#logo', {
    duration: 1000,
    origin:'left'
});
sr.reveal('nav', {
    duration: 1000,
    origin:'top',
    distance:'300px'
});
sr.reveal('#banner img', {
    duration: 3000,
    origin:'top',
    distance:'500px'
});
sr.reveal('#banner h1',{
    duration: 2000,
    origin:'left'
});
sr.reveal('#banner p', {
    duration: 4000,
    origin:'left'
});
sr.reveal('#donald li', {
    duration: 2000,
    origin:'right'
});
sr.reveal('#internet h2', {
    duration: 2000,
    origin:'left'
});
sr.reveal('#internet p', {
    duration: 3000,
    origin:'right'
});
sr.reveal('#internet li , #gambar', {
    duration: 2000,
    origin:'bottom'
});

sr.reveal('#deskripsi h2', {
    duration: 500,
    origin:'right'
});
sr.reveal('#deskripsi p', {
    duration: 2000,
    origin:'bottom',
    distance:'300px'
});
sr.reveal('#deskripsi ul', {
    duration: 2000,
    origin:'right',
    delay: 1000
});
sr.reveal('#contextual h2', {
    duration: 1000,
    origin:'bottom'
});
sr.reveal('#contextual h2 + p', {
    duration: 2000,
    origin:'bottom',
    delay: 1000
});
sr.reveal('#contextual li', {
    duration: 4000,
    origin:'top'
});
sr.reveal('#jonathan li h2', {
    duration: 500,
    origin:'bottom'
});
sr.reveal('#first p', {
    duration: 2000,
    origin:'top'
});
sr.reveal('#first a', {
    duration: 2500,
    origin:'top'
});
sr.reveal('#twitter', {
    duration: 3000,
    origin:'top'
});
sr.reveal('#skills', {
    duration: 1000,
    origin:'top'
});
sr.reveal('#outdoor h2, #outdoor h2 + p' , {
    duration: 2000,
    origin:'left'
});
sr.reveal('#outdoor p + img' , {
    duration: 1000,
    origin:'bottom'
});
sr.reveal('#outdoor img + p' , {
    duration: 1000,
    origin:'left'
});
sr.reveal('#outdoor h3' , {
    duration: 3000,
    origin:'top'
});
sr.reveal('.brand-img' , {
    duration: 1000,
    origin:'bottom'
});
sr.reveal('footer h2' , {
    duration: 3000,
    origin:'top'
});
sr.reveal('#left, #right, #center' , {
    duration: 1500,
    origin:'center'
});




// Smooth Scrolling
$('a[href*="#"]:not([href="#"])').click(function() {
if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
    if (target.length) {
    $('html, body').animate({
        scrollTop: target.offset().top
    }, 1000);
    return false;
    }
    }
});

// Arrow hilang
window.onscroll = function() {muncul()};

function muncul() {
    if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
        document.getElementById("arrow").className = "block";
    } else {
        document.getElementById("arrow").className = "none";
    }
}