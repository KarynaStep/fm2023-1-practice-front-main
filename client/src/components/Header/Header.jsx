import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

import { clearUserStore } from '../../store/slices/userSlice';
import { getUser } from '../../store/slices/userSlice';

import CONSTANTS from '../../constants';
import Logo from '../Logo';

import styles from './Header.module.sass';

const Header = ({ data, getUser, clearUserStore, history, isFetching }) => {
  useEffect(() => {
    if (!data) {
      getUser();
    }// eslint-disable-next-line
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
                  <span>View Dashboard</span>
                </Link>
              </li>
              <li>
                <Link to="/account" style={{ textDecoration: 'none' }}>
                  <span>My Account</span>
                </Link>
              </li>
              <li>
                <Link
                  to="http:/www.google.com"
                  style={{ textDecoration: 'none' }}
                >
                  <span>Messages</span>
                </Link>
              </li>
              <li>
                <Link
                  to="http:/www.google.com"
                  style={{ textDecoration: 'none' }}
                >
                  <span>Affiliate Dashboard</span>
                </Link>
              </li>
              <li>
                <span onClick={logOut}>Logout</span>
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
          <span className={styles.btn}>LOGIN</span>
        </Link>
        <Link to="/registration" style={{ textDecoration: 'none' }}>
          <span className={styles.btn}>SIGN UP</span>
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
        <a href="http://www.google.com">Read Announcement</a>
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
                    <a href="http://www.google.com">beauty</a>
                  </li>
                  <li>
                    <a href="http://www.google.com">consulting</a>
                  </li>
                  <li>
                    <a href="http://www.google.com">e-commerce</a>
                  </li>
                  <li>
                    <a href="http://www.google.com">fashion & clothing</a>
                  </li>
                  <li>
                    <a href="http://www.google.com">finance</a>
                  </li>
                  <li>
                    <a href="http://www.google.com">real estate</a>
                  </li>
                  <li>
                    <a href="http://www.google.com">tech</a>
                  </li>
                  <li className={styles.last}>
                    <a href="http://www.google.com">more categories</a>
                  </li>
                </ul>
              </li>
              <li>
                <span>CONTESTS</span>
                <img
                  src={`${CONSTANTS.STATIC_IMAGES_PATH}menu-down.png`}
                  alt="menu"
                />
                <ul>
                  <li>
                    <a href="http://www.google.com">HOW IT WORKS</a>
                  </li>
                  <li>
                    <a href="http://www.google.com">PRICING</a>
                  </li>
                  <li>
                    <a href="http://www.google.com">AGENCY SERVICE</a>
                  </li>
                  <li>
                    <a href="http://www.google.com">ACTIVE CONTESTS</a>
                  </li>
                  <li>
                    <a href="http://www.google.com">WINNERS</a>
                  </li>
                  <li>
                    <a href="http://www.google.com">LEADERBOARD</a>
                  </li>
                  <li className={styles.last}>
                    <a href="http://www.google.com">BECOME A CREATIVE</a>
                  </li>
                </ul>
              </li>
              <li>
                <span>Our Work</span>
                <img
                  src={`${CONSTANTS.STATIC_IMAGES_PATH}menu-down.png`}
                  alt="menu"
                />
                <ul>
                  <li>
                    <a href="http://www.google.com">NAMES</a>
                  </li>
                  <li>
                    <a href="http://www.google.com">TAGLINES</a>
                  </li>
                  <li>
                    <a href="http://www.google.com">LOGOS</a>
                  </li>
                  <li className={styles.last}>
                    <a href="http://www.google.com">TESTIMONIALS</a>
                  </li>
                </ul>
              </li>
              <li>
                <span>Names For Sale</span>
                <img
                  src={`${CONSTANTS.STATIC_IMAGES_PATH}menu-down.png`}
                  alt="menu"
                />
                <ul>
                  <li>
                    <a href="http://www.google.com">POPULAR NAMES</a>
                  </li>
                  <li>
                    <a href="http://www.google.com">SHORT NAMES</a>
                  </li>
                  <li>
                    <a href="http://www.google.com">INTRIGUING NAMES</a>
                  </li>
                  <li>
                    <a href="http://www.google.com">NAMES BY CATEGORY</a>
                  </li>
                  <li>
                    <a href="http://www.google.com">VISUAL NAME SEARCH</a>
                  </li>
                  <li className={styles.last}>
                    <a href="http://www.google.com">SELL YOUR DOMAINS</a>
                  </li>
                </ul>
              </li>
              <li>
                <span>Blog</span>
                <img
                  src={`${CONSTANTS.STATIC_IMAGES_PATH}menu-down.png`}
                  alt="menu"
                />
                <ul>
                  <li>
                    <a href="http://www.google.com">ULTIMATE NAMING GUIDE</a>
                  </li>
                  <li>
                    <a href="http://www.google.com">
                      POETIC DEVICES IN BUSINESS NAMING
                    </a>
                  </li>
                  <li>
                    <a href="http://www.google.com">CROWDED BAR THEORY</a>
                  </li>
                  <li className={styles.last}>
                    <a href="http://www.google.com">ALL ARTICLES</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          {data && data.role !== CONSTANTS.CREATOR && (
            <div className={styles.startContestBtn} onClick={startContests}>
              START CONTEST
            </div>
          )}
        </div>
      </div>
    </div>
  );
};


const mapStateToProps = state => state.userStore;
const mapDispatchToProps = dispatch => ({
  getUser: () => dispatch(getUser()),
  clearUserStore: () => dispatch(clearUserStore()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
