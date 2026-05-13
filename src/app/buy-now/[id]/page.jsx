import { Button } from '@heroui/react';
import Link from 'next/link';
import React from 'react';

const BuyNowPage = () => {
    return (
        <div className='p-10 flex justify-center items-center'>
            <div className='flex flex-col justify-center items-center gap-2 mt-20'>
                <h2 className='text-xl md:text-3xl '>Page is under construction!</h2>
                <Link href={'/'}>
                    <Button size='sm' variant='secondary'>Home</Button>
                </Link>
            </div>
        </div>
    );
};

export default BuyNowPage;