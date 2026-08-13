function start() {
    let result = document.getElementById("result");
    let count = 0;

    let interval = setInterval(() => {
        result.innerText = count;
        count++;
    }, 1000);
}