"use client"

import Header from "./components/header";
import ChooseWeapon from "./pages/choose-weapon";
import HeroPage from "./pages/hero";

export default function Home() {
   return (
      <div className="flex flex-col items-center justify-center w-full h-full"> 
         <Header />
         <div className="h-full py-[7em] w-full max-w-[1200px] flex flex-col items-center justify-center">
               <HeroPage />
               <ChooseWeapon/>
         </div>
             
      </div>
   )
}
