import { Poppins } from 'next/font/google';
import React from 'react';
import { FaHeart } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";

import { useState } from 'react';


const poppins400 = Poppins({
    subsets: ['latin'],
    display: 'swap',
    weight: "400"
})

function AvaliablePlaces(props) {

    const[Favorited1, setFavorited1] = useState(true)
    const[Favorited2, setFavorited2] = useState(true)
    const[Favorited3, setFavorited3] = useState(true)

    

    function HandleHeart(id){

        switch(id){

            case 1:
                setFavorited1(!Favorited1)
                break;
            case 2:
                setFavorited2(!Favorited2)
                break;
            case 3:
                setFavorited3(!Favorited3)
                break;
        }

    }

    return (
        <>


            {/*SESSÃO DE ESTABELECIMENETOS DISPONÍVEIS*/}
            <section className={`${poppins400.className} p-5 `}
            >
                <h1 className='w-fit border-b border-solid border-Primary text-[15px] '>Estabelecimentos disponíveis no <span className='text-Primary font-semibold'>Clube Quack</span></h1>

                <article className=' w-full mt-5 flex justify-between rounded-md shadow-xl'>
                    <div className='flex'>
                        <img src="https://i.ibb.co/4sMrLn3/904179297ce52a89693bf07f4464de39.png" alt="" className='w-[75px] h-[100%] rounded-md' />



                        <div className='ml-2 p-1 leading-5'>
                            <h2 className='text-[14px]'>Nome do Estabelecimento</h2>

                            <div className='text-[11px] flex flex-row items-center'>

                                <i className='text-[8px] text-Secondary'><FaStar /></i>
                                <span className='text-Secondary'>5.0</span>         

                                <div className='h-1 w-1 bg-gray-400 rounded-full mx-1'></div>

                                <span>Categoria</span>

                                <div className='h-1 w-1 bg-gray-400 rounded-full mx-1'></div>

                                <span>Localidade</span>
                            </div>

                            <p className='text-[12px]'>Descrição</p>
                        </div>

                    </div>

                    {
                        !Favorited1 ? 

                        <i className='self-center text-Primary mr-2 text-lg cursor-pointer' onClick={()=>{HandleHeart(1)}}><FaHeart /></i> 

                        : 
                        
                        <i className='self-center text-Primary mr-2 text-lg cursor-pointer' onClick={()=>{HandleHeart(1)}}><CiHeart /></i>
                    }
                </article>

                <article className='w-full mt-5 flex justify-between rounded-md shadow-xl'>
                    <div className='flex '>
                        <img src="https://i.ibb.co/4sMrLn3/904179297ce52a89693bf07f4464de39.png" alt="" className='w-[75px] h-[100%] rounded-md' />



                        <div className='ml-2 p-1 leading-5	'>
                            <h2 className='text-[14px]'>Nome do Estabelecimento</h2>

                            <div className='text-[11px] flex flex-row items-center'>
                                <i className='text-[8px] text-Secondary'><FaStar /></i>
                                <span className='text-Secondary'>5.0</span>
                                <div className='h-1 w-1 bg-gray-400 rounded-full mx-1'></div>
                                <span>Categoria</span>
                                <div className='h-1 w-1 bg-gray-400 rounded-full mx-1'></div>
                                <span>Localidade</span>
                            </div>

                            <p className='text-[12px]'>Descrição</p>
                        </div>

                    </div>


                    {
                        !Favorited2 ? 
                        
                        <i className='self-center text-Primary mr-2 text-lg cursor-pointer' onClick={()=>{HandleHeart(2)}}><FaHeart /></i> 
                        
                        : 
                        
                        <i className='self-center text-Primary mr-2 text-lg cursor-pointer' onClick={()=>{HandleHeart(2)}}><CiHeart /></i>
                    }

                </article>


                <article className='w-full mt-5 flex justify-between rounded-md shadow-xl' >
                    <div className='flex '>
                        <img src="https://i.ibb.co/4sMrLn3/904179297ce52a89693bf07f4464de39.png" alt="" className='w-[75px] h-[100%] rounded-md' />



                        <div className='ml-2 p-1 leading-5	'>
                            <h2 className='text-[14px]'>Nome do Estabelecimento</h2>

                            <div className='text-[11px]  flex flex-row items-center'>
                                <i className='text-[8px] text-Secondary'><FaStar /></i>
                                <span className='text-Secondary'>5.0</span>                            <div className='h-1 w-1 bg-gray-400 rounded-full mx-1'></div>
                                <span>Categoria</span>
                                <div className='h-1 w-1 bg-gray-400 rounded-full mx-1'></div>
                                <span>Localidade</span>
                            </div>

                            <p className='text-[12px]'>Descrição</p>
                        </div>

                    </div>


                    {
                        !Favorited3 ? 

                        <i className='self-center text-Primary mr-2 text-lg cursor-pointer' onClick={()=>{HandleHeart(3)}}><FaHeart /></i>
                        
                        : 
                        
                        <i className='self-center text-Primary mr-2 text-lg cursor-pointer' onClick={()=>{HandleHeart(3)}}><CiHeart /></i>
                    }
                </article>
            </section>

        </>
    );
}

export default AvaliablePlaces;

