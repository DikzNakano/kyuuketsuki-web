// =========================
// Mobile Menu
// =========================

const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
});

// Tutup menu saat klik link
document.querySelectorAll("#mobileMenu a").forEach(link => {
    link.addEventListener("click", () => {
        mobileMenu.classList.remove("active");
    });
});

// =========================
// Counter Animation
// =========================

const counters = document.querySelectorAll(".counter");

const runCounter = () => {

    counters.forEach(counter => {

        const target = Number(counter.dataset.target);

        const update = () => {

            const current = Number(counter.innerText);

            const increment = Math.ceil(target / 80);

            if(current < target){

                counter.innerText = current + increment;

                setTimeout(update,20);

            }else{

                counter.innerText = target;

            }

        }

        update();

    });

}

// Jalankan sekali
runCounter();

// =========================
// Fade In Animation
// =========================

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});

document.querySelectorAll("section").forEach(section=>{

    section.classList.add("hidden");

    observer.observe(section);

});

// =========================
// Navbar Blur Saat Scroll
// =========================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 20){

        navbar.style.background = "rgba(0,0,0,.75)";
        navbar.style.backdropFilter = "blur(20px)";

    }else{

        navbar.style.background = "rgba(0,0,0,.3)";

    }

});