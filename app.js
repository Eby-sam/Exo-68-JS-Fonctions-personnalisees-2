let para = document.getElementsByTagName('p');

function randomize() {
    return Math.trunc(Math.random()*100);
}


let i = 0;
while (i < 10) {
    para[i].innerHTML = randomize().toString();
    i++;
}