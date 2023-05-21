import { useParams } from "react-router-dom"

function ProductPage() {
    const { productId } = useParams()
    return (
        <>
            <div>main page.</div>
            <div>product id :{ productId }</div>
        </>
    )
}

export default ProductPage