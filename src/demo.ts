/*
 * @Descripttion: demo entry for examples - registers all components and global styles
 */
import './styles/variables/index.scss';
import './styles/global/global.style.scss';
import './components';
import { Message } from './components/message/message';
import { Notification } from './components/notification/notification';

// 将全局方法挂载到 window 对象上，方便在 HTML 中使用
declare global {
  interface Window {
    Message: typeof Message;
    Notification: typeof Notification;
  }
}

window.Message = Message;
(window as any).Notification = Notification;
