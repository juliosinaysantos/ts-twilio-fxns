import '@twilio-labs/serverless-runtime-types';

import {
  Context,
  ServerlessCallback,
  ServerlessFunctionSignature,
} from '@twilio-labs/serverless-runtime-types/types';

interface PingEvent {
  name?: string;
}

interface PingContext {
  GREETING?: string;
}

export const handler: ServerlessFunctionSignature = (
  context: Context<PingContext>,
  event: PingEvent,
  callback: ServerlessCallback,
) => {
  const message: string = `${context.GREETING ?? 'Sup'}, ${event.name ?? 'World'}!`;
  callback(null, { message });
}
