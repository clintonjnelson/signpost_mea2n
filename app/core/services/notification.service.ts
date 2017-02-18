import { Injectable } from '@angular/core';

export class Notification {
  type: string;
  msg: string;
  time: number;
}

@Injectable()

export class NotificationService {
  display: Notification;
  notifications: Notification[];
  currentlyDisplaying: boolean;

  constructor() {
    this.display             = null;
    this.notifications       = [];
    this.currentlyDisplaying = false;
  }

  notify(type: string, msg: string, time: number = 4000) {
    this.addNotification({type, msg, time});
  }

  addNotification(newNotif: Notification) {
    this.notifications.unshift(newNotif);
    // If not already displaying, display immediately, else enqueue
    if(!this.currentlyDisplaying) {
      this.displayNotif(this.notifications.pop());
    }
  }

  private displayNotif(notif: Notification) {
    this.display = notif;
    this.currentlyDisplaying = true;

    var dispTime = (notif.time ? notif.time : 4000);  // may not need eventually
    setTimeout(nextNotifOrEnd.bind(this), dispTime);

    function nextNotifOrEnd() {
      if(this.notifications.length > 0) {
        this.displayNotif(this.notifications.pop());  // pop off end
      }
      else {
        this.display = null;
        this.currentlyDisplaying = false;
      }
    }
  }
}
