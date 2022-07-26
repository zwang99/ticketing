import { Subjects, Publisher, PaymentCreatedEvent } from "@wzhticketing/common";

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  readonly subject = Subjects.PaymentCreated;
}
