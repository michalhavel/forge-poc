
import BaseSvc from './BaseSvc'

export default class NotifySvc extends BaseSvc {

  /////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////
  constructor (config) {
    super (config)
    this.noticationMap = {}
  }

  /////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////
  initialize (notify) {

    this.notify = notify
  }

  /////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////
  get name() {
    return 'NotifySvc'
  }

  /////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////
  getNotification (notificationId) {

    return this.noticationMap[notificationId] || null
  }

  /////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////
  remove (notification) {

    this.notify.remove (notification)

    if (this.noticationMap[notification.id]) {

      delete this.noticationMap[notification.id]
    }
  }

  /////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////
  update (notification) {

    this.notify.update (notification)
  }

  /////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////
  add (notificationInfo) {

    const notification = this.notify.add (notificationInfo)

    this.noticationMap[notification.id] = notification

    return notification
  }
}
