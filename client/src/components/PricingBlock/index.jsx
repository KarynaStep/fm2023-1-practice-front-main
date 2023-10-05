import React, {useState} from 'react';
import PriceBlock from './PriceBlock';
import styles from './PricingBlock.module.scss';


const PricingBlock = (props) => {
  const { data } = props
  const [isSelectBlock, setIsSelectBlock] = useState(1);
  const setSelected = (id) => setIsSelectBlock(id)
  return (
    <div className={styles.container}>
      {data.map((elem) => (
        <PriceBlock
          key={elem.id}
          info={elem}
          isSelect={isSelectBlock === elem.id}
          setSelected={setSelected}
        />
      ))}
    </div>
  );
};

export default PricingBlock;
