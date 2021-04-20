import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import abstract from './abstract.module.css';

export const Abstract = props => {

    const subtotal = useSelector(state => state.product.items);

    const realTotal = subtotal.map(el => el.optionsProduct.realTotal)
    const baseCalc = subtotal.map(el => el.optionsProduct.baseCalc)
    const discountTotal = subtotal.map(el => el.optionsProduct.discountTotal)
    
    const sumTotal  = baseCalc.reduce((sum, val) => (sum + val), 0).toFixed(2)
    const sumTotalDiscount  = discountTotal.reduce((sum, val) => (sum + val), 0).toFixed(2)
    const sumDiscount  = realTotal.reduce((sum, val) => (sum + val), 0).toFixed(2)

    const allDiscount = (sumDiscount - sumTotal).toFixed(2);
    const allTotal = (sumDiscount - allDiscount).toFixed(2);
    const allDisc = (sumTotalDiscount - allTotal).toFixed(2);   

    return(
        <section className={abstract.area}>
            <h2 className={abstract.title}>Resumo</h2>
            <div className={abstract.box}>
                <div className={abstract.resume}>
                    <p>Subtotal:</p>
                    <p>R$ {sumTotalDiscount}</p>
                </div>
                <div className={abstract.resume}>
                    <p>Desconto:</p>
                    <p>R$ {allDisc}</p>
                </div>
                <div className={abstract.total}>
                    <h3 className={abstract.index}>Total</h3>
                    <h3 className={abstract.value}>R$ {allTotal}</h3>
                </div>
            </div>
            <Link to="/" className={abstract.btnContinue}>
                <svg fill="#F08D06" viewBox="0 0 530.003 500.003" width="25"><g><path d="m503.995 105.373c-6.868-8.498-17.076-13.371-28.004-13.371h-390.254l-3.485-24.976c-2.468-17.686-17.796-31.024-35.655-31.024h-30.597c-8.836 0-16 7.164-16 16s7.164 16 16 16h30.597c1.984 0 3.688 1.482 3.961 3.447l43.189 309.529c2.468 17.687 17.796 31.024 35.655 31.024h17.349c-1.776 5.008-2.752 10.391-2.752 16 0 26.467 21.533 48 48 48s48-21.533 48-48c0-5.609-.976-10.992-2.752-16h85.504c-1.776 5.008-2.752 10.391-2.752 16 0 26.467 21.533 48 48 48s48-21.533 48-48c0-5.609-.976-10.992-2.752-16h34.753c8.836 0 16-7.164 16-16s-7.164-16-16-16h-318.597c-1.984 0-3.688-1.482-3.961-3.447l-3.984-28.553h315.102c16.858 0 31.663-11.965 35.205-28.458l39.429-183.997c2.291-10.681-.333-21.679-7.199-30.174zm-295.995 322.629c0 8.822-7.178 16-16 16s-16-7.178-16-16 7.178-16 16-16 16 7.177 16 16zm176 0c0 8.822-7.178 16-16 16s-16-7.178-16-16 7.178-16 16-16 16 7.177 16 16zm95.905-299.163-39.428 183.993c-.394 1.836-2.042 3.169-3.917 3.169h-319.568l-26.79-192h385.788c1.583 0 2.569.808 3.117 1.486.547.677 1.129 1.808.798 3.352z"/></g></svg>
                Continuar Comprando
            </Link>
            <button className={abstract.btnFinal}>Finalizar Pedido</button>
        </section>
    )
}