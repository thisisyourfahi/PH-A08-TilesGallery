import { getAllTiles } from '@/lib/data-fetch';
import React from 'react';
import TileDetailsCard from './TileDetailsCard';

const TileDetailsPage = async ({ params }) => {
    const paramsRes = await params;
    const id = paramsRes.id;

    const alltiles = await getAllTiles();
    const tile = alltiles.find(tile => tile.id == id);

    return (
        <div className='space-y-4'>
            <h3 className='text-2xl md:text-3xl font-bold text-center'>Tile Details Page</h3>
            <TileDetailsCard tile={tile}></TileDetailsCard>
        </div>
    );
};

export default TileDetailsPage;