import useApi from "./useApi";

function Dadjokes(){

    const [data,loading] = useApi("https://api.api-ninjas.com/v1/dadjokes");


    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <>
            <h1>Dad Jokes</h1>

            <ol>
                {data?.map((joke, index) => (
                    <li key={index}>{joke.joke}</li>
                ))}
            </ol>
        </>
    );

}

export default Dadjokes;