import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import PropTypes from 'prop-types'


class IndexPage extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <div>
          <h1 className="title">Hello World!</h1>
        </div>
      </div>
    )
  }
}

IndexPage.propTypes = {
  children: PropTypes.func,
}

export default IndexPage
