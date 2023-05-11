import React from "react";

function Home() {
  return (
    <div className="h-screen">
      <div className="min-[320px]:bg-[url('./images/hamburgerLowRes.jpg')] md:bg-[url('./images/hamburger.jpg')] bg-cover h-full mt-20 flex flex-col items-center justify-center">
        <p className="text-3xl text-center px-1 bg-gray-600 bg-opacity-50 mb-5 w-full">
          Tapadero
        </p>
        <p className="text-3xl text-center px-1 bg-gray-600 bg-opacity-50">
          Un'esplosione di sapori: dai morsi succulenti degli hamburger alle
          delizie delle tapas, dalle irresistibili Pinsa alle nostre Baffe ai
          cocktail che fanno sognare. Benvenuti nel paradiso gastronomico!
        </p>
        <a
          className="max-w-2xl"
          href="https://www.justeat.it/restaurants-mc-tapadero-pavia"
        >
          <img
            src="https://download.logo.wine/logo/Just_Eat/Just_Eat-Logo.wine.png"
            alt="just eat"
          />
        </a>
      </div>
    </div>
  );
}

export default Home;
