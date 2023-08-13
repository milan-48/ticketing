import { Publisher, OrderCreatedEvent, Subjects } from "@mptkts/common";

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
