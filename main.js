

function modes() {
    const body = document.body;
    body.classList.toggle('dark-mode');
  
    const modeButton = document.getElementById('modes');
    if (body.classList.contains('dark-mode')) {
      modeButton.textContent = 'LIGHT MODE';
    } else {
      modeButton.textContent = 'DARK MODE';
    }
  }
  
  function appear() {
    const container = document.querySelector('.container');
    if (container.style.display === "none") {
        container.style.display = "block";
    } else {
        container.style.display = "none";
    }
}