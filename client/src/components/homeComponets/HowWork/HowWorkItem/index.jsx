import React from 'react';
import CONSTANTS from '../../../../constants';
import styles from "./HowWorkItem.module.scss"

const HowWorkItem = (props) => {
  const { item: { className1, className2, src, alt, title, texts} } = props;
  const renderText = (text, i) => {
    if (text) {
      return (
        <p key={i}>
        <i className="fas fa-check" />
        <span>{text}</span>
      </p>
      )
    }
  }
  
    return (
      <div className={styles[`${className1}`]}>
        <div className={styles[`${className2}`]}>
          <div>
            <h3>{title}</h3>
            {texts.map(renderText)}
          </div>
          <img src={`${CONSTANTS.STATIC_IMAGES_PATH}${src}`} alt={alt} />
        </div>
      </div>
    );
};

export default HowWorkItem;
