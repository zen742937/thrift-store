import { useParams } from 'react-router-dom'

function ProductDetail(){
    const { id } = useParams()
    return (
        <div>
            <h1>商品詳細頁</h1>
            <p>商品 id: {id}</p>
        </div>
    )
}

export default ProductDetail