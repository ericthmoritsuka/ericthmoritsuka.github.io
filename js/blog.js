function stringToColor(str) {
  let hash = 0;

  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }

  const hue = hash % 360;
  return `hsl(${hue}, 60%, 60%)`;
}

const tags = document.querySelectorAll(".tag");

tags.forEach(tag => {
  const text = tag.textContent.trim();
  const color = stringToColor(text);

  tag.style.backgroundColor = color;

  // contraste simples
  const lightness = color.match(/(\d+)%\)$/)[1];
  tag.style.color = lightness > 60 ? "#000" : "#fff";
});