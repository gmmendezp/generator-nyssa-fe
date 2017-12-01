import React, { Component } from 'react';
import { translate } from 'react-i18next';
import { style } from 'typestyle';<% if (container){%>
import { connect } from 'react-redux';<% } %>

export class <%= name %> extends Component {
  static defaultProps = {
    styles: {}
  }

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

export default translate('translations')(connect(mapStateToProps)(<%= name %>));<% } else {%>export default translate('translations')(<%= name %>);<% }%>
