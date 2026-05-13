'use client';
import { authClient } from '@/lib/auth-client';
import { Avatar, Button } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React from 'react';
import { toast } from 'react-toastify';

const Navbar = () => {
    const d = authClient.useSession();
    const { data, isPending } = d;

    const user = data?.user;

    const logOut = async () => {
        await authClient.signOut()
        toast.success('You have successfully logged out.')
        redirect('/')
    }

    return (
        <div className='sticky top-0 z-50 bg-white flex flex-col md:flex-row gap-2 md:gap-0 items-center justify-between px-8 py-2 border-b border-b-gray-300 mb-10'>
            {/* left */}
            <div>
                {/* <Image src={'/public/logo.png'} width={30} height={30} alt='Tile Galler'></Image> */}
                <Link href={'/'} className='text-2xl'>Tiles Gallery</Link>
            </div>

            {/* center */}
            <div>
                <ul className='flex flex-row gap-4'>
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
            {
                isPending ? <span className="loading loading-ring loading-lg"></span> : user ? <div className='flex items-center gap-2'>
                    <Avatar>
                        <Avatar.Image className='object-cover' alt={user?.name} src={user?.image} />
                        <Avatar.Fallback className='text-xl'>{user?.name[0]}</Avatar.Fallback>
                    </Avatar>
                    <Button onClick={logOut} variant='danger' size='sm'>Log Out</Button>
                </div> :
                    <div className='flex gap-2'>
                        <Link href={'/login'}>
                            <Button size='sm' variant='secondary'>Login</Button>
                        </Link>
                        <Link href={'/register'}>
                            <Button size='sm' variant='secondary'>Register</Button>
                        </Link>
                    </div>
            }
        </div>
    );
};

export default Navbar;