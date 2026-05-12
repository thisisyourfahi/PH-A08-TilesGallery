import { getAllTiles } from '@/lib/data-fetch';
import React from 'react';
import TileCard from '../shared/TileCard';



const FeaturedTiles = async () => {
    const allTiles = await getAllTiles();
    const tiles = allTiles.slice(0, 4);
    
    return (
        <div className='space-y-4'>
            <p className='text-3xl font-bold'>Featured Tiles</p>
            <div className='grid md:grid-cols-2 lg: grid-cols-4 gap-8'>
                {
                    tiles.map(tile => <TileCard key={tile.id} tile={tile}></TileCard>)
                }
            </div>
        </div>
    );
};

export default FeaturedTiles;