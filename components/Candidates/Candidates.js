import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import HeroArea from '../Home/HeroArea/HeroArea';
import Navbar from '../Shared/Header/Navbar';
import style from './Candidates.module.css'

const Candidates = () => {

    const [candidates, setCandidates] = useState([])

    useEffect(() => {
        fetch('./candidate.json')
            .then(res => res.json())
            .then(data => setCandidates(data));
    }, [])




    // const candidates = [
    //     { id: 1, name: 'jhon doe', img: 'https://demoapus2.com/entaro/wp-content/uploads/2019/01/resume.jpg', position: 'Project Manager', address: 'Istanbul/Turkey', description: 'As Marketing Graphic Designer, your primary responsibility is to assist the Marketing and Social Media team with a variety of graphic design tasks ranging from email, ads, print, and website design. You will be responsible to take a set of instructions, or a stated problem, and produce clean, modern design assets that are within the brand requirements of our company and our products. As part of the process, this person will collaborate with members of the marketing, design and product teams to gain a clear understanding of the campaign expectations, target audience, and product positioning.', skill1: 'Design', skill2: 'Marketing', skill3: 'Developer', skill4: 'Sale', education: 'Graphic Designer at University University', contact: 'doe@gmail.com' },
    //     { id: 2, name: 'jhon doe', img: 'https://demoapus2.com/entaro/wp-content/uploads/2019/01/resume.jpg', position: 'Project Manager', address: 'Istanbul/Turkey', description: 'As Marketing Graphic Designer, your primary responsibility is to assist the Marketing and Social Media team with a variety of graphic design tasks ranging from email, ads, print, and website design. You will be responsible to take a set of instructions, or a stated problem, and produce clean, modern design assets that are within the brand requirements of our company and our products. As part of the process, this person will collaborate with members of the marketing, design and product teams to gain a clear understanding of the campaign expectations, target audience, and product positioning.', skill1: 'Design', skill2: 'Marketing', skill3: 'Developer', skill4: 'Sale', education: 'Graphic Designer at University University', contact: 'doe@gmail.com' },
    //     { id: 3, name: 'jhon doe', img: 'https://demoapus2.com/entaro/wp-content/uploads/2019/01/resume.jpg', position: 'Project Manager', address: 'Istanbul/Turkey', description: 'As Marketing Graphic Designer, your primary responsibility is to assist the Marketing and Social Media team with a variety of graphic design tasks ranging from email, ads, print, and website design. You will be responsible to take a set of instructions, or a stated problem, and produce clean, modern design assets that are within the brand requirements of our company and our products. As part of the process, this person will collaborate with members of the marketing, design and product teams to gain a clear understanding of the campaign expectations, target audience, and product positioning.', skill1: 'Design', skill2: 'Marketing', skill3: 'Developer', skill4: 'Sale', education: 'Graphic Designer at University University', contact: 'doe@gmail.com' },
    //     { id: 1, name: 'jhon doe', img: 'https://demoapus2.com/entaro/wp-content/uploads/2019/01/resume.jpg', position: 'Project Manager', address: 'Istanbul/Turkey', description: 'As Marketing Graphic Designer, your primary responsibility is to assist the Marketing and Social Media team with a variety of graphic design tasks ranging from email, ads, print, and website design. You will be responsible to take a set of instructions, or a stated problem, and produce clean, modern design assets that are within the brand requirements of our company and our products. As part of the process, this person will collaborate with members of the marketing, design and product teams to gain a clear understanding of the campaign expectations, target audience, and product positioning.', skill1: 'Design', skill2: 'Marketing', skill3: 'Developer', skill4: 'Sale', education: 'Graphic Designer at University University', contact: 'doe@gmail.com' },
    // ]



    return (
       <div >
           <Navbar></Navbar>
           <h1 id={style.candi}>CANDIDATES LIST</h1>
            <div className={style.main}>
            {
                candidates.map(candi =>
                    <div className={style.res} style={{border:'0.5px solid grey', marginRight:'10px', marginTop:'10px', padding:'10px 30px', borderRadius:'20px'}} key={candi.id}>
                        <div className={style.candidate}>
                            <img src={candi.img} alt='' />
                            <div className={style.candida}>
                                <div style={{marginLeft:'20px'}}>
                                <h1>Name: {candi.name}</h1>
                                <h2>{candi.position}</h2>
                                </div>
                            </div>
                           <div className={style.link}>
                           <Link href={`/candidates/${candi.id}`}>
                                <a style={{marginLeft:'40px', backgroundColor:'black', padding:'10px 20px', color:'white', fontWeight:'700px', borderRadius:'20px'}} className="text-base font-medium text-gray-500 hover:text-gray-900">
                                    View Profile
                                </a>
                            </Link>
                           </div>
                        </div>
                    </div>)
            }
        </div>
       </div>
    );
};

export default Candidates;