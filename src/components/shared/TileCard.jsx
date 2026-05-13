import { Button, Card, Chip } from '@heroui/react';
import { CircleCheckFill } from '@gravity-ui/icons';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

const TileCard = ({ tile }) => {
    return (
        <Card className='rounded-xl'>
            <div className='relative w-full aspect-square overflow-hidden rounded-xl'>
                <Image
                    src={tile.image}
                    alt={tile.title}
                    fill
                    className='object-cover'
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <Chip size='sm' className='absolute right-2 top-2'>{tile.category}</Chip>
            </div>
            <div className='space-y-1 flex-1'>
                <h3 className='text-xl font-bold'>{tile.title}</h3>
                <p>Dimension: {tile.dimensions}</p>
            </div>
            <Link href={`/all-tiles/${tile.id}`}>
                <Button variant='outline' className={'w-full'}>View Details</Button>
            </Link>
        </Card>
    );
};

export default TileCard;