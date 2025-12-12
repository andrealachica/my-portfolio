// Theme Toggle
const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  // Switch icon based on mode
  if (document.body.classList.contains("dark-mode")) {
    themeBtn.textContent = "Light Mode"; 
  } else {
    themeBtn.textContent = "Dark Mode"; 
  }
});

// Edit Job Title
const editJobBtn = document.getElementById('editJobBtn');
const jobTitleEl = document.getElementById('jobTitle');

editJobBtn.addEventListener('click', () => {
  const current = jobTitleEl.textContent.trim();
  const next = prompt('Enter a new job title:', current);

  if (next === null) return; // user cancelled
  const cleaned = next.trim();
  if (!cleaned) {
    alert('Please enter a non-empty job title.');
    return;
  }

  jobTitleEl.textContent = cleaned;
  localStorage.setItem('jobTitle', cleaned); // optional persistence
});

// Load saved job title
const saved = localStorage.getItem('jobTitle');
if (saved) jobTitleEl.textContent = saved;

// Greeting based on time
const greetingEl = document.getElementById('greeting');
if (greetingEl) {
  const hour = new Date().getHours();
  let text = 'Hello';
  if (hour < 12) text = 'Good morning';
  else if (hour < 18) text = 'Good afternoon';
  else text = 'Good evening';

  greetingEl.textContent = `${text}, Andrea!`;
}

// Show/Hide Skills Feature 
const toggleSkillsBtn = document.getElementById('toggleSkillsBtn');
const skillsSection = document.getElementById('skillsSection');

toggleSkillsBtn.addEventListener('click', () => {
  const isHidden = skillsSection.style.display === 'none';

  if (isHidden) {
    skillsSection.style.display = 'block';
    toggleSkillsBtn.textContent = 'Hide Skills';
  } else {
    skillsSection.style.display = 'none';
    toggleSkillsBtn.textContent = 'Show Skills';
  }
});

// Message Box Counter
const msgBox = document.getElementById('msgBox');
const counter = document.getElementById('counter');
const maxLength = msgBox.getAttribute('maxlength');

msgBox.addEventListener('keyup', () => {
  const remaining = maxLength - msgBox.value.length;
  counter.textContent = remaining;

  // Turns red when close to limit
  if (remaining <= 20) {
    counter.style.color = 'red';
  } else {
    counter.style.color = 'var(--color-secondary)';
  }
});

// Footer Date Display
const dateElement = document.getElementById('dateDisplay');
if (dateElement) {
  const today = new Date();
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  dateElement.textContent = today.toLocaleDateString(undefined, options);
}
