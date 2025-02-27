// place files you want to import through the `$lib` alias in this folder.
export function spotlight() {
// Cards spotlight
class Spotlight {
    constructor(containerElement) {
      this.container = containerElement;
      this.cards = Array.from(this.container.children);
      this.mouse = {
        x: 0,
        y: 0,
      };
      this.containerSize = {
        w: 0,
        h: 0,
      };
      this.initContainer = this.initContainer.bind(this);
      this.onMouseMove = this.onMouseMove.bind(this);
      this.init();
    }
  
    initContainer() {
      this.containerSize.w = this.container.offsetWidth;
      this.containerSize.h = this.container.offsetHeight;
    }
  
    onMouseMove(event) {
      const { clientX, clientY } = event;
      const rect = this.container.getBoundingClientRect();
      const { w, h } = this.containerSize;
      const x = clientX - rect.left;
      const y = clientY - rect.top;
      const inside = x < w && x > 0 && y < h && y > 0;
      if (inside) {
        this.mouse.x = x;
        this.mouse.y = y;
        this.cards.forEach((card) => {
          const cardX = -(card.getBoundingClientRect().left - rect.left) + this.mouse.x;
          const cardY = -(card.getBoundingClientRect().top - rect.top) + this.mouse.y;
          
    // if (window.innerWidth >= 1024) {
    //   console.log("desktop");
    //   console.log(window.innerWidth);
    // }

      if (!('ontouchstart' in window)) {
        card.style.setProperty('background', `radial-gradient(600px at ${cardX}px ${cardY}px, rgba(124, 58, 237, .25), transparent 10%)`)
      } else {
        console.log("mobile");
      }
        });
      }
    }
  
    init() {
      this.initContainer();
      window.addEventListener('resize', this.initContainer);
      window.addEventListener('mousemove', this.onMouseMove);
    }
  }
  
  // Init Spotlight
  const spotlights = document.querySelectorAll('[data-spotlight]');
  spotlights.forEach((spotlight) => {
    new Spotlight(spotlight);
  });}


export function navScroll() {

  const sections = document.querySelectorAll('section');
  const config = {
    rootMargin: '-50px 0px -55%',
    threshold: 0
  };

  let observer = new IntersectionObserver(function (entries, self) {
    let mostVisibleSection = null;
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (!mostVisibleSection || entry.intersectionRatio > mostVisibleSection.intersectionRatio) {
          mostVisibleSection = entry;
        }
      }
    });

    if (mostVisibleSection) {
      intersectionHandler(mostVisibleSection);
    }
  }, config);

  sections.forEach(section => {
    observer.observe(section);
  });

  function intersectionHandler(entry) {
    const id = entry.target.id;

    // Remove hover from the currently active link
    const currentlyActive = document.querySelector('nav ul li a.hover');
    if (currentlyActive) {
      currentlyActive.classList.remove('hover');
    }

    // Add hover to the link corresponding to the most visible section
    const shouldBeActive = document.querySelector('nav ul li a[data-ref="' + id + '"]');

    if (shouldBeActive) {
      shouldBeActive.classList.add('hover');
    }
  }

}