import { Button } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <div className='flex items-center justify-between px-8 py-2 border-b border-b-gray-300 mb-10'>
            {/* left */}
            <div>
                {/* <Image src={'/public/logo.png'} width={30} height={30} alt='Tile Galler'></Image> */}
                <Link href={'/'} className='text-2xl'>Tiles Gallery</Link>
            </div>

            {/* center */}
            <div>
                <ul className='flex gap-4'>
                    <li>
                        <Link href={'/'}>Home</Link>
                    </li>
                    <li>
                        <Link href={'/all-tiles'}>All Tiles</Link>
                    </li>
                    <li>
                        <Link href={'/my-profile'}>My Profile</Link>
                    </li>
                </ul>
            </div>

            {/* right has to dynamic */}
            <div className='flex gap-4'>
                <Link href={'/login'}>
                    <Button size='sm' variant='secondary'>Login</Button>
                </Link>
                <Link href={'/register'}>
                    <Button size='sm' variant='secondary'>Register</Button>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;