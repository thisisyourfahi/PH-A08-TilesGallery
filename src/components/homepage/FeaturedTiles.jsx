import { getAllTiles } from '@/lib/data-fetch';
import React from 'react';
import TileCard from '../shared/TileCard';



const FeaturedTiles = async () => {
    const allTiles = await getAllTiles();
    const tiles = allTiles.slice(0, 4);
    
    return (
        <div>
            <p className='text-2xl font-bold'>Featured Tiles</p>
            <div className='grid md:grid-cols-2 lg: grid-cols-4'>
                {
                    tiles.map(tile => <TileCard key={tile.id} tile={tile}></TileCard>)
                }
            </div>
        </div>
    );
};

export default FeaturedTiles;