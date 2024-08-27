import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function QuoteBox() {
  return (
    <div className="relative w-[400px] h-[300px] text-white bg-transparent rounded-sm flex items-center justify-center">
      <i className="fas fa-quote-left absolute bottom-0 right-0 text-[25px] h-[50px] w-[50px] flex items-center justify-center bg-white text-[#2C3A47] z-10"></i>
      <div className="absolute top-[30px] left-[-30px] w-[calc(100%+60px)] h-[calc(100%-60px)] bg-[#2C3A47] rounded-sm">
        <i className="fas fa-quote-right absolute top-0 left-0 text-[25px] h-[50px] w-[50px] flex items-center justify-center"></i>
        <div className="absolute top-1/2 left-0 transform -translate-y-1/2 text-center w-full px-[60px] py-[30px]">
          <p className="text-[15px]">According to estimates, Mumbai’s Brihanmumbai Municipal Corporation (BMC) spends around ₹1,000-₹1,500 crores annually on road repairs and maintenance. Of this, approximately 20-30% is believed to be wasted due to rework caused by lack of coordination with other utility departments.</p>
        </div>
      </div>
      <div className="absolute inset-0">
        <div className="absolute inset-0 border-t-[20px] border-l-[20px] border-white"></div>
        <div className="absolute inset-0 border-b-[20px] border-r-[20px] border-white"></div>
      </div>
    </div>
  );
}
