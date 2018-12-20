const links = document.querySelectorAll('link[rel="import"]')

//<link rel="import" href="sections/about.html">
// 将所有 链接为 此的 html 载入. 
// Import and add each page to the DOM
Array.prototype.forEach.call(links, (link) => {
  let template = link.import.querySelector('.task-template')
  let clone = document.importNode(template.content, true)
  if (link.href.match('about.html')) {
    document.querySelector('body').appendChild(clone)
  } else {
    document.querySelector('.content').appendChild(clone)
  }
})
