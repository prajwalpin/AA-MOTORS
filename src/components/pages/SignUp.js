import React from 'react';
import '../../App.css';

import HeroSection from '../HeroSection';
import Footer from '../Footer';


export default function SignUp() {
  const formStyles = {
    display: 'flex',
    flexDirection: 'column',
    margin: '40px'
  }
  return (
    <>
     <HeroSection />
   <section class="contact" id="contact">
                <div class="contactus">
                    <div class="row">
                        <div class="col-md center-xs">
                            <h2 class="section-title">Contact Us</h2>
                        </div>
                    </div>
                    <div class="row margin-bottom-small center-xs">
                        <div class="col-md">Call Us At<br/>+91 9845678912</div><br/>
                        <div class="col-md">Address<br/>No. 778, 8th Cross Rd, Gokula 1st Stage, <br></br>
                                                         Triveni Road, Yeswanthpur, Bengaluru, <br></br>
                                                          Karnataka 560054</div><br/>
                        <div class="col-md">Email<br/>aamotors8@gmail.com</div><br/>
                    </div>
                    <form style={formStyles} name="contact" method="POST" action="/contact">
                                       <input type="hidden" name="form-name" value="contact"></input>
                                       <p class="hidden">
    <label> Don’t fill this out if you're human: <input name="bot-field"></input></label>
  </p>
                        <div class="row margin-bottom-small center-xs">

                            <div class="contactname">
                                <div class="row">
                                    <div class="col-md">
                                        <h3>Get in Touch</h3><br/>
                                        <h4>Please fill out this form and we will get in touch with you</h4><br/>
                                      
                                        <input type="text" placeholder="Enter Your Name" name="name" value="" className="contactplace" required></input><br/>
                                        <input type="email" placeholder="Enter Your Email" name="email"  value="" className="contactemail" required></input><br/>
                                          </div>
                                       </div>
                                    </div>
                                  
                            <div className="cors">
                                <textarea placeholder="Your Message" name="" rows="8" className="contactmessage"></textarea><br/>
                                <input type="submit" value="Submit"></input><br/>
                               
                            </div>
                        </div>
                    </form>
                </div>
            </section>
      <Footer />
    
    </>
    );
}



