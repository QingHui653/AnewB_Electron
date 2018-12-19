const path = require('path')

const notification = {
  title: '带图片的提醒',
  body: '这是一条带图片的提醒',
  icon: path.join(__dirname, '../../../assets/img/programming.png')
}
const notificationButton = document.getElementById('advanced-noti')

notificationButton.addEventListener('click', () => {
  const myNotification = new window.Notification(notification.title, notification)

  myNotification.onclick = () => {
    console.log('Notification clicked')
  }
})
