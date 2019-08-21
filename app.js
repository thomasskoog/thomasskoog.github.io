import React, { Component } from 'react';
import './css/normalize.css';
import './css/style.css';
'use strict';

const e = React.createElement;

class App extends Component {
  /*constructor(props) {
    super(props);
    this.state = { liked: false };
	}*/

  render() {
    /*if (this.state.liked) {
      return 'You liked this.';
	}*/
	
		document.addEventListener("click", function(e){
			var valueButton = e.target.className; //e.path[1].value;

			switch (valueButton){
					case "om":
							document.getElementById("articleOm").style.display = "";
							document.getElementById("articlePortfolio").style.display = "none";
							document.getElementById("articleKontakt").style.display = "none";
							break;
					case "port":
							document.getElementById("articleOm").style.display = "none";
							document.getElementById("articlePortfolio").style.display = "";
							document.getElementById("articleKontakt").style.display = "none";
							break;
					case "kontakt":
							document.getElementById("articleOm").style.display = "none";
							document.getElementById("articlePortfolio").style.display = "none";
							document.getElementById("articleKontakt").style.display = "";
							break;
			}
		});

		document.getElementById("articleOm").style.display = "none";
		document.getElementById("articlePortfolio").style.display = "";
		document.getElementById("articleKontakt").style.display = "none";

    return (
			<div>

				<header>
						<h1><a href="index.html">THOMAS SKOOG</a></h1>
						<nav>
								<ul>
										<li className="buttonNav"><h2 className="om">OM</h2></li> <!-- fixa className="red-arrow", byta till jquery-animation? -->
										<li className="buttonNav"><h2 className="port">PORTFOLIO</h2></li>
										<li className="buttonNav"><h2 className="kontakt">KONTAKT</h2></li>
								</ul>
						</nav>
						<div className="red-line"></div>
				</header>

        <main className="content">

					<article id="articleOm">
							<h3>Om mig</h3>
							<img className="fejs" src="./assets/images/photo_567x567.jpg" alt="En bild på Thomas ansikte"/>
							<p className="text-om"><em>Hej värld!</em></p>
							<p className="text-om">Jag heter <strong>Thomas Skoog</strong> och jag har skapat denna sida som en del i min Frontend-utbildning på Nackademin. Den ska fungera som ett fönster mot världen där man ska kunna se arbetsuppgifter och projekt jag utfört, och min utveckling i allmänhet.</p>
							<p className="text-om">Född 1987, uppvuxen i Vallentuna, men numera bosatt i Täby. Jag gick Bild & Form på estetprogrammet i gymnasiet, så mina intressen ligger närmare det grafiska snarare än det rent tekniska. Det är därför jag sökte mig till den här utbildningen, för sammanfoga dessa två områden. Jag kände att jag behövde fler praktiska färdigheter och kunskaper. Färdigheter som efterfrågas på en arbetsmarknad stadd i snabb utveckling och förändring. Just LIA-aspekten kändes väldigt relevant och lockande med denna utbildning.</p>
					</article>

					<article id="articlePortfolio">
							<h3>Portfolio</h3>
							<div className="galleri">

									<div className="galleri-bild"><a href="http://teaterrapid.se/" target="_blank"><img className="portfo-bild" src="./assets/images/teater_rapid_400.jpg" alt="En skärmdump på hemsidan"/></a>
									<p className="p-list"><strong>Hemsida för Teater Rapid.</strong><br />
									Skapade en hemsida åt teatergruppen Teater Rapid <br />
									tillsammans med Mikael Modig och Fredrik Löfgren.</p></div>

									<div className="galleri-bild"><a href="http://moving.mikaelmodig.se" target="_blank"><img className="portfo-bild" src="./assets/images/moving_400.jpg" alt="Spel med föremål, fiender och guldmynt i en fängelsehåla"/></a>
									<p className="p-list"><strong>Dungeon Crawler.</strong><br />
									Vilande projekt. Ett spel där spelaren rör sig <br />
									igenom tunnlar och samlar/manipulerar föremål.<br />
									Ett experiment i spelmekanik skapad tillsammans <br />
									med Mikael Modig och Fredrik Löfgren.</p></div>

									<div className="galleri-bild"><a href="http://festivalx.mikaelmodig.se" target="_blank"><img className="portfo-bild" src="./assets/images/festivalx_400.jpg" alt="Spel med pixliga karaktärer som dansar på en åker"/></a>
									<p className="p-list"><strong>Festival X.</strong><br />
									Vilande projekt. Användaren kan gå mellan <br />
									dansgolven/åkrarna och lyssna på olika sorters musik.<br />
									Använder canvas, SoundClouds API, node.js, webpack.<br />
									Skapad tillsammans med Mikael Modig och <br />
									Martin Törnqvist. </p></div>

									<div className="galleri-bild"><a href="http://thomasskoog.github.io/portTape/index.html" target="_blank"><img className="portfo-bild" src="./assets/images/tape_400.jpg" alt="Kassettband mot blå bakgrund" /></a>
									<p className="p-list"><strong>A History on Tape.</strong><br />
									Infographic om kassettbandets historia.<br />
									Med tillbakaspolningsfunktion. <br />
									Använder jQuery och Skrollr.</p></div>

							</div>
					</article>

            <article id="articleKontakt">
                <h3>Kontakt</h3>
                <div className="ikoner-alla">
                    <div className="ikon-text">
                        <a href="mailto:thomas.skoog@gmail.com"><img className="ikon" src="./assets/images/ikon-mail-envelope.png" alt="Mail envelope" /><h2>thomas.skoog@gmail.com</h2></a>
                    </div>
                    <br />
                    <div className="ikon-text">
                        <a href="https://se.linkedin.com/in/thomasskoog"><img className="ikon" src="./assets/images/ikon-linkedin.png" alt="Linked In logo"/><h2>https://se.linkedin.com/in/thomasskoog</h2></a>
                    </div>
                </div>
                <h3>CV</h3>
                <div className="ikoner-alla">
                    <a href="./assets/Thomas_Skoog_CV.pdf"><img className="ikon" id="cv" src="./assets/images/ikon-cv.png" /><h2>thomas_skoog_cv.pdf</h2></a>
                </div>
            </article>
        </main>

        <footer>
            <p>&copy; 2016 Thomas Skoog</p>
        </footer>

			</div>
    );
  }
}

const domContainer = document.querySelector('#app');
reactDOM.render(e(App), domContainer);