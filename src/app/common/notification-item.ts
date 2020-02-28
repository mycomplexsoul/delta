type NotificationStatus = "queue" | "displayed" | "cancelled";

type NotificationItem = {
  id: string;
  message: string;
  date: Date;
  status: NotificationStatus; // queue, displayed, cancelled
  title: string;
  showHeader: boolean;
  hideIn: number;
};

export { NotificationStatus, NotificationItem };
