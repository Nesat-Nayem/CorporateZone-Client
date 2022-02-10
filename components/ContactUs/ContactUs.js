import React from 'react';
import style from './ContactUs.module.css'
import MessageArea from './MessageArea';

const ContactUs = () => {
    return (
        <div>
            <div className={style.contact}>
            <div style={{width:'70%', margin:'0 auto'}}>
                <h1>Contact Us</h1>
            </div>
        </div>
        <div className={style.cont}>
            <h2>Our Helpline 24×7 Available</h2>
            <hr />
            <h1>Call us at <span style={{color:'#400F30', fontWeight:'700'}}>+0123 125 1457</span> or Email us at <span style={{color:'#5D537A', fontWeight:"700"}}>support@site.com</span></h1>
        </div>
        <div>
            <MessageArea></MessageArea>
        </div>
        </div>
    );
};

export default ContactUs;