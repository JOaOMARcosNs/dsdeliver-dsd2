import { formatPrice } from './helpers';
import { Product } from './types';

type Props = {
    products: Product;
    onSelectProduct: (product: Product) => void;
    isSelect: boolean;
}




function ProductCard({ products, onSelectProduct , isSelect }: Props){

    return(
        <div 
            className={`order-card-container ${isSelect ? 'selected' : ''}`}
            onClick={() => onSelectProduct(products)}
        >
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