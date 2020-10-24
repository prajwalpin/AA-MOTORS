import React from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';

export default function Services() {
  return (
  
 /* <div className='about'>
    <ul>
  <li><a href="#about">About Us</a></li>
  <li><a href="#vision">Vision</a></li>
  <li><a href="#mission">Mission</a></li>
  <li><a href="#electric">Why Electric</a></li>
</ul>
</div>
    <>
   <h1 className='services'>About Us</h1>
    </>
  <div className='vision'> VISION 
  <p id="#vision">To be Amongst the top Indian leading players in Electric Two Wheelers by providing customers best of the electric mobility experiences through continuous research and development.</p>
  <p>We aim to improve mobility and create a sustainable ecosystem by bringing out a revolution & Innovation into electric mobility. Given this, we have created a comprehensive roadmap to establish a robust EV ecosystem by investing in next-generation technology solutions and globally competitive products, spreading awareness among citizens for the adoption of sustainable mobility and provide Indian road with Zero CO2 emission vehicles.</p>
  <p>The Benling goal is to carry on their legacy of innovative thinking in Electric Vehicle segment and to develop products that will help Indian Market to cater the needs of a consumer in EV by providing a Safe and Clean drive.</p>
  </div>
  <div className='mission'> MISSION </div>
  <p id="mission">Keeping the environment as an utmost priority Benling strives to work towards providing the Indian market with eco-friendly modes of transportation.

To provide Indian societies with Zero Emission vehicles, Benling India continuously works on innovation and technology in association with its technology partner to provide our customers with best of the technology experience and our customers can reach their destinations without harming the environment .

Providing Indian Market with high-end mobility technologies with No Pollution, No Noise, more greenery, zero co2 emission.
</p>
    <br>
    
  <div className='electric'> Why Electric
   <p id="electric"> Electric Vehicles are not going to take the market by storm, but it’s going to be a gradual improvement. No doubt, the demand for vehicles in India has increased numerously during the last decade adding to the rapidly increasing pollution levels in the country. In fact, the top 10 most polluted cities in the world are in India and China.

Considering Increasing Pollution in India, Benling adopted the technology of producing electric scooters which will surely overcome the challenges of environmental pollution and it will be eco-friendly as well as economical. Saving in case of one electric scooter in operating expenses is 97200 with annual fuel cost(72000km/4 year) is Rs. 18,000.

Developing Electric Vehicles will assist in energy conservation and security in India since energy efficiency is 46% higher than the internal combustion (ICEs) engines. Electric Vehicles also have the potential to decrease carbon dioxide emission by 13- 68% directly, through advanced V2G ( Vehicle to Grid) technology and indirectly through peak shaving. Developing Electric Vehicle would reduce reliance on oil imports as India is among the top 5 oil importers in the world.</p>
</div>
  
	
	
  <div class="col-lg-6">
				<div class="market_text">
					<h3>Ride Like <span>Never Before</span>					</h3>
					<ul class="nav nav-tabs" id="myTab" role="tablist">
								<li class="nav-item">
							<a class="nav-link" id="vision-tab" data-toggle="tab" href="#vision" role="tab" aria-controls="vision" aria-selected="false">
			Vision</a></li>
									<li class="nav-item">
							<a class="nav-link" id="mission-tab" data-toggle="tab" href="#mission" role="tab" aria-controls="mission" aria-selected="false">
			Mission</a></li>
									<li class="nav-item">
							<a class="nav-link active" id="why_electric-tab" data-toggle="tab" href="#why_electric" role="tab" aria-controls="why_electric" aria-selected="true">
			Why Electric</a></li>
								</ul>
					<div class="tab-content" id="myTabContent">
								<div class="tab-pane fade" id="vision" role="tabpanel" aria-labelledby="vision-tab">
							<p>To be Amongst the top Indian leading players in Electric Two Wheelers by providing customers best of the electric mobility experiences through continuous research and development. <br><br>we aim to improve mobility and create a sustainable ecosystem by bringing out a revolution &amp; Innovation into electric mobility. Given this, we have created a comprehensive roadmap to establish a robust EV ecosystem by investing in next-generation technology solutions and globally competitive products, spreading awareness among citizens for the adoption of sustainable mobility and provide Indian road with Zero CO2 emission vehicles. <br><br>The Benling goal is to carry on their legacy of innovative thinking in Electric Vehicle segment and to develop products that will help Indian Market to cater the needs of a consumer in EV by providing a Safe and Clean drive.</p>
							<div class="row">
													</div>
						</div>
									<div class="tab-pane fade" id="mission" role="tabpanel" aria-labelledby="mission-tab">
							<p>Keeping the environment as an utmost priority Benling strives to work towards providing the Indian market with eco-friendly modes of transportation. <br><br>To provide Indian societies with Zero Emission vehicles, Benling India continuously works on innovation and technology in association with its technology partner to provide our customers with best of the technology experience and our customers can reach their destinations without harming the environment .<br><br>Providing Indian Market with high-end mobility technologies with No Pollution, No Noise, more greenery, zero co2 emission.</p>
							<div class="row">
													</div>
						</div>
									<div class="tab-pane fade active show" id="why_electric" role="tabpanel" aria-labelledby="why_electric-tab">
							<p>Electric Vehicles are not going to take the market by storm, but it’s going to be a gradual improvement.
No doubt, the demand for vehicles in India has increased numerously during the last decade adding to the rapidly increasing pollution levels in the country. In fact, the top 10 most polluted cities in the world are in India and China.<br><br>

Considering Increasing Pollution in India, Benling adopted the technology of producing electric scooters which will surely overcome the challenges of environmental pollution and it will be eco-friendly as well as economical. Saving in case of one electric scooter in operating expenses is 97200 with annual fuel cost(72000km/4 year) is Rs. 18,000.<br><br>

Developing Electric Vehicles will assist in energy conservation and security in India since energy efficiency is 46% higher than the internal combustion (ICEs) engines. Electric Vehicles also have the potential to decrease carbon dioxide emission by 13- 68% directly, through advanced V2G ( Vehicle to Grid) technology and indirectly through peak shaving. Developing Electric Vehicle would reduce reliance on oil imports as India is among the top 5 oil importers in the world.</p>
							<div class="row">
													</div>
						</div>
								</div>
				</div>
			</div>
  
  
  );   */
	  <>
	  <li className='cards__item'>
        <Link className='cards__item__link' to={props.path}>
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            <img
              className='cards__item__img'
              alt='Travel'
              src={props.src}
            />
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );

  
}
