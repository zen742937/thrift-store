import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { supabase } from '../supabaseClient'

function ProductDetail(){
    const { id } = useParams()
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        async function loadProduct(){
            const {data} = await supabase.from('products').select('*').eq('id', id).single();
            setProduct(data);
            setLoading(false);
        }
        loadProduct();
    },[id])

    if (loading) return <p>Loading…</p>
    if (!product) return <p>找不到這件商品</p>

    return (
        <div>
            <Link to="/">back</Link>       
            <img src={product.image} alt={product.name} />
            <p>{product.brand}</p>           
            <h1>{product.name}</h1>
            <p>NT${product.price}</p>
        </div>
    )
}

export default ProductDetail