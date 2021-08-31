import '@twilio-labs/serverless-runtime-types';

import {
  Context,
  ServerlessCallback,
  ServerlessFunctionSignature,
} from '@twilio-labs/serverless-runtime-types/types';
import { RequestParameters } from '../../parameters/RequestParameters';
import { WhatsappParameters } from '../../parameters/WhatsappParameters';

type Event = RequestParameters & WhatsappParameters

export const handler: ServerlessFunctionSignature<{}, Event> = (
  _context: Context,
  event: Event,
  callback: ServerlessCallback,
) => {
  console.log(event)
  const response = new Twilio.twiml.MessagingResponse();
  response.message(`Welcome **${event.ProfileName ?? 'Anonymus'}** !`);

  return callback(null, response);
}
