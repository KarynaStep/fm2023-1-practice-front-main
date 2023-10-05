import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import dataPricing from './dataPricing.json'
import PricingBlock from '../../components/PricingBlock';

const PricingPage = (props) => {
  return (
    <>
      <Header />
      <PricingBlock data={dataPricing.nameContent} />
      <Footer />
    </>
  );
}

export default PricingPage;
