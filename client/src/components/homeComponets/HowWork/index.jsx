import React from 'react';
import HowWorkItem from './HowWorkItem';
import dataHowWork from './dataHowWork.json';

const HowWork = () => {
  const renderHowWorkItem = ((item, i) => <HowWorkItem key={i} item={item} />)
  return (
    <div>
      <h2>How Do Name Contest Work?</h2>
      {dataHowWork.map(renderHowWorkItem)}
    </div>
  );
};

export default HowWork;