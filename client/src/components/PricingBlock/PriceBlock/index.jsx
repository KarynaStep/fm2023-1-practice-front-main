import React, { useState, useEffect } from 'react';
import CONSTANTS from '../../../constants';
import styles from './PriceBlock.module.scss';

const { COLORS_PRICE } = CONSTANTS;

const PriceBloc = (props) => {
  const {
    info: {
      id,
      title,
      subTitle,
      price: { currency, amount },
      decription,
    },
    isSelect,
    setSelected,
  } = props;

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth >= 900) {
      setIsMobile(true);
    }
    const handeleResize = ({target: {innerWidth}}) => {
       setIsMobile(innerWidth >= 900); 
    };
    window.addEventListener('resize', handeleResize);
    return () => {
      window.removeEventListener('resize', handeleResize);
    };
  }, []);
  const handleClick = () => setSelected(id);
  const colorStyleDiv = isMobile ? COLORS_PRICE[title] : '';
  const colorStyleArticle = isMobile ? ' ' : COLORS_PRICE[title];
  return (
    <article
      onClick={handleClick}
      className={styles.block}
      style={{ borderColor: colorStyleArticle }}
    >
      <div
        className={styles.block_title}
        style={{ borderColor: colorStyleDiv }}
      >
        <h2 className={styles.title} style={{ color: COLORS_PRICE[title] }}>
          {title}
        </h2>
        {isMobile && <p className={styles.decription}>{subTitle}</p>}
        <h3 className={styles.price} style={{ color: COLORS_PRICE[title] }}>
          <b>{isMobile && currency}</b>
          {amount}
        </h3>
      </div>
      {(isSelect || isMobile) && (
        <ul>
          {decription.map((elem, i) => {
            if (typeof elem === 'string') {
              return <p key={i}>{elem}</p>;
            }
            return (
              <li key={i}>
                <p className={styles.text}>{elem.content}</p>
                {isMobile && <em>{elem.hint}</em>}
                {elem.items && (
                  <ul>
                    {elem.items.map((item, i) => (
                      <li key={i} className={styles.menu_items}>
                        <i className="fa fa-angle-down"></i>
                        <p>{item.itemContent}</p>
                        {isMobile && <em>{item.itemHint}</em>}

                        <p>{item.content}</p>
                        {isMobile && <em>{item.hint}</em>}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      )}
      <button style={{ background: COLORS_PRICE[title] }}>
        <i className="fa fa-angle-down"></i> Start
      </button>
    </article>
  );
};

export default PriceBloc;
