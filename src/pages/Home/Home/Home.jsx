import React from 'react';
import Banner from '../Banner/Banner';
import Gallery from '../../Gallery/Gallery';
import ExtraSection1 from '../../ExtraSection/ExtraSection1';
import ExtraSection2 from '../../Extrasection2/ExtraSection2';
import ShopCategory from '../../ShopCategory/ShopCategory';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <ShopCategory></ShopCategory>
            <ExtraSection2></ExtraSection2>
            <ExtraSection1></ExtraSection1>
        
        </div>
    );
};

export default Home;