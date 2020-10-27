import React from 'react';
import '../../App.css';
import '../HeroSection.css';
import '../Footer.css';
import { Button } from '../Button';
import { Link } from 'react-router-dom';

export default function Products() {
  return (
  <>
    <div className='hero-containers'>
     </div>	
   /* <div id="services" className="cards-2">
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
                            <h3 className="card-title">KRITI</h3>
                            <p>Perfect for youngsters, this bike will elevate their mood</p>
                            <ul className="list-unstyled li-space-lg">
                                <li className="media">
                                    <i className="fas fa-square"></i>
                                    <div className="media-body">Falcon</div>
                                </li>
                                <li className="media">
                                    <i className="fas fa-square"></i>
                                    <div className="media-body">Technical Specifications</div>
                                </li>
                            </ul>
                            <p className="price">Starting at <span>Rs.40000/-</span></p>
                        </div>
                        <div className="button-container">
                            <a className="btn-solid-reg page-scroll" href="#callMe">DETAILS</a>
                        </div> 
                    </div>
                    

                    
                    <div className="card">
                        <div className="card-image">
                            <img className="img-fluid" src="/images/img-2.jpg" alt="alternative"></img>
                        </div>
                        <div className="card-body">
                            <h3 className="card-title">Icon</h3>
                            <p>Perfect balance of speed and agility to drive past the city.</p>
                            <ul className="list-unstyled li-space-lg">
                                <li className="media">
                                    <i className="fas fa-square"></i>
                                    <div className="media-body">Power pack performance</div>
                                </li>
                                <li className="media">
                                    <i className="fas fa-square"></i>
                                    <div className="media-body">Good ground clearance</div>
                                </li>
                            </ul>
                            <p className="price">Starting at <span>Rs.50000/-</span></p>
                        </div>
                        <div className="button-container">
                            <a className="btn-solid-reg page-scroll" href="#callMe">DETAILS</a>
                        </div> 
                    </div>
                    

                    
                    <div className="card">
                        <div className="card-image">
                            <img className="img-fluid" src="/images/img-3.jpg" alt="alternative"></img>
                        </div>
                        <div className="card-body">
                            <h3 className="card-title">Falcon</h3>
                            <p>Balance of style and agility combined with power pack performance</p>
                            <ul className="list-unstyled li-space-lg">
                                <li className="media">
                                    <i className="fas fa-square"></i>
                                    <div className="media-body">Maintaining the leader status</div>
                                </li>
                                <li className="media">
                                    <i className="fas fa-square"></i>
                                    <div className="media-body">Stlye quotient</div>
                                </li>
                            </ul>
                            <p className="price">Starting at <span>Rs.60000/-</span></p>
                        </div>
                        <div className="button-container">
                            <a className="btn-solid-reg page-scroll" href="#callMe">DETAILS</a>
                        </div> 
                    </div>
                   

                </div> 
            </div> 
        </div> 
    </div> 
    */
    
    <main class="container">
 
  
  <div className="left-column">
    <img data-image="black" src="/images/KRITI-1.jpg" alt=""></img>
    <img data-image="blue" src="/images/img-2.jpg" alt=""></img>
    <img data-image="red" class="active" src="/images/img-3.jpg" alt=""></img>
  </div>
 
 
  
  <div className="right-column">
 
    
    <div class="product-description">
      <span>Headphones</span>
      <h1>Beats EP</h1>
      <p>The preferred choice of a vast range of acclaimed DJs. Punchy, bass-focused sound and high isolation. Sturdy headband and on-ear cushions suitable for live performance</p>
    </div>
 
    
    <div className="product-configuration">
 
     
      <div className="product-color">
        <span>Color</span>
 
        <div className="color-choose">
          <div>
            <input data-image="red" type="radio" id="red" name="color" value="red" checked></input>
            <label for="red"><span></span></label>
          </div>
          <div>
            <input data-image="blue" type="radio" id="blue" name="color" value="blue"></input>
            <label for="blue"><span></span></label>
          </div>
          <div>
            <input data-image="black" type="radio" id="black" name="color" value="black"></input>
            <label for="black"><span></span></label>
          </div>
        </div>
 
      </div>
 
      <div className="cable-config">
        <span>Cable configuration</span>
 
        <div className="cable-choose">
          <button>Straight</button>
          <button>Coiled</button>
          <button>Long-coiled</button>
        </div>
 
        <a href="#">How to configurate your headphones</a>
      </div>
    </div>
 
    
    <div class="product-price">
      <span>Rs.40,000/-</span>
      <a href="#" class="cart-btn">Add to cart</a>
    </div>
  </div>
</main>
    
    
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
            /></input>
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
</>
    );
}
    

