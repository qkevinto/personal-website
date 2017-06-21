import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from 'react-helmet'
import { config } from 'config'

import Main from '../components/Main';

export default class Index extends React.Component {
  render() {
    return (
      <Main></Main>
    )
  }
}
