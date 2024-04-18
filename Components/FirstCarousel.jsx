import React from 'react';
import { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'


function FirstCarousel(props) {

    const carousel = useRef (null); 
    const [width, setWidth] = useState (0);

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
        <div className="px-5">

            <main>

                <section >

                    <article className="w-full   flex justify-center flex-col mt-20 mb-3 ">

                        <motion.div ref={carousel} whileTap={{ cursor: "pointer" }}>

                            <motion.div

                                className={`w-[500px] flex gap-3 `}

                                drag={width < 1900 ? "x" : false}

                                dragConstraints={width < 1900 ? { right: 0, left: -width } : false}>


                                <div className='' >
                                    <img
                                        className="rounded-full h-[75px] w-[75px] border-solid border-2 md:h-[85px] md:w-[85px]	"
                                        src='https://s3-alpha-sig.figma.com/img/6833/8182/3355e6fe03ae1412018f0afcddc7d4aa?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ghPiRQXdIwgbzn~ekMdIykltrzLDk-zMrl31INqQ4zlckryw64exQHE85QKrbmL~ted9nMD021E6fpiAV8RhYMI7Gt0PS9fxGP12IAcEkUyVsfY7x3FgM8CEnUrld8yn2nSN5uQW7GynMqbFiPKe5vyIgK7pn5mYo5XgfdGsRvZxBEsFk35ibeCsm2xp7pS~Dm781a9etyXUDOfe8nJAA2sxrXOGd1etJxDZ-8TkAFuMcGzdUtfU8oaBK1QnzEINW3-rL-Wib3tVZbGEW-ANAtXtPZ8EnjSUJDG0jQmZEZ1Pg5lyzlUQwfR5eB550EWZw64k0oiMdl-YZBACii8bpQ__'
                                        alt=""
                                    />
                                    <div
                                    >
                                
                                    </div>
                                </div>

                                <div>
                                    <img
                                        className="rounded-full h-[75px] w-[75px] border-solid border-2 border-[#FFA518] md:h-[85px] md:w-[85px]"
                                        src='https://s3-alpha-sig.figma.com/img/6bcf/a8cf/b83df98d705d84aebfacda832e0a79f7?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=g16D6TgW69dbg1AN0YFqNA5Pn4eC6aEwXUhN90hrtILYv1Lgxv4au8D8WxwgvSaLy6LwmG85Mbi~5lLyfwd7K8~r1h206ZGR56ItQ~1LqZ1O96H5mQgy6jSbMQT6j8QOuG72UpaDeJhyE3PMNfu0Hht6lPLtYtVojFo7f9AfdX7sT5rLm4Bnsum4EPWKRPFcFC2q5sglecQ~YWtJAeu33o8h39y9uuS6i1qQ7f7s-5O3B8MJGslOOu5HuUShYKJfcsQPvM~UDyRiPGFSwMwv1ff7hTWitujnhBRGRxAYyKwVFCpb9TExUZOJMTKx5jxXq4xBTRrMNscHMTYirqM1Og__'
                                        alt=""
                                    />
                                    <div ></div>
                                </div>


                                <div >
                                    <img
                                        className="rounded-full h-[75px] w-[75px] border-solid border-2 border-[#FFA518] md:h-[85px] md:w-[85px]"
                                        src='https://s3-alpha-sig.figma.com/img/1823/adc8/c06606e97b453eea0a45e2bf25ecfdbc?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Mc0bLIKBWDFv-moKL7tmBhKSz1Zg4MsknH2QgsH8kuQUam55Q4D36UmdW79SKtK6aT~xp2p8oHLPUOh~U6aqmcCBnDWJCY0BUHJoDPoJbuDGDqUnmX3MEosn2xBriEcky8u2Oq615nFxJ7oqZLseNbF9gK5aOiaECxnqld5-CuRANQ88~j-AKh-dDdjxww09IWrVRewC8VJM6DsoIYOe75bkZB4GqAzkpjns~aXFuRj0Dt8r5P8erfypPQpSJXz4dG9LDXdG8oEN7as0HgGjSAOqJY4PYGcktiaY7YjAxoAEZhvdGkaxArn76H-QgCy3slGQ8bygcsvFaCkUqxFEVA__'
                                        alt=""
                                    />
                                    <div ></div>
                                </div>

                                <div >
                                    <img
                                        className="rounded-full h-[75px] w-[75px] border-solid border-2 border-[#FFA518] md:h-[85px] md:w-[85px]"
                                        src='https://s3-alpha-sig.figma.com/img/e9a5/7592/6aa93413634820b511f28759e6eb3326?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OaDOk3YIDHQ9lrZ-VoufqIGzcEN-tCxJJ2caLVXz4BBiUU~c7oAdDNo2D-tlXu5pMF4vohF8~HA7kqgwoiNLfgXSIAUE6bCl0yR1HIwMahF3Vj8jTieelA3~DwqUdB4K9WJqEwTAIq-xelYfzLdckZYKOs9ldMhdMb1fhcA9h85983j-DAugQ9oasI~uPvjDRZ~HWgNwQQhntYqCApnvUHIxfIKsHg8oV~JLSXWU~M85CGQwuKyIRN8xREGYjs-VFvZFfZw8Dap~mKCKub52vVNMQQwKpXZJu~LU47Qp77V3I8wI28sPCPx48PY3sgEfp1Rvv~Jjt8goMrWyTrcNaA__'
                                        alt=""
                                    />
                                    <div></div>
                                </div>

                                <div >
                                    <img
                                        className="rounded-full h-[75px] w-[75px] border-solid border-2 border-[#FFA518] md:h-[85px] md:w-[85px]"
                                        src='https://s3-alpha-sig.figma.com/img/be77/ff32/1731082c2fb75b9037941aee4724c22a?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oQG7U5kyocWhov2t4L8EwsxWElssdckmgk-t3-PjGXGRyzPnqRIGT9ynh8v6iQP014urTQC~Tf0SeXXEiHqSvOD5X9TgmsjjrULCOS1MIr4QbV-h05w~3WxtDQsjHeE9vzCN96yH9hScwmgiuOxXIjJZ4BaFQ5VkZkTr~MdND8D6doqZhmuZnKAoleuiUOPywCPLNvkCd~3EbYT~AN5Xw0yLcHhuArAk8nRTxCgcecImlr7fDWXTgPINYosg2Bl-nYyusBcMCBxI91z5yXSvHuTMo48tPlx7luUUciRyJMUBlTP362~BhAJh3nrAHw8nAjNQ~MIP4Z26g8gLywJmgA__'
                                        alt=""
                                    />
                                    <div></div>
                                </div>


                            </motion.div>
                        </motion.div>

                    </article>


                </section>

            </main>


        </div>
    )
}

export default FirstCarousel;