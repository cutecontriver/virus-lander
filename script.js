const progressBar = document.getElementById("progressBar");
const popup = document.getElementById("popup");
const downloadAntivirusBtn = document.getElementById("downloadAntivirusBtn");

function updateProgressBar() {
  let width = 1;
  const progressInterval = setInterval(() => {
    if (width >= 100) {
      clearInterval(progressInterval);
      showPopup();
    } else {
      width++;
      progressBar.style.width = width + "%";
      document.getElementById("progressBar").innerHTML = width + "%";
    }
  }, 30);
}

function showPopup() {
  popup.style.display = "block";
  imagebg.style.display = "block";
  mainbg.style.display = "none";
  //   document.body.style.pointerEvents = "none"; // Disable clicking on other elements
  // Block back button for mobile viewport
  if (window.innerWidth <= 768) {
    history.pushState(null, null, location.href);
    window.onpopstate = function () {
      history.go(1);
    };
  }
}

downloadAntivirusBtn.addEventListener("click", () => {
  // Redirect to another webpage (e.g., https://www.example.com/antivirus-download)
  window.location.href = "https://www.example.com/antivirus-download";
});

// Start the progress update
updateProgressBar();

// Function to create the evenly distributed sprinkled text elements
function createEvenlyDistributedText() {
  const sprinklesCount = 50; // Number of sprinkled text elements
  const rows = 5; // Number of rows
  const cols = Math.ceil(sprinklesCount / rows); // Calculate the number of columns

  const spacingX = window.innerWidth / (cols + 1);
  const spacingY = window.innerHeight / (rows + 1);

  let count = 0;

  for (let y = 1; y <= rows; y++) {
    for (let x = 1; x <= cols; x++) {
      if (count >= sprinklesCount) {
        break;
      }

      const sprinkledText = document.createElement("span");
      sprinkledText.textContent = "Virus ";
      sprinkledText.style.position = "absolute";
      sprinkledText.style.top = y * spacingY + "px";
      sprinkledText.style.left = x * spacingX + "px";
      sprinkledText.style.zIndex = -1;
      sprinkledText.style.fontSize = "14px"; // Adjust the font size for the sprinkled text
      sprinkledText.style.opacity = "0.2"; // Adjust the opacity to control visibility
      sprinkledText.style.pointerEvents = "none";
      sprinkledText.style.mixBlendMode = "screen";
      document.body.appendChild(sprinkledText);

      count++;
    }
  }
}

// Create the evenly distributed sprinkled text elements on page load
createEvenlyDistributedText();

// Function to block the back button on both mobile and larger screens
function blockBackButton() {
  history.pushState(null, null, document.URL);
  window.addEventListener("popstate", function () {
    history.pushState(null, null, document.URL);
  });
}

// Call the function to block the back button
blockBackButton();
