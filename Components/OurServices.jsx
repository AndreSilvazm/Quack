import React from 'react';
import { Poppins } from 'next/font/google'
import OurPlans from './OurPlans';


const poppins400 = Poppins({
    subsets: ['latin'],
    display: 'swap',
    weight: "400"
})

function OurServices(props) {


    return (
        <>
            {/*GRID DOS SERVIÇOS */}
            <section className={`${poppins400.className} w-full`}>

                <article className='grid grid-cols-2 gap-5 p-2'>

                    <div className={`bg-[#FFF7AC] h-44 rounded-md relative overflow-hidden shadow-lg`} >

                        <h1 className='mt-4 ml-2'>Gastronomia</h1>


                        <img src="https://i.ibb.co/gMMmPHQ/Testando-Semfundo-removebg-preview.png" alt="" className=' h-[45%] absolute -bottom-3 right-7 rounded-full sm:h-[70%] sm:right-14 md:h-[80%] md:right-2 md:-bottom-10 ' />

                        <img src="https://i.ibb.co/1vJQY4p/almondegas-removebg-preview-1.png" className=' h-[45%] absolute -bottom-0 -right-5 rounded-full sm:h-[70%] sm:-right-8 sm:-bottom-4 md:-right-16 md:h-[80%] ' alt="" />

                        <img src="https://i.ibb.co/GJdKcn5/frango-removebg-preview.png" className='h-[45%] absolute -right-6 rounded-full sm:h-[70%] sm:-top-8 md:h-[80%] md:-right-16 md:-top-8 ' alt="Prato de frango" />


                    </div>

                    <div className='bg-[#E0E3FF] h-44 rounded-md relative shadow-lg'>

                        <h1 className='mt-4 ml-2'>Entreterimento</h1>

                        <img src="https://i.ibb.co/Y8ydcvz/capture-20240417-000519-removebg-preview.png" alt="" className='absolute h-20 bottom-0 right-0 sm:h-28 md:h-32' />

                    </div>

                </article>


                <article className='grid grid-cols-4 gap-5 mt-2 p-2'>


                    <div>


                        <div className='bg-[#CBA4FE] h-[85px] rounded-bl-none rounded-br-none rounded-tl-lg rounded-tr-lg overflow-hidden flex justify-center items-baseline' >

                            <img src="https://i.ibb.co/Z2p0Qh5/capture-20240417-133911-removebg-preview.png" alt="" className='h-24' />

                        </div>
                        <div className='text-center bg-white rounded-b-md shadow-lg'>

                            <h1 className='text-sm'>Turismo</h1>
                        </div>


                    </div>

                    <div>


                        <div className='bg-[#FFD9D9] h-[85px] rounded-bl-none rounded-br-none rounded-tl-lg rounded-tr-lg overflow-hidden relative md:flex md:justify-center items-center '>

                            <img src="https://i.ibb.co/zx9MDS3/Sacolas-removebg-preview.png" className='absolute bottom-0 h-24' alt="" />

                        </div>
                        <div className='text-center bg-white rounded-b-md shadow-lg' >
                            <h1 className='text-sm'>Compras</h1>
                        </div>


                    </div>



                    <div>


                        <div className='bg-[#D9FFFA] h-[85px] rounded-bl-none rounded-br-none rounded-tl-lg rounded-tr-lg overflow-hidden flex justify-center relative md:flex md:justify-center items-center '>

                            <img src="https://cdn.pixabay.com/photo/2019/10/19/17/17/circus-stage-4561815_640.png" className='absolute -bottom-4 h-24' alt="" />

                        </div>
                        <div className='text-center bg-white rounded-b-md shadow-lg' >
                            <h1 className='text-sm'>Eventos</h1>
                        </div>


                    </div>


                    <div>


                        <div className='bg-Primary h-[82px] max-h-[150px] rounded-bl-none rounded-br-none rounded-tl-lg rounded-tr-lg   relative overflow-hidden '>

                            <h1 className='text-[12px] text-white font-bold sm:text-sm md:text-lg'>Seu quack</h1>

                            <img src="https://i.ibb.co/5TD81qs/capture-20240417-003504-removebg-preview.png" alt="" className=' w-[40px] scale-125 absolute bottom-0 -right-1 md:w-[50px]  ' />

                        </div>
                        <div className='text-center bg-white rounded-b-md	shadow-xl'>
                            <h1 className='text-sm'>Quack+</h1>
                        </div>


                    </div>


                </article>

            </section>

        </>
    );
}

export default OurServices;