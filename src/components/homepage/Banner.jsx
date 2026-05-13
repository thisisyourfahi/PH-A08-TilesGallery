import Image from 'next/image';
import React from 'react';
import homeBanner from '@/assets/home_banner.jpg'
import Link from 'next/link';
import { Button } from '@heroui/react';

const Banner = () => {
    return (
        <div className='w-full relative rounded-xl overflow-hidden'>
            <div className='relative'>
                <Image
                    src={homeBanner}
                    width={800}
                    height={400}
                    alt='Aesthetic home'
                    className='w-full h-auto'
                />
                <div className='absolute inset-0 bg-black/50'></div>
            </div>
            <div className='absolute bottom-0 left-0 right-0 flex flex-col items-center justify-center pb-12 text-white'>
                <p className='text-xl md:text-3xl font-bold mb-4'>Discover Your Perfect Aesthetic</p>
                <Link href={'/all-tiles'}>
                    <Button size='sm'>Browse Now</Button>
                </Link>
            </div>
        </div>
    );
};

export default Banner;