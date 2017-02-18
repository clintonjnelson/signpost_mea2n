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

  addNotification(newNotif: Notification) {
    this.notifications.unshift(newNotif);
    // If first item, kick off showing, else let it run
    if(!this.currentlyDisplaying) {
      this.displayNotif(this.notifications.pop());
    }
  }

  // THIS IS NOT WAITING - NEED TO MAYBE BREAK UP FUNCTIONS
  displayNotif(notif: Notification) {
    this.display = notif;
    this.currentlyDisplaying = true;

    var dispTime = (notif.time ? notif.time : 4000);
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
