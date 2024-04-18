import React from 'react';
import { IoHomeOutline } from "react-icons/io5";
import { CiMap } from "react-icons/ci";
import { IoMdMenu } from "react-icons/io";
import { CgNotes } from "react-icons/cg";
import { FaRegStar } from "react-icons/fa";

import { CiHeart } from "react-icons/ci";



function Footer(props) {
    return (
        <footer className='w-full fixed bottom-0 bg-white flex justify-around p-5 text-xl'>


            <i className='text-Primary'>
                <IoHomeOutline />

            </i>

            <i>
                <CiMap />

            </i>

            <i>
                <CgNotes />

            </i>

            <i>
                <FaRegStar />


            </i>


            <i>
                <CiHeart />

            </i>

            <i>
                <IoMdMenu />

            </i>

        </footer>
    );
}

export default Footer;