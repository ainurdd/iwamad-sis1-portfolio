const html = document.documentElement
const toggleBtn = document.getElementById('theme-toggle')

toggleBtn.addEventListener('click', () => {
  if (html.dataset.theme === 'dark') {
    html.dataset.theme = 'light'
    toggleBtn.textContent = 'Dark mode'
  } else {
    html.dataset.theme = 'dark'
    toggleBtn.textContent = 'Light mode'
  }
})


