const shell = require('electron').shell

const links = document.querySelectorAll('a[href]')
//<a class="nav-footer-logo" href="https://github.com" aria-label="Homepage">
// 查找所有a标签 监听 click 事件,阻止在 APP内跳转
Array.prototype.forEach.call(links, (link) => {
  const url = link.getAttribute('href')
  if (url.indexOf('http') === 0) {
    link.addEventListener('click', (e) => {
      e.preventDefault()
      shell.openExternal(url)
    })
  }
})
