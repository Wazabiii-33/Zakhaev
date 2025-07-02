
document.addEventListener("DOMContentLoaded", () => {
  const headers = document.querySelectorAll(".typing");
  headers.forEach(header => {
    const text = header.textContent;
    header.textContent = "";
    let i = 0;
    const interval = setInterval(() => {
      header.textContent += text.charAt(i);
      i++;
      if (i >= text.length) clearInterval(interval);
    }, 40);
  });
});
