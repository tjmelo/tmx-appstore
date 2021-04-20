import { useEffect, useState } from 'react';
import { urlProducts } from '../api';
import { Cards } from '../cards/Cards';

export const Promotions = () => {
   
    const [products, setProducts] = useState([]);
    useEffect(
        () => {
            fetch(urlProducts, {method:`GET`})
                .then(data => data.json())
                .then(res => setProducts(res))
        }, []
    )

    return(
        <section className="containerPromotions">
            { products.map((el, idx) => <Cards
                                            key={idx}
                                            id={el.id}
                                            image={el.image} 
                                            promotion={el.promotion} 
                                            title={el.title} 
                                            price={el.price} 
                                            discount={el.discount} />
                        )}
        </section>
    )
}