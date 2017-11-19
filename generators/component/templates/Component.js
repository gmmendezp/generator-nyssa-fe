import React, { Component } from 'react';
import { style } from 'typestyle';<% if (container){%>
import { connect } from 'react-redux';<% } %>

export class <%= name %> extends Component {
  constructor() {
    super();
    this.styles = {
      base: {}
    };
  }

  render() {
    return (
      <div className={style(this.styles.base, this.props.styles.base)}>
        <%= name %>
      </div>
    );
  }
}
<% if (container) { %>
const mapStateToProps = state => {
  return {};
}

export default connect(mapStateToProps)(<%= name %>);<% } else {%>export default <%= name %>;<% }%>
