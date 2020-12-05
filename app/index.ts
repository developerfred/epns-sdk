/* eslint-disable import/no-unresolved */
// eslint-disable-next-line import/extensions
import { epnsClient } from './apollo/client';

// eslint-disable-next-line import/extensions
import { EPNS_PROTOCOL_QUERY } from './apollo/queries';

const userTest = '0xd1a8Dd23e356B9fAE27dF5DeF9ea025A602EC81e';

const result = await epnsClient.query({
  query: EPNS_PROTOCOL_QUERY,
  fetchPolicy: 'cache-first',
  variables: {
    user: userTest.toLowerCase(),
  },
});


// export function unsubscribe(channel: byte): Promise<object> {
// }
// export function Subscribe(channel: byte): Promise<object> {
// }

// export function  getChannelInfo(channel: byte): Promise<object> {
// }

// export function deactivateChannel(){}
// export function sendNotification(){}
// export function UpdateChannel(){}

export default { result };
