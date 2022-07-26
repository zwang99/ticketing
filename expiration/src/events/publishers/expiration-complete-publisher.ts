import {
  Subjects,
  ExpirationCompleteEvent,
  Publisher,
} from "@wzhticketing/common";

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  readonly subject = Subjects.ExpirationComplete;
}
