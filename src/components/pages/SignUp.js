import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';


export default function SignUp() {
  return (
    <>
     <HeroSection />
   <section class="contact" id="contact">
                <div class="container">
                    <div class="row">
                        <div class="col-md center-xs">
                            <h2 class="section-title">Contact</h2>
                        </div>
                    </div>
                    <div class="row margin-bottom-small center-xs">
                        <div class="col-md">Call Us<br/>+49 561 0000 0000</div>
                        <div class="col-md">Address<br/>Streetname 12</div>
                        <div class="col-md">Email<br/>kontakt@lautenschlager.de</div>
                    </div>
                    <form action="">
                        <div class="row margin-bottom-small center-xs">

                            <div class="col-md padding-small">
                                <div class="row">
                                    <div class="col-md">
                                        <input placeholder="Enter Your Name" type="text" name="" value="" class="margin-bottom-small"></input>
                                        <input placeholder="Enter Your Email" type="email" name=""  value=""></input>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md padding-small">
                                <textarea placeholder="Your Message" name="" rows="8" class="margin-bottom-small"></textarea>
                                <input type="submit" value="Submit">
                            </div>
                        </div>
                    </form>
                </div>
            </section>
      <Footer />
    
    </>
    );
}



