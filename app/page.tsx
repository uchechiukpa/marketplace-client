'use client'

import CountDownTimer from "@/components/countdownTimer/countdownTimer";
import { useState } from "react";

export default function Home() {


  const [OpenModel, setOpenModel] = useState(false);

  const overlay= OpenModel ? 'bg-opacity-60 bg-black' : '';


  return (
    <div className={`${overlay}`}>
    <div className="lg:max-w-screen-lg mx-auto flex flex-col items-center justify-center px-4 h-screen">
        {/* <Header/> */}

        <h1 className='lg:text-5xl md:text-3xl text-2xl text-center font-bold'>A marketplace for digital assets, featuring templates, boilerplates, designs and more</h1>
        <h1 className='lg:text-2xl md:text-xl text-lg text-center mt-10'>A blank canvas is often discouraging whether in time or creativity but not anymore, Say goodbye to the daunting black canvas</h1>

        <p className='font-bold my-10 text-lg'>Coming Soon</p>
        <CountDownTimer />

        <button className="my-14 py-3 lg:w-4/5  w-full  border-2 border-black rounded-xl " onClick={() => setOpenModel(true)}>Notify Me</button>


        {
            (OpenModel) && (
              <Model  setOpenModel={setOpenModel}/>

          )
        }




        
    </div>
    </div>
  );
}




const Model: React.FC<{ setOpenModel: React.Dispatch<React.SetStateAction<boolean>> }> = ({setOpenModel}) => {
  return (
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96  px-5 rounded-xl shadow-2xl flex flex-col justify-center items-center bg-white">
        <span className='fixed top-10 right-10 text-2xl font-bold cursor-pointer' onClick={() => setOpenModel(false)}>X</span>
        <p className="text-center font-bold text-lg">Enter your email address and get notofied when we launch</p>
        <input className="rounded-xl p-3 w-full my-5 border" placeholder="Email Address"/>
      </div>
  )

}
