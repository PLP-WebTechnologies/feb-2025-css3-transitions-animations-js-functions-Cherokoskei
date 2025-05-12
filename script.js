// Get elements from DOM
const button = document.getElementById('animateButton');
const preferenceElement = document.getElementById('preference');

// Function to store preference in localStorage
function storePreference(preference) {
  localStorage.setItem('userPreference', preference);
}

// Function to retrieve preference from localStorage
function getPreference() {
  return localStorage.getItem('userPreference') || 'No preference set';
}

// Display the user's preference message on page load
function displayPreferenceMessage() {
  const preference = getPreference();
  preferenceElement.textContent = preference;
}

// Function to trigger animation on button click
button.addEventListener('click', function () {
  // Add CSS class for animation
  button.classList.add('clicked');

  // Trigger the preference store and display
  storePreference('Clicked the button');
  displayPreferenceMessage();

  // Remove animation class after the animation ends
  setTimeout(function () {
    button.classList.remove('clicked');
  }, 500); // match the duration of the animation (0.5s)
});

// Call this to load preference message when the page is loaded
window.onload = displayPreferenceMessage;
// CSS for animation
const style = document.createElement('style');
style.textContent = `
  #animateButton {
    transition: transform 0.5s;
  }
  #animateButton.clicked {
    transform: scale(1.2);
  }
`;
document.head.appendChild(style);