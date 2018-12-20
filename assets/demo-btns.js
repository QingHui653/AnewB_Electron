const settings = require('electron-settings')

const demoBtns = document.querySelectorAll('.js-container-target')
//监听全部 demoButton 按钮
// Listen for demo button clicks
Array.prototype.forEach.call(demoBtns, (btn) => {
  btn.addEventListener('click', (event) => {
    const parent = event.target.parentElement

    // Toggles the "is-open" class on the demo's parent element.
    parent.classList.toggle('is-open')

    //保存到 触发的 按钮到 setting 中
    // Saves the active demo if it is open, or clears it if the demo was user
    // collapsed by the user
    if (parent.classList.contains('is-open')) {
      settings.set('activeDemoButtonId', event.target.getAttribute('id'))
    } else {
      settings.delete('activeDemoButtonId')
    }
  })
})

// 从 存储的 settings 中获取的 button
// Default to the demo that was active the last time the app was open
const buttonId = settings.get('activeDemoButtonId')
if (buttonId) {
  document.getElementById(buttonId).click()
}
