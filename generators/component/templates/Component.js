import React, { Component } from 'react'
import Radium from 'radium'<% if (container){%>
import { connect } from 'react-redux'<% } %>

export class <%= name %> extends Component {
  styles = {
    base: {}
  }

  render () {
    return (
      <div style={this.styles.base}>
        <%= name %>
      </div>
    )
  }
}
<% if (container) { %>
const mapStateToProps = state => {
  return {}
}

export default connect(mapStateToProps)(Radium(<%= name %>))<% } else {%>export default Radium(<%= name %>)<% }%>
