document.addEventListener("DOMContentLoaded", () => {
  particlesJS("particles-js", {
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: "#ffffff",
      },
      shape: {
        type: "circle",
      },
      opacity: {
        value: 0.5,
        random: false,
      },
      size: {
        value: 3,
        random: true,
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#ffffff",
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "grab",
        },
        onclick: {
          enable: true,
          mode: "push",
        },
      },
      modes: {
        grab: {
          distance: 140,
          line_linked: {
            opacity: 1,
          },
        },
        push: {
          particles_nb: 4,
        },
      },
    },
    retina_detect: true,
  });
});

//typewriter effect
const phrases = [
  "Java developer",
  "React developer",
  "MongoDB",
  "Node.js developer",
];

const typewriter = document.getElementById("typewriter");

let currentPhraseIndex = 0;
let currentCharIndex = 0;
let isDeleting = false;
let typingSpeed = 100; // ms per char
let pauseBetween = 1500; // pause before deleting or next

function type() {
  const currentPhrase = phrases[currentPhraseIndex];
  if (!isDeleting) {
    // typing
    typewriter.textContent = currentPhrase.substring(0, currentCharIndex + 1);
    currentCharIndex++;

    if (currentCharIndex === currentPhrase.length) {
      // pause before deleting
      isDeleting = true;
      setTimeout(type, pauseBetween);
      return;
    }
  } else {
    // deleting
    typewriter.textContent = currentPhrase.substring(0, currentCharIndex - 1);
    currentCharIndex--;

    if (currentCharIndex === 0) {
      isDeleting = false;
      currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
    }
  }
  setTimeout(type, isDeleting ? typingSpeed / 2 : typingSpeed);
}

type();

//dark mode toggle on/off

const toggleBtn = document.getElementById("darkModeToggle");
const icon = document.getElementById("darkModeIcon");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  icon.classList.toggle("fa-moon");
  icon.classList.toggle("fa-sun");
});

//form-contacting
const form=document.getElementById("contactForm");
form.addEventListener("submit",function(e){
  e.preventDefault(); //preventing page reload

  const actionURL = form.getAttribute("action");
  const formData=new FormData(form);

  fetch(actionURL,{
    method:'POST',
    body:formData,
    headers:{
      'Accept': 'application/json'
    }
  }).then(response => {
    if(response.ok){
      alert("Thank you for your message! I will get back to you soon");
      form.reset(); //clear the form after submission
    } else {
      alert("Oops! There was a problem with your submission. Please try again.");
    }
  }).catch(error => {
    console.error("Error:", error);
    alert("Oops! There was a problem with your submission. Please try again.");
  });
})
