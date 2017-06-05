import React, { Component } from 'react'<% if (container){%>
import { connect } from 'react-redux'<% } %>

class <%= name %> extends Component {
  render () {
    return (
      <div className='<%= name %>'>
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
