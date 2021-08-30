import '@twilio-labs/serverless-runtime-types';

import {
  Context,
  ServerlessCallback,
  ServerlessFunctionSignature,
} from '@twilio-labs/serverless-runtime-types/types';

export const handler: ServerlessFunctionSignature = (
  _context: Context,
  _event: {},
  callback: ServerlessCallback,
) => {
  callback(null, { message: 'pong! 🏓' });
}
