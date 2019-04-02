const testName = "sharon"

document.querySelector("main#main").remove();

const newHeader = document.createElement('h1')
// h1 is header
// victory is the id
newHeader.id = "victory"
newHeader.innerText = "${testName} is the champion!"
newHeader.className = "victory";
