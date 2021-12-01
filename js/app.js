const matrix = document.querySelector("canvas");
const contex = matrix.getContext("2d");
const matrixArr = [0, 0, 1, 1, " "];
let arr = [];
let width = innerWidth;
let height = innerHeight;
let font = 11;
function addWidth() {
    matrix.width = innerWidth;
    matrix.height = innerHeight;
    width = innerWidth;
    height = innerHeight;

    let col = width / font;
    arr = [];
    for (let i = 0; i < col; i++) {
        arr[i] = 1;
    };
};
addWidth();

window.addEventListener("resize", addWidth);


function draw() {
    contex.fillStyle = "rgba(0, 0, 0, .05)";
    contex.fillRect(0, 0, width, height);

    contex.fillStyle = "#0f0";
    contex.font = font + "px system-ui";
    for (let i = 0; i < arr.length; i++) {
        let txt = matrixArr[Math.floor(Math.random() * matrixArr.length)];
        contex.fillText(txt, i * font, arr[i] * font);
        if (Math.random() > .975) arr[i] = 0;
        if (arr[i] * font > height && Math.random() > .975) arr[i] = 0;
        arr[i]++;
    };
};
setInterval(draw, 100);


// const requestURL = 'http://localhost:3000';

// function sendRequest(method, url, body) {
//     return new Promise((resolve, reject) => {
//         const xhr = new XMLHttpRequest();

//         xhr.open(method, url);

//         xhr.responseType = 'json';
//         xhr.setRequestHeader('Content-Type', 'application/json');

//         xhr.onload = () => {
//             if (xhr.status >= 400) reject(xhr.response)
//             else resolve(xhr.response);
//         };

//         xhr.onerror = () => reject(xhr.response);

//         xhr.send(JSON.stringify(body))
//     });
// };

// // sendRequest('GET', requestURL)
// //     .then(data => console.log(data))
// //     .catch(err => console.log(err))

// const body = {
//     name: 'Vladilen',
//     age: 26,
// }

// sendRequest('POST', requestURL, body)
//     .then(data => console.log(data))
//     .catch(err => console.log(err))

let user = {
    surname: 'Chekan',
    age: 25,
}
// !!!
async function getFact() {
    // let url = 'https://localhost:3000';
    let response = await fetch('/article/fetch/post/user', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(user),
    });

    let fact = await response.json();
    console.log(fact);
}


// let users = {};
// async function getFacts() {
//     let url = 'https://jsonplaceholder.typicode.com/users';
//     let response = await fetch(url);
//     users = await response.json();
// }
// getFacts();
// console.log(users);

document.querySelector(".btn").addEventListener("click", getFact);