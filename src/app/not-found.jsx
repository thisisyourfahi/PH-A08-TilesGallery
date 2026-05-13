import { Button } from '@heroui/react';
import Link from 'next/link';
import React from 'react';

const NotFoundPage = () => {
    return (
        <div className='p-10 flex justify-center items-center'>
            <div className='flex flex-col justify-center items-center gap-2 mt-20'>
                <h1 className='text-7xl font-bold text-red-600'>404</h1>
                <h2 className='text-xl md:text-3xl '>Page is not Found!</h2>
                <Link href={'/'}>
                    <Button size='sm' variant='secondary'>Home</Button>
                </Link>
            </div>
        </div>
    );
};

export default NotFoundPage;