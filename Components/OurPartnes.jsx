import React from 'react';
import { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { Poppins } from 'next/font/google'

const poppins400 = Poppins({
    subsets: ['latin'],
    display: 'swap',
    weight: "400"
})

function OurPartnes(props) {


    const carousel = useRef(null);

    const [width, setWidth] = useState(0);

    //CALCULANDO O TAMANHO DA TELA
    function handleResize() {
        if (carousel.current) {
            setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
        }
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize); //TODA VEZ QUE O TAMANHO DA TELA FOR MUDADO, SERÁ ATRIBUIDO UM NOVO VALOR AO WIDTH
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>


            <section className={`${poppins400.className} px-5 mt-8`}>

                <h1 className='w-fit h-6 border-b border-solid border-Primary leading-4 '>Parceiros <span className='text-Primary'>Quack</span></h1>

                <article className="w-full mt-6">

                    <motion.div ref={carousel} whileTap={{ cursor: "pointer" }}>

                        <motion.div

                            className={`w-[600px] flex gap-3 `}

                            drag={width < 1900 ? "x" : false}

                            dragConstraints={width < 1900 ? { right: 0, left: -width } : false}>

                            <article className='transition ease-in-out delay-150 hover:scale-110 duration-300' >
                                <img
                                    className="rounded-full h-[75px] w-[75px] md:h-[85px] md:w-[85px] border-solid border-2 	"
                                    src='https://i.ibb.co/LPxh6mQ/img1ca.png'
                                    alt=""
                                />
                            </article>

                            <article className='transition ease-in-out delay-150 hover:scale-110 duration-300'>
                                <img
                                    className="rounded-full h-[75px] w-[75px] md:h-[85px] md:w-[85px] "
                                    src='https://i.ibb.co/vmXkZ5W/img2ca.png'
                                    alt=""
                                />
                            </article>

                            <article className='transition ease-in-out delay-150 hover:scale-110 duration-300' >
                                <img
                                    className="rounded-full h-[75px] w-[75px] md:h-[85px] md:w-[85px] "
                                    src='https://i.ibb.co/FxmRYY4/img4ca.png'
                                    alt=""
                                />
                            </article>

                            <article className='transition ease-in-out delay-150 hover:scale-110 duration-300'>
                                <img
                                    className="rounded-full h-[75px] w-[75px] md:h-[85px] md:w-[85px] "
                                    src='https://i.ibb.co/ySWyPjJ/img3ca.png'
                                    alt=""
                                />
                            </article>

                            <article className='transition ease-in-out delay-150 hover:scale-110 duration-300' >
                                <img
                                    className="rounded-full h-[75px] w-[75px] md:h-[85px] md:w-[85px] "
                                    src='https://i.ibb.co/rwXMxLV/img5ca.png'
                                    alt=""
                                />
                            </article>

                        </motion.div>
                    </motion.div>

                </article>


            </section>

        </>
    );
}

export default OurPartnes;