import TileCard from "@/components/shared/TileCard";
import { getAllTiles } from "@/lib/data-fetch";
import { SearchField } from "@heroui/react";

const AllTilesPage = async () => {
    const allTiles = await getAllTiles();

    return (
        <div className='space-y-8'>
            <div className='text-center space-y-2 bg-slate-100 p-10 rounded-xl'>
                <h3 className='text-2xl md:text-3xl font-bold'>Tiles Gallery</h3>
                <p className='text-gray-500'>Looking for the best tiles in Bangladesh? Explore the exclusive Tiles Gallery tiles collection, designed to bring lasting beauty and strength to your home. From glossy finishes to rustic textures, our tiles in BD suit every space living room, kitchen, bathroom, or outdoor area. Choose from a wide range of ceramic and porcelain tiles that enhance your interiors with elegance and durability you can trust.</p>
            </div>

            <div className="space-y-4">
                <div className="flex justify-between">
                    <h3 className='text-2xl md:text-3xl font-bold'>All Tiles</h3>
                    <SearchField name="search">
                        <SearchField.Group>
                            <SearchField.SearchIcon />
                            <SearchField.Input className="w-[280px]" placeholder="Search by tiles name..." />
                            <SearchField.ClearButton />
                        </SearchField.Group>
                    </SearchField>
                </div>

                <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8 p-4 md:p-0'>
                    {allTiles.map(tile => <TileCard key={tile.id} tile={tile}></TileCard>)}
                </div>
            </div>
        </div>
    );
};

export default AllTilesPage;