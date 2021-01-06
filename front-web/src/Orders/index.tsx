import { useEffect, useState } from 'react';
import StepsHeader from './StepsHeader';
import ProductsList from './ProductsList';
import './styles.css';
import { Product } from './types';
import { fetchProducts } from '../api';

function Orders(){
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        fetchProducts()
        .then(response =>setProducts(response.data))
        .catch(error => console.log(error));
        
    }, []);

    return(
        <div className="orders-container">
            <StepsHeader/>
            <ProductsList products={products} />
        </div>
    )
}

export default Orders;