import { useEffect, useState } from 'react';
import { Cards } from '../cards/Cards';
import { urlProducts } from '../api';
import { useParams } from 'react-router-dom';

export const Filter = props => {
    let { category } = useParams();
    const [products, setProducts] = useState([]);
    useEffect(
        () => {
            fetch(`${urlProducts}?category=${category}`, {method:`GET`})
                .then(data => data.json())
                .then(res => setProducts(res))
        }, [category]
    )

    return(
        <>
             <h1 className="title">Produtos - {category}</h1>
             <h2 className="subTitle">Promoções em destaque</h2>
             <section className="containerPromotions">
               { products.map((el, idx) => <Cards 
                                                 key={idx}
                                                id={el.id}
                                                promotion={el.promotion} 
                                                image={el.image} 
                                                title={el.title} 
                                                price={el.price} 
                                                discount={el.discount} />
                            )}
            </section>
        </>
    )
}
















// import { useEffect, useState } from 'react';
// import { urlShoes } from '../api';
// import { Cards } from '../cards/Cards';

// export const Shoes = props => {
//     const [products, setProducts] = useState([]);
//     useEffect(
//         () => {
//             fetch(urlShoes, {method:`GET`})
//                 .then(data => data.json())
//                 .then(res => setProducts(res))
//         }, []
//     )

//     return (
//         <>
//             <h1 className="title">Produtos</h1>
//             <h2 className="subTitle">Promoções em destaque</h2>
//             <section className="containerPromotions">
//                 { products.map((el, idx) => <Cards 
//                                                 key={idx}
//                                                 id={el.id}
//                                                 promotion={el.promotion} 
//                                                 image={el.image} 
//                                                 title={el.title} 
//                                                 price={el.price} 
//                                                 discount={el.discount} />
//                             )}
//             </section>
//         </>
//     )
// }