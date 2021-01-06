import { Product } from './types';

type Props = {
    products: Product;
}

function formatPrice (price: number){
    const formatter = new Intl.NumberFormat('pt-BR',{
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2

    })
    return formatter.format(price);
}


function ProductCard({ products}: Props){

    return(
        <div className="order-card-container">
            <h3 className="order-card-title">
                {products.name}
            </h3>
            <img src={products.imageUri} 
            className="order-card-image"
            alt={products.name}
            /> 
            <h3 className="order-card-price">
                {formatPrice(products.price)}
            </h3>
            <div className="order-card-description">
                <h3>Descrição</h3>
                <p>
                    {products.description}
                </p>
            </div>
        </div>
    )
}
export default ProductCard;