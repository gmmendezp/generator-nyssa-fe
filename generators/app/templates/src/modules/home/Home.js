import React, { Component } from 'react';
import logo from 'assets/logo.svg';
import { style, keyframes } from 'typestyle';
import { CSS } from 'utils/constants';

class Home extends Component {
  constructor() {
    super();
    this.styles = {
      base: {},
      logo: {
        height: '80px',
        animationName: keyframes({
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' }
        }),
        animationDuration: '20s',
        animationIterationCount: 'infinite',
        animationTimingFunction: 'linear'
      },
      header: {
        backgroundColor: CSS.BG_COLOR_MENU,
        height: '190px',
        padding: '20px',
        color: CSS.TEXT_COLOR_SECONDARY,
        textAlign: 'center'
      },
      intro: {
        fontSize: 'large',
        textAlign: 'center'
      }
    };
  }

  render() {
    return (
      <div className={style(this.styles.base)}>
        <div className={style(this.styles.header)}>
          <img src={logo} className={style(this.styles.logo)} alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className={style(this.styles.intro)}>Just a home page</p>
      </div>
    );
  }
}

export default Home;
