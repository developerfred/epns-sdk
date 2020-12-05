import gql from 'graphql-tag';

// eslint-disable-next-line import/prefer-default-export
export const EPNS_PROTOCOL_QUERY = gql`
  query Donations($user: String!) {
    donations(where: { donator: $user }) {
      id
      amt
    }
  }
  query AddChannels($user: String!) {
    addChannels(where: { channel: $user }) {
      id
      channel
      channelType
      count
    }
  }
`;
