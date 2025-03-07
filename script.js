let ask = prompt("Ismingizni kiriting");
let bodyTag = document.querySelector("body");

bodyTag.style.cssText = `
display:flex;
align-items:center;
justify-content:center;
background: greenyellow;
height:100vh;

`;
let name1 = document.createElement("h1");
name1.innerText = ask;
name1.style.cssText = `
color: blue;
text-align:center;
`;
bodyTag.appendChild(name1);
