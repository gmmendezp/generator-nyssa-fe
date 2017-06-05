import React, { Component } from 'react'
import logo from './../../assets/logo.svg'
import { style, keyframes } from 'typestyle'
import { gray, white } from 'csx'

class Home extends Component {
  classNames = {
    base: style({
      textAlign: 'center'
    }),
    logo: style({
      height: '80px',
      animationName: keyframes({
        from: { transform: 'rotate(0deg)' },
        to: { transform: 'rotate(360deg)' }
      }),
      animationDuration: '20s',
      animationIterationCount: 'infinite',
      animationTimingFunction: 'linear'
    }),
    header: style({
      backgroundColor: gray.darken(0.37).toHexString(),
      height: '190px',
      padding: '20px',
      color: white.toHexString()
    }),
    intro: style({
      fontSize: 'large'
    })
  }

  render () {
    return (
      <div className={this.classNames.base}>
        <div className={this.classNames.header}>
          <img src={logo} className={this.classNames.logo} alt='logo' />
          <h2>Welcome to React</h2>
        </div>
        <p className={this.classNames.intro}>
          Just a home page
        </p>
      </div>
    )
  }
}

export default Home
