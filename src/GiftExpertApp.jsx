import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GiftExpertApp = () => {

    const [categories, setCategories] = useState(['Yu Yu Hakusho']);

    return (
        <>
            <h2>GiftExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr/>

            <button>Agregar</button>

            <ol>
                {
                    categories.map((category) =>
                        <GifGrid
                            category={category}
                            key={category}
                        />
                    )
                }
            </ol>
        </>
    )
}



