document.addEventListener('DOMContentLoaded', function() {
  // Call the function to initialize Lottie Animations after DOM is loaded
  initializeLottieAnimations();
});

// Function to initialize Lottie Animations and set up hover effects
function initializeLottieAnimations() {
  // Initialize Lottie Animations
  const ethosAnimation = lottie.loadAnimation({
    container: document.getElementById('ethos-animation'),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: '../images/OVEL.json'
  });

  const investmentAnimation = lottie.loadAnimation({
    container: document.getElementById('investment-animation'),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: '../images/OVEL.json'
  });

  const teamAnimation = lottie.loadAnimation({
    container: document.getElementById('team-animation'),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: '../images/OVEL.json'
  });

  const storiesAnimation = lottie.loadAnimation({
    container: document.getElementById('stories-animation'),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: '../images/OVEL.json'
  });

  // Function to handle hover events and trigger animation playback
  function setupHoverEffect(linkSelector, animation) {
    const links = document.querySelectorAll(linkSelector);

    links.forEach(link => {
      // Play animation on mouse enter
      link.addEventListener('mouseenter', () => {
        animation.play();
      });

      // Stop animation on mouse leave
      link.addEventListener('mouseleave', () => {
        animation.stop();
      });
    });
  }

  // Set up hover effects for each navigation link with href ending in .html
  setupHoverEffect('a[href$="index.html"]', ethosAnimation);  // For links ending with .html
  setupHoverEffect('a[href$="investment.html"]', investmentAnimation);  // Specific link for investment
  setupHoverEffect('a[href$="team.html"]', teamAnimation);  // Specific link for team
  setupHoverEffect('a[href$="stories.html"]', storiesAnimation);  // Specific link for stories

  window.onload = function() {
    ethosAnimation.goToAndStop(0, true);
    investmentAnimation.goToAndStop(0, true);
    teamAnimation.goToAndStop(0, true);
    storiesAnimation.goToAndStop(0, true);
  };
}
