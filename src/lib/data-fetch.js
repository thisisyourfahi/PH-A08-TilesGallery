export const getAllTiles = async () => {
    const res = await fetch('https://ph-a08-tiles-gallery.vercel.app/data.json')
    return res.json();
}