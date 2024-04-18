import React from 'react';
import { Poppins } from 'next/font/google'


const poppins400 = Poppins({
    subsets: ['latin'],
    display: 'swap',
    weight: "400"
})
function OurPlans(props) {
    return (
        <>

            {/*Sessão de assinatura de planos*/}
            <section className={`${poppins400.className} bg-[#FFA518] text-white h-[155px] max-h-[155px] m-2 rounded-md mt-6 flex flex-row items-center justify-evenly shadow-xl`}>

                <div className=' w-[148px] '>

                    <span className='text-[12px] sm:text-sm md:text-lg'>Assine já o</span>

                    <h1 className='text-[17.12px] font-extrabold sm:text-sm md:text-xl'>Clube Quack</h1>

                    <p className='text-[12px]'>E tenha acesso em dobro as experiências</p>

                </div>

                <img src="https://i.ibb.co/5TD81qs/capture-20240417-003504-removebg-preview.png" alt="" className='scale-110 w-[100px] ' />

                <div className='text-center'>

                    <h1 className='text-[15px] font-bold sm:text-xl md:text-xl2'>R$ 299,99</h1>
                    <button className='bg-Primary text-white text-[8px] rounded-lg p-1 sm:text-sm md:text-sm'>Clique aqui e assine</button>

                </div>

            </section>

            <section className={`${poppins400.className} text-sm m-2 mt-6 text-center rounded-md border border-solid border-[#EFEFEF] shadow-md`}>
                <p>
                    <span className='text-Primary'>Clube Quack</span> ainda não ativado para essa cidade
                </p>
            </section>

        </>
    );
}

export default OurPlans;