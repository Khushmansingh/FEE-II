let url="https://official-joke-api.appspot.com/random_joke"
const result=fetch(url);
const setup = document.querySelector(".setup");
const punchline = document.querySelector(".punchline");
// result.then((data)=>{ return data.json()
// }).then((da)=>{
//     console.log(da);
// }).catch((error)=>{
//     console.log(error);
// });


// data.then((data)=>{
//     console.log(data);
//     return data.json();
// }).catch((error)=>{
//     console.log(error);
// });


async function getjokes() {
    const data = await fetch(url);
    const original = await data.json();
    console.log(original);
    setup.textContent
}

// task