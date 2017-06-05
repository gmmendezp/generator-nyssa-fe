import React, { Component } from 'react'
import { style } from 'typestyle'<% if (container){%>
import { connect } from 'react-redux'<% } %>

export class <%= name %> extends Component {
  classNames = {
    base: style({})
  }

  render () {
    return (
      <div className={this.classNames.base}>
        <%= name %>
      </div>
    )
  }
}
<% if (container) { %>
const mapStateToProps = state => {
  return {}
}

export default connect(mapStateToProps)(<%= name %>)<% } else {%>export default <%= name %><% }%>
