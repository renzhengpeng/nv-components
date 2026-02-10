/*
 * @Descripttion: notification全局方法
 * @creater: zhengpeng.ren
 * @since: 2024-12-19
 */
import { NvNotification } from './index.ts';

interface NotificationOptions {
  title?: string;
  message?: string;
  type?: 'success' | 'warning' | 'info' | 'error';
  duration?: number;
  showIcon?: boolean;
  closable?: boolean;
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
}

const createNotification = (options: NotificationOptions): NvNotification => {
  const notification = document.createElement(
    'nv-notification'
  ) as NvNotification;
  notification.title = options.title || '';
  notification.message = options.message || '';
  notification.type = options.type || 'info';
  notification.duration =
    options.duration !== undefined ? options.duration : 4500;
  notification.showIcon =
    options.showIcon !== undefined ? options.showIcon : true;
  notification.closable =
    options.closable !== undefined ? options.closable : true;
  notification.position = options.position || 'top-right';

  document.body.appendChild(notification);
  return notification;
};

// 主函数，可直接调用
const NotificationFunction = (options: NotificationOptions | string): NvNotification => {
  return createNotification(
    typeof options === 'string' ? { message: options } : options
  );
};

// 添加快捷方法
NotificationFunction.success = (options: NotificationOptions | string) =>
  createNotification(
    typeof options === 'string'
      ? { message: options, type: 'success' }
      : { ...options, type: 'success' }
  );

NotificationFunction.warning = (options: NotificationOptions | string) =>
  createNotification(
    typeof options === 'string'
      ? { message: options, type: 'warning' }
      : { ...options, type: 'warning' }
  );

NotificationFunction.info = (options: NotificationOptions | string) =>
  createNotification(
    typeof options === 'string'
      ? { message: options, type: 'info' }
      : { ...options, type: 'info' }
  );

NotificationFunction.error = (options: NotificationOptions | string) =>
  createNotification(
    typeof options === 'string'
      ? { message: options, type: 'error' }
      : { ...options, type: 'error' }
  );

export const Notification = NotificationFunction;
