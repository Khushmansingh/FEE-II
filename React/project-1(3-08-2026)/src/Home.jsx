import About from "./About.jsx"
import Productcard from "./Productcard.jsx";
import Productcart from "./Productcard.jsx"

function Home() {
    const a = 10;
    const b = 20;

    const products = [
        {
            Name: "iPhone 17",
            desc: "Mobile Phone",
            stock: 1,
            price: "$199"
        },
        {
            Name: "Samsung S25",
            desc: "Mobile Phone",
            stock: 5,
            price: "$799"
        },
        {
            Name: "MacBook Air",
            desc: "Laptop",
            stock: 3,
            price: "$999"
        },
        {
            Name: "AirPods Pro",
            desc: "Wireless Earbuds",
            stock: 0,
            price: "$249"
        },
        {
            Name: "iPad Air",
            desc: "Tablet",
            stock: 7,
            price: "$599"
        }
    ];
    

    function greet(name){
        return "Welcome "+name
    }

    const fruits=['Mango','Apple','Banana'];

    const student = { name: "Khushman", age: 18 };
    return (
       <>
       <h1>Home Component</h1>
       <p>Sum of A and B = {a+b}</p>
       <span>{greet("Khushman").toUpperCase()}</span>
       <p>{fruits[0].toLocaleLowerCase()}</p>
        <br></br>
       <About/>
       <Productcart Name="Iphne17" desc="Mobile Phone" stock={1} price="$199"/>
       <Productcart Name="Samsung Galaxy s24fe" desc="Mobile Phone" stock="1" price="$2999"/>
       <Productcart Name="Sony Camera" desc="Photography item" stock="25" price="$89"/>
       <Productcart Name="LV Blue Jeans" desc="Clothing" stock="5" price="$19"/>
       
       
       
        <div>
       {fruits.map((fruit) => {
            return <li key="index">{fruit}</li>;
        })  }
        </div>
        <div>
        <p>=========================== Product cart with array data===========================</p>
        </div>

        {
            products.map((product)=>{
                return <Productcard {...product}/>
            })
        }



       </>

        
    );
}

export default Home;
