import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { supabase } from '../supabaseClient'

const CONDITION_TEXT = {
    S: "全新未使用",
    A: "近新品(幾乎無瑕疵或使用痕跡)",
    B: "有使用痕跡",
    C: "有使用痕跡，少量瑕疵",
    D: "有使用痕跡及明顯瑕疵",
}

function ProductDetail(){
    const { id } = useParams()
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)
    const [selectedIndex, setSelectedIndex] = useState(0)
    
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
            <p>分類: {product.category}</p>      
            <img
              className="detailMainImage"
              src={product.images[selectedIndex]}
              alt={product.name}
            />
            <div className="detailThumbs">
                {product.images.map((url, index) => (
                    <img
                    className={index === selectedIndex ? "detailThumb isActive" : "detailThumb"}
                    key={index}
                    src={url}
                    onClick={() => setSelectedIndex(index)}
                    alt=""
                    />
                ))}
            </div>
            <p>{product.brand} | {product.name}</p>           
            <p>尺寸: {product.size}</p>
            <p>商品狀況: {product.condition} - {CONDITION_TEXT[product.condition]}</p>
            <p>NT${product.price}</p>
            
        </div>
    )
}



export default ProductDetail