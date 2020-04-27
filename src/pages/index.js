import React from 'react';
import Helmet from 'react-helmet';

import Layout from '../components/Layout';
import Root from '../components/Root';

export default class Index extends React.Component {
  render() {
    return (
      <Layout>
        <Root></Root>
      </Layout>
    );
  }
}
