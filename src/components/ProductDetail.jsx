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

    const discount = Math.round((1 - product.price / product.original_price) * 100 )

    return (
        <div className="detailPage">
            <Link to="/" className="backLink">← back to home page</Link>
            
            <div className="detailLayout">
                <div className="detailGallery">
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
                </div>

                <div className="detailInfo">
                    <h2 className="detailBrand">{product.brand}</h2> 
                    <h1 className="detailName">{product.name}</h1>    
                    <div className="detailPriceBox">
                        <span className="detailPrice">NT${product.price.toLocaleString()}</span>
                        {product.original_price && <>
                            <span className="detailOriginalPrice">官網售價 NT${product.original_price.toLocaleString()}</span>
                            <span className="detailDiscount">{discount}% off</span>
                        </>}    
                    </div>
                    <p className="detailSize">Size: {product.size}</p>
                    <p className="detailCondition">Condition: {product.condition} - {CONDITION_TEXT[product.condition]}</p>
                    <p className="detailDescription">{product.description}</p>
                    
                </div>
            </div>
        </div>
    )
}



export default ProductDetail