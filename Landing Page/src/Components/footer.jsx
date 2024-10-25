import React from "react";
import gif from '../assets/foot-gif.gif'
import fb from '../assets/fb.png'
import yt from '../assets/yt.png'
import ln from '../assets/ln.png'
import tw from '../assets/tw.png'

function Footer(){
    return(
        <>
        <div className="call-back">
            <h2>REQUEST A CALL BACK</h2>
            <h3>Get your Business Right up There</h3>
            <p>When you need intelligent answers to your toughest questions, we’re here to help. We’re just a call or email away! Don’t hang back from getting in touch with us. We’ll be glad to assist you.</p>
            <div className="call-btn cnt-btn">
            <button>Request a Call Back</button>
            </div>
        </div>
        <footer>
            <div className="foot-link">
                <div className="ft-cl1">
                    <p>About Us</p>
                    <p>About Founder</p>
                    <p>Contact Us</p>
                    <p>Team</p>
                    <p>Locations</p>
                </div>
                <div className="ft-cl1">
                    <p>FAQs</p>
                    <p>Terms & Conditions</p>
                    <p>Carrers</p>
                    <p>Solutions</p>
                    <p>Our Process</p>
                </div>
                <div className="ft-cl2">
                    <h4>Get in Touch</h4>
                    <p>Taking seamless key performance indicators offline to maximise the long tail.</p>
                    <div className="socials">
                        <img src={fb} alt="" />
                        <img src={yt} alt="" />
                        <img src={ln} alt="" />
                        <img src={tw} alt="" />
                    </div>
                </div>
            </div>
            <div className="foot-gif">
                <img src={gif} alt="" />
            </div>
        </footer>
        </>
    );

}
export default Footer