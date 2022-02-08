import React from 'react';
import style from './Banner.module.css'

const Banner = () => {
    return (
        <div className={style.banner}>
           <div style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
               <div className={style.ban}>
               <h2>The Best Jobs to Work Remotely</h2>
               <h4>Developer, Marketing, Design, Writing Customer Support And More</h4>
               <p>Post Your Resume and get jobs alerts for free!</p>
               <button className="rounded-full ...">BROWSE REMOTE JOBS</button>
               </div>
           </div>
        </div>
    );
};

export default Banner;