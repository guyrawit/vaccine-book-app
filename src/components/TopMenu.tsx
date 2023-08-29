import styles from './topmenu.module.css'
import Image from 'next/image';
import React from 'react';  
import TopMenuItem from './TopMenuItem';
import Link from 'next/link';

export default function TopMenu() {
      return (
        <div className="flex justify-end flex-nowrap bg-gray-800 text-white">
            <div className="p-5 space-x-5 items-center text-lg" >
                <TopMenuItem title="Home" pageRef="/" />
                <TopMenuItem title="About" pageRef="#" />
                <TopMenuItem title="Booking" pageRef="/booking" />
            </div>
            <div className="flex-none items-center py-5 pr-5 pl-3 font-bold">
                <Link href="/" className="text-2xl">Vaccine app <i className="fa-solid fa-syringe"></i></Link>
            </div>
      </div>
      );
    };
    
    