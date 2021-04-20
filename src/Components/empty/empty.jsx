import { Link } from 'react-router-dom';
import empty from './empty.module.css';

export const Empty = props => {

    return(
        <section className={empty.area}>
            <h1 className={empty.title}>Meu carrinho</h1>
            <div className={empty.content}>
                <article>
                    <h2 className={empty.titleMessage}> Seu carrinho está vazio</h2>
                    <p className={empty.message}>Aproveite agora nossas promoções!</p>
                    <Link className={empty.button} to="/">COMEÇAR A COMPRAR AGORA</Link>
                </article>
            </div>
        </section>
    )
}