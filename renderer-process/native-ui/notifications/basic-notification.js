const notification = {
  title: '提醒',
  body: '这是一条提醒'
}

const notificationButton = document.getElementById('basic-noti')

notificationButton.addEventListener('click', () => {
  const myNotification = new window.Notification(notification.title, notification)

  myNotification.onclick = () => {
    console.log('Notification clicked')
  }
})
