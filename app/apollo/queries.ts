import gql from 'graphql-tag';

export const EPNS_PROTOCOL = gql`
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
