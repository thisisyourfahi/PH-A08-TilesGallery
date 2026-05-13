import { Button, Card, Chip } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const TileDetailsCard = ({ tile }) => {
    return (
        <div>
            <Card className='md:w-1/2 mx-auto'>
                <div className='relative w-full aspect-square'>
                    <Image src={tile.image} alt={tile.title} fill className='object-cover rounded-xl' ></Image>
                    <Chip size='sm' className='absolute right-2 top-2'>{tile.category}</Chip>
                </div>
                <h3 className='text-xl font-bold'>{tile.title}</h3>
                <div>
                    <p><span className='font-bold'>Description: <br /> </span>{tile.description}</p>
                </div>
                <div className='flex justify-between'>
                    <p><span className='font-bold'>Price: </span>${tile.price}</p>
                    <p><span className='font-bold'>Dimension: </span>{tile.dimensions}</p>
                </div>
                <div className='flex  justify-between'>
                    <div className='space-x-4'>
                        <Link href={`/all-tiles`}>
                            <Button size='sm' className={'flex-1'}>All Tiles</Button>
                        </Link>
                        <Link href={`/`}>
                            <Button size='sm' className={'flex-1'}>Home</Button>
                        </Link>
                    </div>
                    <div>
                        <Link href={`/buy-now/${tile.id}`}>
                            <Button size='sm'>Buy Now</Button>
                        </Link>
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default TileDetailsCard;