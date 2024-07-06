setTimeout(function () {
    alert("Hello World");
}, 2000);

setTimeout(function () {
    let container = document.getElementById("container");
    let newParagraph = document.createElement("p");
    newParagraph.innerHTML = "Hello World";
    container.appendChild(newParagraph);
}, 2000);

let intervalid = setInterval(function () {
    let container = document.getElementById("container");
    let newParagraph = document.createElement("p");
    newParagraph.innerHTML = "Hello World";
    container.appendChild(newParagraph);

    if (container.getElementsByTagName("p").length >= 5) {
        clearInterval(intervalid);
    }
}, 2000);

document.getElementById("clear").addEventListener("click", function () {
    clearInterval(intervalid);
});