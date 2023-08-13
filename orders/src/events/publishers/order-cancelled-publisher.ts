import { Publisher, OrderCancelledEvent, Subjects } from "@mptkts/common";

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
