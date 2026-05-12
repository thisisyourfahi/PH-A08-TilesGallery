import React from 'react';
import Marquee from 'react-fast-marquee';

const tilesName = [
    "Ceramic Blue Tile",
    "Porcelain White Marble Effect Tile",
    "Terracotta Floor Tile",
    "Glass Subway Tile Aquamarine",
    "Slate Natural Stone Tile",
    "Cement Encaustic Tile",
    "Limestone Honed Tile",
    "Porcelain Granite Effect Tile",
    "Ceramic Mosaic Tile Mixed Colors",
    "Vitreous Glass Tile Emerald",
    "Travertine Brushed Stone Tile",
    "Porcelain Wood Effect Tile",
    "Ceramic Zellige Tile Moroccan",
    "Porcelain Black Polished Tile",
    "Marble Hexagon Tile Natural White"
]

const ReactMarquee = () => {
    return (
        <div className='flex items-center gap-2 p-2 bg-slate-100'>
            <p className='bg-red-500 w-fit px-4 text-white font-semibold shrink-0'>New Arrivals</p>
           <Marquee pauseOnHover={true}>
                {
                    tilesName.map((tile, ind) => <p key={ind} className='mr-10'>{tile}</p>)
                }
           </Marquee>
        </div>
    );
};

export default ReactMarquee;