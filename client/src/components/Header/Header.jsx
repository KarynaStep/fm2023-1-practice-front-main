import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

import { clearUserStore } from '../../store/slices/userSlice';
import { getUser } from '../../store/slices/userSlice';

import CONSTANTS from '../../constants';
import Logo from '../Logo';

import styles from './Header.module.sass';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';

const Header = ({ data, getUser, clearUserStore, history, isFetching }) => {
  useEffect(() => {
    if (!data) {
      getUser();
    } // eslint-disable-next-line
  }, []);

  const logOut = () => {
    localStorage.clear();
    clearUserStore();
    history.replace('/login');
  };

  const startContests = () => {
    history.push('/startContest');
  };

  const renderLoginButtons = () => {
    if (data) {
      return (
        <>
          <div className={styles.userInfo}>
            <img
              src={
                data.avatar === 'anon.png'
                  ? CONSTANTS.ANONYM_IMAGE_PATH
                  : `${CONSTANTS.publicURL}${data.avatar}`
              }
              alt="user"
            />
            <span>{`Hi, ${data.displayName}`}</span>
            <img
              src={`${CONSTANTS.STATIC_IMAGES_PATH}menu-down.png`}
              alt="menu"
            />
            <ul>
              <li>
                <Link to="/dashboard" style={{ textDecoration: 'none' }}>
                  <span>view dashboard</span>
                </Link>
              </li>
              <li>
                <Link to="/account" style={{ textDecoration: 'none' }}>
                  <span>my account</span>
                </Link>
              </li>
              <li>
                <Link
                  to="http:/www.google.com"
                  style={{ textDecoration: 'none' }}
                > <span>messages</span>
                </Link>
              </li>
              <li>
                <Link
                  to="http:/www.google.com"
                  style={{ textDecoration: 'none' }}
                >
                  <span>affiliate dashboard</span>
                </Link>
              </li>
              <li>
                <span onClick={logOut}>logout</span>
              </li>
            </ul>
          </div>
          <img
            src={`${CONSTANTS.STATIC_IMAGES_PATH}email.png`}
            className={styles.emailIcon}
            alt="email"
          />
        </>
      );
    }
    return (
      <>
        <Link to="/login" style={{ textDecoration: 'none' }}>
          <span className={styles.btn}>login</span>
        </Link>
        <Link to="/registration" style={{ textDecoration: 'none' }}>
          <span className={styles.btn}>sign up</span>
        </Link>
      </>
    );
  };

  if (isFetching) {
    return null;
  }
  return (
    <div className={styles.headerContainer}>
      <div className={styles.fixedHeader}>
        <span className={styles.info}>
          Squadhelp recognized as one of the Most Innovative Companies by Inc
          Magazine.
        </span>
        <Link to="/">read announcement</Link>
      </div>
      <div className={styles.loginSignnUpHeaders}>
        <div className={styles.numberContainer}>
          <a href={`tel:${CONSTANTS.CONTACT_PHONE}`}>
            <img src={`${CONSTANTS.STATIC_IMAGES_PATH}phone.png`} alt="phone" />
            <span>{`${CONSTANTS.CONTACT_PHONE}`}</span>
          </a>
        </div>
        <div className={styles.userButtonsContainer}>
          {renderLoginButtons()}
        </div>
      </div>
      <div className={styles.navContainer}>
        <Logo
          src={`${CONSTANTS.STATIC_IMAGES_PATH}blue-logo.png`}
          className={styles.logo}
          alt="blue_logo"
        />
        <div className={styles.leftNav}>
          <div className={styles.nav}>
            <ul>
              <li>
                <span style={{ textDecoration: 'capitalize' }}>name ideas</span>
                <img
                  src={`${CONSTANTS.STATIC_IMAGES_PATH}menu-down.png`}
                  alt="menu"
                />
                <ul>
                  <li>
                    <Link to="/">beauty</Link>
                  </li>
                  <li>
                    <Link to="/">consulting</Link>
                  </li>
                  <li>
                    <Link to="/">e-commerce</Link>
                  </li>
                  <li>
                    <Link to="/">fashion & clothing</Link>
                  </li>
                  <li>
                    <Link to="/">finance</Link>
                  </li>
                  <li>
                    <Link to="/">real estate</Link>
                  </li>
                  <li>
                    <Link to="/">tech</Link>
                  </li>
                  <li className={styles.last}>
                    <Link to="/">more categories</Link>
                  </li>
                </ul>
              </li>
              <li>
                <span>contests</span>
                <img
                  src={`${CONSTANTS.STATIC_IMAGES_PATH}menu-down.png`}
                  alt="menu"
                />
                <ul>
                  <li>
                    <Link to="/">how it works</Link>
                  </li>
                  <li>
                    <NavLink to="/pricing">pricing</NavLink>
                  </li>
                  <li>
                    <Link to="/">agency service</Link>
                  </li>
                  <li>
                    <Link to="/">active contests</Link>
                  </li>
                  <li>
                    <Link to="/">winners</Link>
                  </li>
                  <li>
                    <Link to="/">leaderboard</Link>
                  </li>
                  <li className={styles.last}>
                    <Link to="/">become a creative</Link>
                  </li>
                </ul>
              </li>
              <li>
                <span>our work</span>
                <img
                  src={`${CONSTANTS.STATIC_IMAGES_PATH}menu-down.png`}
                  alt="menu"
                />
                <ul>
                  <li>
                    <Link to="/">names</Link>
                  </li>
                  <li>
                    <Link to="/">taglines</Link>
                  </li>
                  <li>
                    <Link to="/">logos</Link>
                  </li>
                  <li className={styles.last}>
                    <Link to="/">testimonials</Link>
                  </li>
                </ul>
              </li>
              <li>
                <span>names for sale</span>
                <img
                  src={`${CONSTANTS.STATIC_IMAGES_PATH}menu-down.png`}
                  alt="menu"
                />
                <ul>
                  <li>
                    <Link to="/">popular names</Link>
                  </li>
                  <li>
                    <Link to="/">short names</Link>
                  </li>
                  <li>
                    <Link to="/">intriguing names</Link>
                  </li>
                  <li>
                    <Link to="/">names by category</Link>
                  </li>
                  <li>
                    <Link to="/">visual name search</Link>
                  </li>
                  <li className={styles.last}>
                    <Link to="/">sell your domains</Link>
                  </li>
                </ul>
              </li>
              <li>
                <span>blog</span>
                <img
                  src={`${CONSTANTS.STATIC_IMAGES_PATH}menu-down.png`}
                  alt="menu"
                />
                <ul>
                  <li>
                    <Link to="/">ultimate naming guide</Link>
                  </li>
                  <li>
                    <Link to="/">poetic devices in business naming</Link>
                  </li>
                  <li>
                    <Link to="/">crowded bar theory</Link>
                  </li>
                  <li className={styles.last}>
                    <Link to="/">all articles</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          {data && data.role !== CONSTANTS.CREATOR && (
            <div className={styles.startContestBtn} onClick={startContests}>
              start contest
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => state.userStore;
const mapDispatchToProps = (dispatch) => ({
  getUser: () => dispatch(getUser()),
  clearUserStore: () => dispatch(clearUserStore()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
