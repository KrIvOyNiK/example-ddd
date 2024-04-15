import { OutboxMessageSchemaOptions } from '@src/infrastructure/database/schema/outbox-message.schema';
import { EntitySchema } from 'typeorm';

const entityName = 'PaymentOutbox';

export const PaymentOutboxMessageSchema = new EntitySchema({
  ...OutboxMessageSchemaOptions,
  name: entityName,
});
