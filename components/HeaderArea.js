import React from 'react';
import Banner from './Banner';
import ContactUs from './ContactUs/ContactUs';
import NavArea from './NavArea';

const HeaderArea = () => {
    return (
        <div>
            <NavArea></NavArea>
            <Banner></Banner>
            <ContactUs></ContactUs>
        </div>
    );
};

export default HeaderArea;