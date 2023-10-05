import React, { Component } from 'react';
import styles from './Footer.module.sass';
import CONSTANTS from '../../constants';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';

class Footer extends Component {
  topFooterItemsRender = item => (
    <div key={item.title}>
      <h4>{item.title}</h4>
      {item.items.map(i => {
        if (i === "pricing") {
          return (
            <NavLink key={i} to="/Pricing">{i}</NavLink>
          )
        }
        return (
          <a key={i} href='/'>
          {i}
        </a>)
      }
      )}
    </div>
  );

  topFooterRender () {
    return CONSTANTS.FooterItems.map(item => this.topFooterItemsRender(item));
  }

  render () {
    return (
      <div className={styles.footerContainer}>
        <div className={styles.footerTop}>
          <div>{this.topFooterRender()}</div>
        </div>
      </div>
    );
  }
}

export default Footer;
