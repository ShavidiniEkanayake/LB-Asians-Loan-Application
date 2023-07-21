import React from 'react'
import Header from '../Components/header.jsx'
import MainImage from '../Assests/MainImage.svg'

const FirstElement = () => {
  return (
    <div className="relative">
      <img src={MainImage} className="w-screen" alt="Main Image" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className="text-white text-6xl font-bold mb-8 tracking-wider">Loan Application</h1>
        <p className="text-white text-lg font-light tracking-widest">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </div>
  );
};

function Loan() {
    return (
      <div>
        <Header />
        <FirstElement/>
      </div>
    );
  }
  
  export default Loan;