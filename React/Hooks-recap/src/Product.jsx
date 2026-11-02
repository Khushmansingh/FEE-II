import useApi from "./useApi";
function Product() {
    const [data,loading] = useApi("https://dummyjson.com/products");


    if(loading){
        <p>Loading...</p>
    }else{

        return (
            <>
                <h1>Product Component</h1>

                <ol>
                    {data?.products?.map((product) => (
                        <li key={product.id}>{product.title} <span>IS $</span> {product.price}</li>
                    ))}
                </ol>
            </>
        );
    }

}

export default Product