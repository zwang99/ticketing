import { Subjects, Publisher, OrderCancelledEvent } from "@wzhticketing/common";

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  readonly subject = Subjects.OrderCancelled;
}
