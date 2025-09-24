document.querySelectorAll(".card button").forEach(button => {
  button.addEventListener("click", () => {
    const url = button.getAttribute("data-url");
    if (url) window.open(url, "_blank");
  });
});

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    const text = link.textContent.trim().toUpperCase();

    // Highlight active link
    navLinks.forEach(l => l.classList.remove("active"));
    link.classList.add("active");

    document.querySelectorAll(".card").forEach(card => {
      const isExtension = card.classList.contains("extension");
      const isEwallet = card.classList.contains("ewallet");
      const isFaucet = card.classList.contains("faucet");
      const isInstant = card.classList.contains("instant");
      const isAirdrop = card.classList.contains("airdrop");
      const isApp = card.classList.contains("app");
      const isUve = card.classList.contains("uve");
      const isShortlinks = card.classList.contains("shortlinks");
      const isAds = card.classList.contains("ads");
      const isUfe = card.classList.contains("ufe");

      if (text === "FAUCETS") {
        card.style.display = isFaucet? "flex" : "none";
      } else if (text === "INSTANT FAUCETS") {
        card.style.display = isInstant ? "flex" : "none";
      } else if (text === "E-WALLETS") {
        card.style.display = isEwallet ? "flex" : "none";
      } else if (text === "EXTENSIONS") {
        card.style.display = isExtension ? "flex" : "none";
      } else if (text === "AIRDROPS") {
        card.style.display = isAirdrop ? "flex" : "none";
      } else if (text === "APPS 4 EARNING") {
        card.style.display = isApp ? "flex" : "none";
      } else if (text === "UPLOAD/SHARE VIDEOS AND EARN") {
         card.style.display = isUve ? "flex" : "none";
      } else if (text === "BEST SHORTLINKS SITES TO EARN") {
        card.style.display = isShortlinks ? "flex" : "none";
      } else if (text === "ADVERTISE AND PUBLISH") {
        card.style.display = isAds ? "flex" : "none";
      } else if (text === "UPLOAD/SHARE FILES AND EARN") {
        card.style.display = isUfe ? "flex" : "none";
      } else {
        card.style.display = "flex";
      }

    });
  });
});
