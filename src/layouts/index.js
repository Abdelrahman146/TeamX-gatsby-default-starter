import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import PropTypes from 'prop-types'

import '../style/main.scss'

class Layout extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>{this.props.data.site.siteMetadata.title}</title>
        </Helmet>
        <div>
          {this.props.children({...this.props})}
        </div>
      </div>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
      site {
    siteMetadata {
      title
    }
    }
  }
`
