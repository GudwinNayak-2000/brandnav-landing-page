import { useState } from "react";
import ScreenerImg from '../assets/screener-search.svg'
import EnrichImg from '../assets/enricher-lookup.svg'
import EmailImg from '../assets/email-verifier.svg'
import BlacklistImg from '../assets/blacklist-shield.svg'
import Image from "next/image";
const cardData = [
  { id: 1,img:ScreenerImg, title: "Screener Search", description: "Build your list with advanced search filters" },
  { id: 2,img:EnrichImg, title: "Enricher Lookup", description: "Get verified contact information from Enricher" },
  { id: 3,img:EmailImg, title: "Email Verifier", description: "Reduce bounces with 100% verified emails" },
  { id: 4,img:BlacklistImg, title: "Blacklist Shield", description: "Monitor and boost your email deliverability" },
];

const detailData = {
  1:{
    title:"The ultimate eCom leads database",
    description:"Get powerful insights of 99.99% eCommerce and DTC brands that can help you build your ideal prospect list."
  } , 
  2: {
    title: "Get verified contact-data of your leads",
    description:
      "BrandNav's AI enabled algorithm helps you find and verify contacts of decision-makers in real-time.",
    buttonText: "Try for free",
  },
};

export default function Cards() {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);

  return (
    <div className="flex flex-col items-center p-6 bg-gray-50 min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cardData.map((card) => (
          <div
            key={card.id}
            className="p-6 h-auto flex flex-col gap-6 w-full max-w-[20em] cursor-pointer shadow-lg hover:shadow-xl transition-all bg-white rounded-lg"
            onClick={() => setSelectedCard(card.id)}
          >
            <div className="bg-[#fff] border border-[#d8ddeb] rounded-[1.25em] flex items-center justify-center">
            <Image src={card.img} alt="" className="w-[10em] h-[12em] py-4"/>
            </div>
             <div className="w-full">
             <h3 className="text-lg font-semibold">{card.title}</h3>
             <p className="text-gray-600 mt-2">{card.description}</p>
             </div>
          </div>
        ))}
      </div>

      {selectedCard && detailData[selectedCard] && (
        <div className="my-8 p-6 w-full bg-white shadow-lg rounded-lg text-center transition-all opacity-100 transform translate-y-0">
          <h2 className="text-2xl font-bold">{detailData[selectedCard].title}</h2>
          <p className="text-gray-600 mt-4">{detailData[selectedCard].description}</p>
          <button className="mt-6 bg-blue-600 text-white px-4 py-2 rounded">
            {detailData[selectedCard].buttonText}
          </button>
        </div>
      )}
    </div>
  );
}
