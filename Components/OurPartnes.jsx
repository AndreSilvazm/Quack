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
                                    src='https://s3-alpha-sig.figma.com/img/927d/0c4b/03caddff324b09053128e88d4aa3e428?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hLR0lUvClt~eNY1WDszIuOt-NmppmI8BXMZ8nXZC9Py5UhAU34KMjSxvDkA~bEEULWCv68f72KRzSFgTYgVkT5FnxwuD~DIbEJeiSC5lXz3ehNqhPuM8iQDAQuqwcNPJ2lCraX-6oZ05DFGi0qXQS4KywtskqgM1iHBIsRDJ~bBUGaX7g95UKfNvaWm4l2MuAGePSQBloQOLC~PQSBWa8QmlT3jmCZwr0gwB7SZ~6wFHItBeTQA~SLwKumj3o~sxGxUvtVkpV~d1rahdQPFqfDrNgU-zmLT0RcJfiLZcwXOOutGAuV8L9gf6jPqmxMIPBz~3-bXcHQSxbLWd9-f49g__'
                                    alt=""
                                />
                            </article>

                            <article className='transition ease-in-out delay-150 hover:scale-110 duration-300'>
                                <img
                                    className="rounded-full h-[75px] w-[75px] md:h-[85px] md:w-[85px] "
                                    src='https://s3-alpha-sig.figma.com/img/1574/f666/09da700cd56f197d479657747beaf143?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oFSQ6bcO0XQmujKj-rKkTr2D6T4rwN4IefxZHk6ubA0cKaRkW24ZRVJy-ib4stQ~SL1hCJ~OOcH8EUmVtFQQI4dBoEI36GoRLh9TPSBny3a1rvgy1JceOJneXO0xB8lvyPJxkgEnmE4rbUVv8bAUdKiu0XJHBk3mQ4WCSU-H5hNGRC2YYrbNVdMgAMMYGa7imdTHsK6lHqJJr3uTinBeLPYDdjV637jP9SpoiezbqOm6ow6EyjDkh7BKJRQSGdG-RxOkc4ua9T7R9-0KC3SuwTT8VhjYCkTcy2cRNzV7qAqkfToo89Vx6GSbOLAPtq1Nl~nM4suJDnvZCOlFL76sdQ__'
                                    alt=""
                                />
                            </article>

                            <article className='transition ease-in-out delay-150 hover:scale-110 duration-300' >
                                <img
                                    className="rounded-full h-[75px] w-[75px] md:h-[85px] md:w-[85px] "
                                    src='https://s3-alpha-sig.figma.com/img/08f6/23ef/38ae44df90b2ea33114125d8079b4a44?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RC-V7SDh3lzacqiOc1yQn9IeQ3FqUtEinUrfSfEj7yjwO4P7wpYfpq5G4tjhFVJhIHglQnMl56BNdi5UPxHo~b-R498XA655vGCamnDKdVU9pEm7glN~5zfM9uY~iCIAtCQ1~8QmvMuYkfQ5WAeYl6ZkbVvrxl7MyQLleBo~RLjNMAdR82gAXfewJTKO9kjqnW8TudC2Rx6u5-aYBnP5Q3kg4JFHCkSvBeKI9PKTsgHd~nKvLAl1HV-CkyVAeT4Od~rC6V~M3wDzdHyV-HjcIufGR4aBGvE1mY4oAGxq4aDDi2106jmIU0EGMttN-oJxY17693MB5pvd4JdoMTMk2g__'
                                    alt=""
                                />
                            </article>

                            <article className='transition ease-in-out delay-150 hover:scale-110 duration-300'>
                                <img
                                    className="rounded-full h-[75px] w-[75px] md:h-[85px] md:w-[85px] "
                                    src='https://s3-alpha-sig.figma.com/img/7242/59a3/4f0996db476b2e2797f62eb246314c7a?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=I82bbP9Z-IEC513OioPXXOG4nNZFbaAljxx1BAiYKPhM62PjVLQNYflppb37TQ7DB0VysoD3A8uNEhqWZwy44YRVsl-tbUuaIVAAtiE1uSzdgateNqgGAveKwKziJsbWvNnV6LRDipdRb3I4dxx7btpnzs9GjO523GTJLkflEpiUVHv5lbMWzetzhu~bqYGQ-h0rugKK4e2oGhWW52TnsLqZl2k0FtmjrhkP-rQoBa3EcMfHOrr~XTO2HP6UqpIYanJNyWK1LH2mXTwTuzcm9fOtqb7Fe-4sj5zrM1EAWnJ~ecz1jODDK6hKDjxbDdKEVJw1E89ji9KuJmoDoB6UXg__'
                                    alt=""
                                />
                            </article>

                            <article className='transition ease-in-out delay-150 hover:scale-110 duration-300' >
                                <img
                                    className="rounded-full h-[75px] w-[75px] md:h-[85px] md:w-[85px] "
                                    src='https://s3-alpha-sig.figma.com/img/27a4/3d3a/b3750fce98dce8caf0e2ff2fd11059a0?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EW5HPVVXnGEJviBiRkztyoS1BX~---WkUWhydRW5FRhFesgSNBw2zqgnetaIue6el~UjEWFgLnW27b3~ict5ixPqyJD5s61gE35Yqx0H6mW3Y-y6ay7cyruqxvEmndGCNoELWjJZR9lD-WP2~rl4lQAYBJPyDEenqWN~haY1CGEPaUoUGKalTam7y3X-hoxSflIHYRP3vy3XKVA57mh9cY-j76Xw2dz~BHAjsENk~3lq~h5CML3dWCoLji8SB~57sBKrA48RBa582e6VCmfVHQgYc1FjkdBZrX2h0V0lwamT~j~Tk18~l35Hkxlrzxf24h8mXqqvZRvQO5B05SOB~w__'
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