// Choose a video player library: Plyr (https://plyr.io/)
const videoPlayer = new Plyr('.video-player-container'); 


const contentElements = document.querySelectorAll('[data-translate]');
const translations = {
  en: {
    "Section Title": "Section Title",
    "Section description": "Section description...",
    "Additional reading": "Additional reading",
    "Quiz": "Quiz",
    "Mark completed": "Mark completed",
    "Progress": "Progress"
  },
  hi: {
    "Section Title": "शीर्षक अनुभाग",
    "Section description": "अनुभाग विवरण...",
    "Additional reading": "अतिरिक्त पठन",
    "Quiz": "क्विज़",
    "Mark completed": "पूरा हुआ चिह्नित करें",
    "Progress": "प्रगति"
  }
};

// Language selection logic
const languageDropdown = document.getElementById('languageDropdown');
languageDropdown.addEventListener('change', (event) => {
  const selectedLanguage = event.target.value;
  contentElements.forEach(element => {
    const translationKey = element.dataset.translate;
    if (translationKey && translations[selectedLanguage][translationKey]) {
      element.textContent = translations[selectedLanguage][translationKey];
    }
  });
});

// Progress tracking (using localStorage)
const progressData = JSON.parse(localStorage.getItem('courseProgress')) || {};
const markCompleteButton = document.querySelector('.mark-complete');
const progressTracker = document.querySelector('.progress-tracker');

function updateProgress(sectionId, isCompleted) {
  progressData[sectionId] = isCompleted;
  localStorage.setItem('courseProgress', JSON.stringify(progressData));

  let completedCount = 0;
  for (const key in progressData) {
    if (progressData[key]) {
      completedCount++;
    }
  }

  const totalSections = Object.keys(progressData).length;
  const progressPercentage = Math.floor((completedCount / totalSections) * 100);

  progressTracker.innerHTML = `
    <div class="progress">
      <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="${progressPercentage}" aria-valuemin="0" aria-valuemax="100" style="width: ${progressPercentage}%">${progressPercentage}%</div>
    </div>
  `;
}

markCompleteButton.addEventListener('click', () => {
  const sectionId = 1; 
  updateProgress(sectionId, true);
});

// Initialize progress based on existing data
if (progressData) {
  for (const sectionId in progressData) {
    if (progressData[sectionId]) {
      
    }
  }
}


if (!progressData[1]) { 
  updateProgress(1, false);
}

