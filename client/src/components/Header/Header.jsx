import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { clearUserStore } from '../../store/slices/userSlice';
import { getUser } from '../../store/slices/userSlice';

import CONSTANTS from '../../constants';
import Logo from '../Logo';

import styles from './Header.module.sass';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';

const Header = (props) => {
  const { history } = props;
  const { isFetching, data } = useSelector((state) => state.userStore);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!data) {
      dispatch(getUser());
    } // eslint-disable-next-line
  }, []);

  const logOut = () => {
    localStorage.clear();
    dispatch(clearUserStore());
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
                <NavLink to="/dashboard" style={{ textDecoration: 'none' }}>
                  <span>view dashboard</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/account" style={{ textDecoration: 'none' }}>
                  <span>my account</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/"
                  style={{ textDecoration: 'none' }}
                >
                  {' '}
                  <span>messages</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/"
                  style={{ textDecoration: 'none' }}
                >
                  <span>affiliate dashboard</span>
                </NavLink>
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
        <NavLink to="/login" style={{ textDecoration: 'none' }}>
          <span className={styles.btn}>login</span>
        </NavLink>
        <NavLink to="/registration" style={{ textDecoration: 'none' }}>
          <span className={styles.btn}>sign up</span>
        </NavLink>
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
        <NavLink to="/">read announcement</NavLink>
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
                    <NavLink to="/">beauty</NavLink>
                  </li>
                  <li>
                    <NavLink to="/">consulting</NavLink>
                  </li>
                  <li>
                    <NavLink to="/">e-commerce</NavLink>
                  </li>
                  <li>
                    <NavLink to="/">fashion & clothing</NavLink>
                  </li>
                  <li>
                    <NavLink to="/">finance</NavLink>
                  </li>
                  <li>
                    <NavLink to="/">real estate</NavLink>
                  </li>
                  <li>
                    <NavLink to="/">tech</NavLink>
                  </li>
                  <li className={styles.last}>
                    <NavLink to="/">more categories</NavLink>
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
                    <NavLink to="/">how it works</NavLink>
                  </li>
                  <li>
                    <NavLink to="/pricing">pricing</NavLink>
                  </li>
                  <li>
                    <NavLink to="/">agency service</NavLink>
                  </li>
                  <li>
                    <NavLink to="/">active contests</NavLink>
                  </li>
                  <li>
                    <NavLink to="/">winners</NavLink>
                  </li>
                  <li>
                    <NavLink to="/">leaderboard</NavLink>
                  </li>
                  <li className={styles.last}>
                    <NavLink to="/">become a creative</NavLink>
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
                    <NavLink to="/">names</NavLink>
                  </li>
                  <li>
                    <NavLink to="/">taglines</NavLink>
                  </li>
                  <li>
                    <NavLink to="/">logos</NavLink>
                  </li>
                  <li className={styles.last}>
                    <NavLink to="/">testimonials</NavLink>
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
                    <NavLink to="/">popular names</NavLink>
                  </li>
                  <li>
                    <NavLink to="/">short names</NavLink>
                  </li>
                  <li>
                    <NavLink to="/">intriguing names</NavLink>
                  </li>
                  <li>
                    <NavLink to="/">names by category</NavLink>
                  </li>
                  <li>
                    <NavLink to="/">visual name search</NavLink>
                  </li>
                  <li className={styles.last}>
                    <NavLink to="/">sell your domains</NavLink>
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
                    <NavLink to="/">ultimate naming guide</NavLink>
                  </li>
                  <li>
                    <NavLink to="/">poetic devices in business naming</NavLink>
                  </li>
                  <li>
                    <NavLink to="/">crowded bar theory</NavLink>
                  </li>
                  <li className={styles.last}>
                    <NavLink to="/">all articles</NavLink>
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

export default withRouter(Header);
