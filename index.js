// Write your code here!
let toRemove = document.querySelector('main')
toRemove.remove()

let newHeader = document.createElement("h1")

newHeader.className = "H1"
newHeader.innerText = 'Will is the champion'
document.body.appendChild(newHeader)
newHeader.id = "victory"
// var image = document.createElement("img");
// image.src = "http://www.google.com/intl/en_com/images/logo_plain.png";
// // var p = document.createElement("p");
// // document.body.appendChild(image)
// let headerOne = document.querySelector('h1')
// console.log(headerOne)

// document.body.appendChild(image)


// let randomNumberBetween400and600 = 400 + Math.floor(Math.random() * 200);
// let randomNumberBetween600and800 = 600 + Math.floor(Math.random() * 200);
// document.body.innerHTML += `<img src="https://www.fillmurray.com/${randomNumberBetween400and600}/${randomNumberBetween600and800}
// " />`