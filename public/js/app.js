const shortenForm = document.getElementById("shortenForm");
const shortenedUrl = document.getElementById("shortenedUrl");
const logoutButton = document.getElementById("logoutButton");

// Check if the user is logged in
window.onload = () => {
  const token = localStorage.getItem("token");
  if (!token) {
    alert("Please log in first.");
    window.location.href = "/login.html";
  }
};

// URL Shortener Handler
shortenForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const url = document.getElementById("url").value;
  const token = localStorage.getItem("token");

  const response = await fetch("/shorten", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ originalUrl: url }),
  });

  if (response.ok) {
    const { shortUrl } = await response.json();
    shortenedUrl.textContent = `Shortened URL: ${window.location.origin}/${shortUrl}`;
  } else {
    alert("Error shortening URL. Please try again.");
  }
});

// Logout Handler
logoutButton.addEventListener("click", () => {
  localStorage.removeItem("token");
  alert("Logged out successfully!");
  window.location.href = "/login.html";
});
