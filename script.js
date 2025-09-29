document.addEventListener("DOMContentLoaded", () => {

  const welcome = document.getElementById('welcome');
  if (welcome) {
    function updateWelcome() {
      const now = new Date();
      const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric', 
        hour:'2-digit', 
        minute:'2-digit', 
        second:'2-digit' 
      };
      welcome.textContent = `Welcome! Today is ${now.toLocaleDateString('en-US', options)}`;
    }
    setInterval(updateWelcome, 1000);
    updateWelcome();
  }

  // Background Color Changer 
  function changeBackground() {
    const colors = [
      '#FFADAD', '#FFD6A5', '#FDFFB6',
      '#CAFFBF', '#9BF6FF', '#A0C4FF', '#BDB2FF'
    ];
    document.body.style.backgroundImage = 'none';
    document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
  }
  // you can call changeBackground() on button click if needed

  //  Hero Slideshow (Index Page) 
  const hero = document.getElementById("hero");
  if (hero) {
    const captionEl = document.getElementById("hero-caption");
    const prevBtn = document.querySelector(".hero .prev");
    const nextBtn = document.querySelector(".hero .next");

    const slides = [
      { src: "images/hero.jpeg", caption: "Welcome to Ts’ehlanyane National Park" },
      { src: "images/hero2.jpg", caption: "Explore the Maloti Mountains" },
      { src: "images/hero 3.jpg", caption: "Enjoy hiking and wildlife" }
    ];

    let currentSlide = 0;

    function showSlide(index) {
      hero.style.backgroundImage = `url('${slides[index].src}')`;
      hero.style.backgroundColor = "";
      currentSlide = index;
      if (captionEl) captionEl.textContent = slides[index].caption;
    }

    function nextSlide() {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    }

    function prevSlide() {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      showSlide(currentSlide);
    }

    if (nextBtn) nextBtn.addEventListener("click", nextSlide);
    if (prevBtn) prevBtn.addEventListener("click", prevSlide);

    setInterval(nextSlide, 5000);
    showSlide(currentSlide);
  }

  // About Page 
  const parkInfoContainer = document.getElementById("parkInfo");
  const toggleBtn = document.getElementById("toggleBtn");
  const funFactEl = document.getElementById("funFact");

  if (parkInfoContainer && toggleBtn && funFactEl) {
    const park = {
      history: "Ts'ehlanyane National Park is part of Lesotho's first national park system.",
      culture: "It protects native woodlands and landscapes deeply connected to Basotho culture.",
      attractions: "The park features rare flora, hiking trails, waterfalls, and breathtaking mountain views.",
      extra: "It was established to safeguard the Ts'ehlanyane river and holds spiritual significance to the local communities."
    };

    parkInfoContainer.innerHTML = `
      <p><strong>History:</strong> ${park.history}</p>
      <p><strong>Culture:</strong> ${park.culture}</p>
      <p><strong>Attractions:</strong> ${park.attractions}</p>
      <p id="extraInfo" style="display:none;"><strong>More:</strong> ${park.extra}</p>
    `;

    const extraInfo = document.getElementById("extraInfo");
    toggleBtn.addEventListener("click", () => {
      if (extraInfo.style.display === "none") {
        extraInfo.style.display = "block";
        toggleBtn.textContent = "Show Less";
      } else {
        extraInfo.style.display = "none";
        toggleBtn.textContent = "Show More";
      }
    });

    const funFacts = [
      "Ts'ehlanyane covers over 5,600 hectares of mountain wilderness.",
      "The park is home to the endangered berg bamboo plant.",
      "It forms part of the larger Maloti-Drakensberg Transfrontier Conservation Area.",
      "Some trees in the park are over 200 years old."
    ];
    funFactEl.textContent = "Fun Fact: " + funFacts[Math.floor(Math.random() * funFacts.length)];
  }
});


document.addEventListener("DOMContentLoaded", () => {
  //  Gallery page 
  const gallery = document.getElementById("gallery");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightboxImg");
  const closeBtn = document.getElementById("closeBtn");

  if (gallery && lightbox && lightboxImg && closeBtn) {
    const images = document.querySelectorAll(".gallery-image");

    // Open lightbox
    images.forEach(img => {
      img.addEventListener("click", () => {
        lightbox.style.display = "flex";
        lightboxImg.src = img.src;
      });
    });

    // Close lightbox
    closeBtn.addEventListener("click", () => {
      lightbox.style.display = "none";
    });

    // Filter gallery
    window.filterGallery = function(category) {
      images.forEach(img => {
        if (category === "all" || img.classList.contains(category)) {
          img.style.display = "block";
        } else {
          img.style.display = "none";
        }
      });
    };
  }
});

