import About from "./About.jsx"

function Home() {
    const a = 10;
    const b = 20;

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
       </>

    );
}

export default Home;
