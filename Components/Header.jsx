import React, { useState } from 'react';
import { BsQrCode } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { Poppins } from 'next/font/google'
import QRCode from 'qrcode.react';

const poppins400 = Poppins({
    subsets: ['latin'],
    display: 'swap',
    weight: "400"
})

function Header(props) {

    const [showModal, setShowModal] = useState(false);
    const [ShowQuery, setShowquery] = useState(false)

    return (
        <>
            <header className={`${poppins400.className}`}>
                <nav className='w-full  bg-white flex justify-between p-5 fixed z-50'>
                    <div>

                        <i className='color-[#27303C] text-2xl' onClick={() => setShowModal(true)}>
                            <BsQrCode />
                        </i>

                        {/*MODAL QRCODE */}

                        {showModal ?
                            <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75">
                                <div className="bg-white p-4 rounded-md ">
                                    <div className="flex flex-col justify-center items-center ">
                                        <QRCode value="https://www.example.com" size={200} />

                                        <button onClick={() => setShowModal(false)} className='mt-4 text-Primary'>Fechar</button>

                                    </div>
                                </div>
                            </div> : ''
                        }
                    </div>

                    <select name="" id="" className='focus:outline-none'>
                        <option value="São Paulo">São Paulo</option>
                        <option value="São Paulo">Osasco</option>
                        <option value="São Paulo">São Caetano</option>
                        <option value="São Paulo">Guarulhos</option>
                    </select>


                    <div>
                        <i className='color-[#27303C] text-2xl' onClick={() => setShowquery(true)}>
                            <CiSearch />
                        </i>

                        {/*MODAL PESQUISA */}

                        {ShowQuery ?
                            <div className="w-full fixed inset-0 flex items-center justify-center bg-white ">
                                <div className="w-full bg-white p-4 rounded-md">
                                    <div className="w-full  flex flex-col justify-center items-center">
                                        <label htmlFor="">Pesquise o que <spa className='text-Primary'>você deseja</spa></label>
                                        <input type="text" className='border-b border-solid w-1/2 border-black text-center mt-2 focus:outline-none' />

                                    </div>
                                    <button className='fixed top-3 right-3' onClick={() => setShowquery(false)}>Fechar</button>
                                </div>
                            </div> : ''
                        }

                    </div>

                </nav>
            </header>
        </>
    );
}

export default Header;