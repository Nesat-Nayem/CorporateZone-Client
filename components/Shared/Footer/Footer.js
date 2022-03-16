import React from "react";
import { MdLocationOn } from "react-icons/Md";
import { ImFacebook } from "react-icons/Im";
import { IoLogoTwitter } from "react-icons/Io";
import { GrLinkedinOption } from "react-icons/Gr";
import { BsInstagram } from "react-icons/Bs";

const Footer = () => {
  return (
    <div
      // style={{backgroundImage:"linear-gradient(to right, rgba(39, 177, 252, 0.5), rgba(255, 143, 83, 0.5))"}}

      style={{
        backgroundColor:"#222222"
      }}
      className="grid sm:grid-cols-1 py-10  md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3  gap-4 "
    >
      <div>
        <h1 style={{color:"#FFFFFF"}} className="text-2xl font-bold ml-10">Contact Info</h1>

        
        <p style={{color:"#777777"}} className="flex text-sm text-left ml-10 mt-1">
    
       
          <span style={{color:"#ffffff"}} >Address :</span> 172 Santa Clara, CA 95051, USA
        </p>
        <p style={{color:"#777777"}} className="flex text-sm text-left ml-10 mt-1">
    
       
          <span style={{color:"#ffffff"}} >Phone :</span> +1 712 303 0234
        </p>
        <p style={{color:"#777777"}} className="flex text-sm text-left ml-10 mt-1">
    
       
          <span style={{color:"#ffffff"}} >Fax : </span> 2343 876 342
        </p>
        <p style={{color:"#777777"}} className="flex text-sm text-left ml-10 mt-1">
    
       
          <span style={{color:"#ffffff"}} >Email :</span> corporat@zon.org
        </p>
      </div>
      <div className="">
        <h3 style={{color:"#FFFFFF"}}  className="text-2xl ">Stay In Touch</h3>

          <p style={{color:"#777777"}} className="text-sm" >Promotions, new jobs and talent employ. All info Directly to your inbox.</p>
        <div className="mt-5">
          <input placeholder="your email address " className="py-1 pl-2 inputFiels" type="text" />
          <input type="submit" />
        </div>
        <style jsx>{`
       .inputFiels{
         border:0px;
         outline:none;
         background-color:#1C1C1C;
        //  border-bottom:3px solid red;
       }
      
        `}</style>
      </div>

      <div>
        <h3 className="text-2xl">Follow Us</h3>
        <div className="flex item-center justify-center mt-6">
          <a
            href=""
            className="text-red-600 text-3xl mr-4 hover:text-indigo-700"
          >
      
            <ImFacebook />{" "}
          </a>

          <a
            href=""
            className="text-red-600 text-3xl mr-4 hover:text-indigo-700"
          >
         
            <IoLogoTwitter />
          </a>
          <a
            href=""
            className="text-red-600 text-3xl mr-4 hover:text-indigo-700"
          >
      
            <GrLinkedinOption />
          </a>
          <a href="" className="text-red-600 text-3xl hover:text-indigo-700">
        
            <BsInstagram />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
