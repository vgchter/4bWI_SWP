import React from 'react';
import Bottle from './bottle';
import Header from './Header';
import { useState } from 'react';

type Props = {}

export default function Bottlepage({}: Props) {
    const [Orders, setOrders] = useState(0);
    return (
        <div>
            <div className='sticky top-0'>
                <div>
                    <Header header={'VDRINK'} Orders={Orders}/>
                </div>
            </div>
            <div className='m-4 grid grid-cols-2 lg:grid-cols-3 grid-rows-9 gap-5'>
                <Bottle name={'Cola'} price={'2,50€'} amount={100} Orders={Orders} setOrders={setOrders} imgUri='https://www.coca-cola.com/content/dam/onexp/ch/de/brands/coca-cola/new-packshots-december-2024/transparent_background_cco_pet.png' />
                <Bottle name={'Sprite'} price={'2,50€'} amount={100} Orders={Orders} setOrders={setOrders} imgUri='https://www.coca-cola.com/content/dam/onexp/at/de/brands/fanta/fanta-orange-regular/fantaorange.png' />
                <Bottle name={'Fanta'} price={'2,50€'} amount={100} Orders={Orders} setOrders={setOrders} imgUri='https://www.coca-cola.com/content/dam/onexp/at/de/home-image/brand/sprite/de_au_sprite_750x750.jpg' />
                <Bottle name={'Eistee Pfirsich'} price={'2,50€'} Orders={Orders} setOrders={setOrders} amount={100} imgUri='https://images.cdn.europe-west1.gcp.commercetools.com/723b2575-66c7-4d92-ae49-82bf1d168d26/00-769866-158850772-h6FBUOw8.jpg' />
                <Bottle name={'Eiste Zitrone'} price={'2,50€'} Orders={Orders} setOrders={setOrders} amount={100} imgUri='https://images.cdn.europe-west1.gcp.commercetools.com/723b2575-66c7-4d92-ae49-82bf1d168d26/00-411166-1800348862-0FP-sxKJ.jpg' />
                <Bottle name={'Power Ade'} price={'2,50€'} Orders={Orders} setOrders={setOrders} amount={100} imgUri='https://www.coca-cola.com/content/dam/onexp/at/de/brands/powerade/powerade-mountain-blast/powerademountainblastsku.png' />
                <Bottle name={'RedBull'} price={'3€'} Orders={Orders} setOrders={setOrders} amount={100} imgUri='https://images.cdn.europe-west1.gcp.commercetools.com/723b2575-66c7-4d92-ae49-82bf1d168d26/00-768916-0161977304-oB8g000P.jpg' />
            </div>    
        </div>
    )
}