import React from 'react';
import '../../App.css';
import '../HeroSection.css';
import '../Footer.css';
import { Button } from '../Button';
import { Link } from 'react-router-dom';

export default function Products() {
  return (
  <>
   <div className="grey"> 
   <div className='hero-containers'>
    </div>	
   
     <div id="services" className="cards-2">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section-title">ELECTRIC BIKES</div>
                    <h2>Choose The Bike That Suits Your Needs</h2>
                </div> 
            </div> 
            <div className="row">
                <div className="col-lg-12">
                    
                    
                    <div className="card">
                        <div className="card-image">
                            
                            <img className="img-fluid" src="/images/KRITI-1.jpg" alt="alternative"></img>
                             
                        </div>
                     
                        <div className="card-body">
                            <h2 className="card-title">KRITI</h2><br/>
                            <h3>60km per charge in eco mode</h3><br/>
                            <ul className="list-unstyled li-space-lg">
                                <li className="media">
                                    <i className="fas fa-square"></i>
                                    <div className="media-body">
                                         <h3> Lithium-Ion /3 Years* Warranty </h3><br/></div>
                                </li>
                                
                                <li className="media">
                                    <i className="fas fa-square"></i>
                                    <div className="media-body">
                                      <h3>3-4 hr Charging</h3><br/>
                                      <h3>Self Road Assistance Button</h3><br/>
                                      <h3>Anti Theft Remote Lock</h3><br/>
                                      <h3>150kg Loading Capacity</h3><br/>
                                      <h3>Detachable Battery</h3><br/>
                                      <h3>Push Button</h3><br/>
                                      </div>
                                </li>
                            </ul>
                            <p className="price">Contact us immediately for <span>BEST DEALS</span></p>
                        </div>
                        </div>
                        
                    
                    <div className="card">
                        <div className="card-image">
                            <img className="img-fluid" src="/images/falcon.jpg" alt="alternative"></img>
                        </div>
                        <div className="card-body">
                            <h2 className="card-title">FALCON</h2>
                            <h3>70km per charge in eco mode</h3>
                            <ul className="list-unstyled li-space-lg">
                                <li className="media">
                                    <i className="fas fa-square"></i>
                                    <div className="media-body"><h3>Lithium-Ion / 3 Year*Warranty</h3></div>
                                </li>
                                <li className="media">
                                    <i className="fas fa-square"></i>
                                    <div className="media-body">
                                    <h3>Good ground clearance</h3><br/>
                                    <h3>3-4hr Charging</h3><br/>
                                    <h3>Self Road Assistance Button</h3><br/>
                                    <h3>Anti-Theft Remote Lock</h3><br/>
                                    <h3>Detachable Battery></h3><br/>
                                    <h3>Push Button</h3><br/>
                                     </div>
                                </li>
                            </ul>
                            <p className="price">Contact us immediately for <span>BEST DEALS</span></p>
                        </div>
                        </div>

                    
                    <div className="card">
                        <div className="card-image">
                            <img className="img-fluid" src="/images/ICON.jpg" alt="alternative"></img>
                        </div>
                        <div className="card-body">
                            <h2 className="card-title">ICON</h2><br/>
                            <h3>70km per charge in eco mode</h3>
                            <ul className="list-unstyled li-space-lg">
                                <li className="media">
                                    <i className="fas fa-square"></i>
                                    <div className="media-body"><h3>Lithium-Ion/3 Years* Warranty</h3></div>
                                </li>
                                <li className="media">
                                    <i className="fas fa-square"></i>
                                    <div className="media-body">
                                    <h3>3-4hr Charging</h3><br/>
                                    <h3>Self Road Assistance Button</h3><br/>
                                    <h3>Anti-Theft Remote Lock</h3><br/>
                                    <h3>150kg Loading Capacity</h3><br/>
                                    <h3>Detachable Battery></h3><br/>
                                    <h3>Push Button</h3><br/></div>
                                </li>
                            </ul>
                            <p className="price">Contact us immediately for <span>BEST DEALS</span></p>
                        </div>
                       
                       <div className="card">
                        <div className="card-image">
                            <img className="img-fluid" src="/images/aura.jpg" alt="alternative"></img>
                        </div>
                     
                        <div className="card-body">
                            <h2 className="card-title">AURA</h2><br/>
                            <h3>120km per charge in eco mode</h3><br/>
                            <ul className="list-unstyled li-space-lg">
                                <li className="media">
                                    <i className="fas fa-square"></i>
                                    <div className="media-body">
                                         <h3> Lithium-Ion /3 Years* Warranty </h3><br/></div>
                                </li>
                                
                                <li className="media">
                                    <i className="fas fa-square"></i>
                                    <div className="media-body">
                                      <h3>3-4 hr Charging</h3><br/>
                                      <h3>Speed 60 km/hr</h3><br/>
                                      <h3>Self Road Assistance Button</h3><br/>
                                      <h3>Anti Theft Remote Lock</h3><br/>
                                      <h3>250kg Loading Capacity</h3><br/>
                                      <h3>Detachable Battery</h3><br/>
                                      <h3>Push Button</h3><br/>
                                      </div>
                                </li>
                            </ul>
                            <p className="price">Contact us immediately for <span>BEST DEALS</span></p>
                        </div>
                        </div>

                </div> 
            </div> 
        </div> 
    </div> 
    </div>
    
    
   
    
    
  <div className='black'>  
  <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join the AA Motors newsletter to receive our best scooter deals
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            ></input>
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/sign-up'>How it works</Link>
            <Link to='/'>Testimonials</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Investors</Link>
            <Link to='/'>Terms of Service</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/'>Contact</Link>
            <Link to='/'>Support</Link>
            <Link to='/'>Destinations</Link>
            <Link to='/'>Sponsorships</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Videos</h2>
            <Link to='/'>Submit Video</Link>
            <Link to='/'>Ambassadors</Link>
            <Link to='/'>Agency</Link>
            <Link to='/'>Influencer</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
            <i class='fab fa-typo3' />
              AA MOTORS
              
            </Link>
          </div>
          <small class='website-rights'>AA MOTORS © 2020</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
    </div>
    </div>
</>
    );
}
    

