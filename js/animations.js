// Function to initialize Lottie Animations and set up hover effects
function initializeLottieAnimations() {
  // Initialize Lottie Animations
  const ethosAnimation = lottie.loadAnimation({
    container: document.getElementById('ethos-animation'),
    renderer: 'svg',
    loop: false,  // Animation will stop after playing
    autoplay: false,  // We'll control autoplay via hover events
    path: 'images/OVEL.json'  // Path to your Lottie JSON animation file
  });

  const investmentAnimation = lottie.loadAnimation({
    container: document.getElementById('investment-animation'),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'images/OVEL.json'  // Same animation file for this item
  });

  const teamAnimation = lottie.loadAnimation({
    container: document.getElementById('team-animation'),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'images/OVEL.json'  // Same animation file for this item
  });

  const storiesAnimation = lottie.loadAnimation({
    container: document.getElementById('stories-animation'),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'images/OVEL.json'  // Same animation file for this item
  });

  // Function to handle hover events and trigger animation playback
  function setupHoverEffect(linkSelector, animation) {
    const link = document.querySelector(linkSelector);

    // Play animation on mouse enter
    link.addEventListener('mouseenter', () => {
      animation.play();
    });

    // Stop animation on mouse leave
    link.addEventListener('mouseleave', () => {
      animation.stop();
    });
  }

  // Set up hover effects for each navigation link
  setupHoverEffect('a[href="./index.html"]', ethosAnimation);  // Our Ethos
  setupHoverEffect('a[href="./html/investment.html"]', investmentAnimation);  // Our Investment
  setupHoverEffect('a[href="./html/team.html"]', teamAnimation);  // Our Team
  setupHoverEffect('a[href="./html/stories.html"]', storiesAnimation);  // Our Stories

  // Ensure the animations are only loaded once per page
  window.onload = function() {
    ethosAnimation.goToAndStop(0, true);  // Ensure the animation is at the first frame initially
    investmentAnimation.goToAndStop(0, true);
    teamAnimation.goToAndStop(0, true);
    storiesAnimation.goToAndStop(0, true);
  };
}

// Call the initialize function to set up Lottie Animations
initializeLottieAnimations();

// Optional: Add an event listener to reset animations on page transitions (if needed for SPA)
if (window.history.pushState) {
  window.addEventListener('popstate', function () {
    // Re-initialize animations each time the user navigates (e.g., going back/forward in browser history)
    initializeLottieAnimations();
  });
}
