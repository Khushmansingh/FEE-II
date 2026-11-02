import { useState } from "react";

function useCounter(initial_count){
    const [count , setCount] = useState(initial_count);

    function increment(){
        setCount(count+1);
    }

    function decrement(){
        if(count>0){
            setCount(count-1);
        }else{
            alert("Value cannot go in Negative");
        }
        
    }

    function reset(){
        if(count!=initial_count){
            setCount(initial_count);
        }else{
            alert("The Value is Already at its Default");
        }
        
    }

    return [count,increment,decrement,reset];
}

export default useCounter;