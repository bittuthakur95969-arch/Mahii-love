function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.textContent = "💖";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = Math.random() * 2 + 3 + "s"; // 3–5 seconds
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}

setInterval(createHeart, 300);
    const btn = document.getElementById('showBtn');
    const img = document.getElementById('myImage');

    btn.addEventListener('click', () => {
      img.style.display = 'block';
    });