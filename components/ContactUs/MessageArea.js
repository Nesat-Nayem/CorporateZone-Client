import React from 'react';
import style from './Message.module.css'
import { AiOutlineMail } from 'react-icons/ai';
import { AiOutlinePhone } from 'react-icons/ai';
import { AiFillFacebook } from 'react-icons/ai';
import { AiFillTwitterSquare } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiOutlineInstagram } from 'react-icons/ai';
import { ImAddressBook } from 'react-icons/im';

const MessageArea = () => {
    return (
        <div style={{ backgroundColor: '#D4C9D0' }}>
            <div className={style.message}>
                <h1>LEAVE MESSAGE</h1>
                <div className={style.flex}>
                    <div  className={style.ma} style={{ backgroundColor: 'white', padding: '40px 20px', borderRight: '2px solid grey', borderLeft: '2px solid grey' }}>
                        <form>
                            <div className={style.fle}>
                               <input placeholder='Name' type='text' />
                               <input placeholder='Email' type='text' />
                            </div>
                            <div>
                            <input placeholder='Subject' id={style.single} type='text' /> <br />
                            <textarea placeholder='Type Your Message' type='text' /><br />
                            </div>
                            <button style={{ backgroundColor: '#EC4991', marginTop: '10px', padding:'10px 40px', fontWeight:'700', borderRadius:'30px' }} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                Send Contact
                            </button>
                        </form>
                    </div>
                    <div className={style.mai} style={{ backgroundColor: '#532361', color: 'white' }}>
                        <h1 style={{marginTop:'30px'}}> CONTACT INFO</h1>
                        <div className={style.pera}>
                      
                       <div className={style.pera0}>
                       <ImAddressBook style={{fontSize:'25px', marginRight:'20px'}} /> <p>  110, B Kalani Bag Dewas #455001 MP India</p> <br />
                       </div>
                        <div className={style.pera1}>
                        <AiOutlineMail style={{fontSize:'25px', marginRight:'20px'}} /> <p>  jobpro@exaple.com</p>
                        </div>
                        <div className={style.pera1}>
                        <AiOutlinePhone style={{fontSize:'25px', marginRight:'20px'}} /> <p>  +61 3 8376 6284</p>
                        </div>
                        <div className={style.social}>
                            <button><AiFillFacebook /></button>
                            <button ><AiFillTwitterSquare /></button>
                            <button><AiFillLinkedin /></button>
                            <button><AiOutlineInstagram /></button>
                        </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default MessageArea;