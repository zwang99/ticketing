import { Publisher, Subjects, TicketUpdatedEvent } from "@wzhticketing/common";

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
