import { observable, action } from "mobx";
import remotedev from "mobx-remotedev";

@remotedev
class Notification {
  @observable title;
  @observable message;
  @observable called;
  @observable open;
  @observable showHide;

  constructor() {
    Object.assign(this, {
      title: "",
      message: "",
      called: false,
      open: false,
      showHide: "",
      error: false,
      info: true,
      warning: false
    });
  }

  @action
  close() {
    this.showHide = "animated fadeOutUp";

    setTimeout(() => {
      Object.assign(this, {
        message: "",
        called: true,
        open: false
      });
    }, 200);
  }

  @action
  attr(obj) {
    // console.log('Form set', obj);
    Object.assign(this, obj);
  }

  @action
  set(title = "", message = "", autohide = true, timeout = 5000, type = "info", scrollTo = "", min = 95) {
    Object.assign(this, {
      title: title,
      message: message,
      called: false,
      open: true,
      showHide: "animated fadeInDown"
    });

    switch (type) {
      case "warning":
        this.warning = true;
        break;
      case "error":
        this.error = true;
        break;
      default:
        this.info = true;
        break;
    }
    // scroll to the top
    window.scroll(0, 0);

    if (this.open && autohide === true) {
      setTimeout(() => {
        this.close();
        this.warning = false;
        this.error = false;
        this.info = false;
      }, timeout);
    }
  }
}

let notification = new Notification();
export default notification;
