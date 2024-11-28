const obsever = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});


const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => obsever.observe(el));

const button = document.querySelector(".button");
button.addEventListener("click", (e) => {
    e.preventDefault();
    button.classList.add("animate");
    setTimeout(() => {
        button.classList.remove("animate");
    }, 600);
});

function toggle(){
    var trailer = document.querySelector(".video-container");
    var video = document.getElementById("myVideo");
    trailer.classList.toggle("active");
    video.pause();
    video.currentTime = 0 ;
}

