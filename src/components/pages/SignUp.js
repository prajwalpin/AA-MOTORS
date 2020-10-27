import React from 'react';
import '../../App.css';

import HeroSection from '../HeroSection';
import Footer from '../Footer';


export default function SignUp() {
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
                                                         Divanarapalya, Yeswanthpur, Bengaluru, <br></br>
                                                          Karnataka 560022</div><br/>
                        <div class="col-md">Email<br/>aamotors8@gmail.com</div><br/>
                    </div>
                    <form action="">
                        <div class="row margin-bottom-small center-xs">

                            <div class="contactname">
                                <div class="row">
                                    <div class="col-md">
                                        <input placeholder="Enter Your Name" type="text" name="" value="" class="margin-bottom-small"></input><br/>
                                        <input placeholder="Enter Your Email" type="email" name=""  value=""></input><br/>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md padding-small">
                                <textarea placeholder="Your Message" name="" rows="8" class="margin-bottom-small"></textarea><br/>
                                <input type="submit" value="Submit"></input>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
      <Footer />
    
    </>
    );
}



