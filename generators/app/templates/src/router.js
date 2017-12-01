import React from 'react';
import { translate, Trans } from 'react-i18next';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from 'modules/home/Home';

export default translate('translations')(() => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/"><Trans i18nKey="home">Home</Trans></Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/" component={Home} />
    </div>
  </Router>
));
