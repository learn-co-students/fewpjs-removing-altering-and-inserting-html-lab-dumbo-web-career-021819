document.querySelector('#main').remove();
let body = document.querySelector('body');
let newHeader = document.createElement('h1');
newHeader.id = 'victory';
newHeader.innerText = 'is the champion';
body.append(newHeader);
