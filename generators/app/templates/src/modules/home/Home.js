import React, { Component } from 'react'
import Radium, { keyframes } from 'radium'
import logo from './../../assets/logo.svg'

export class Home extends Component {
  styles = {
    base: {
      textAlign: 'center'
    },
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
      backgroundColor: '#222',
      height: '190px',
      padding: '20px',
      color: '#fff'
    },
    intro: {
      fontSize: 'large'
    }
  }

  render () {
    return (
      <div style={this.styles.base}>
        <div style={this.styles.header}>
          <img src={logo} style={this.styles.logo} alt='logo' />
          <h2>Welcome to React</h2>
        </div>
        <p style={this.styles.intro}>
          Just a home page
        </p>
      </div>
    )
  }
}

export default Radium(Home)
