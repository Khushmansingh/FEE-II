import "./productcard.css"

function Productcard(props){
    return(
        <>

        <div id="prductdiv" style={{border:"2px dotted purple", width:"290px", height:"160px", margin:"10px"}}>
            <p>Product Name : {props.Name} </p>
            <p>Product Description: {props.desc}</p>
            <p>Stock : {props.stock}</p>
            <p>Price: {props.price}</p>
            <p>Availability: { props.stock > 0 ? "InStock" : "Out of Stock" }</p>
            <button>Buy Now</button>
            <button>Add to Cart</button>
        </div>
        
        </>
    )
}

export default Productcard;