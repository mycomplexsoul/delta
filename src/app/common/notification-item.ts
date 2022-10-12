type NotificationStatus = "queue" | "displayed" | "cancelled";

type NotificationItem = {
  id: string;
  message: string;
  count: number;
  date: Date;
  status: NotificationStatus | string; // queue, displayed, cancelled
  title: string;
  showHeader: boolean;
  hideIn: number;
  minimalUI: boolean;
  native: boolean;
  voice: boolean;
};

export { NotificationStatus, NotificationItem };
