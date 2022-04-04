//jumpotron header
const text = document.getElementById('jumbotron-header');
const prog = 'Film Genres';
let idx = 1;

setInterval(writeText, 100);

function writeText() {
    text.innerText = prog.slice(0, idx);
    idx++;
    /*
    if(idx > prog.length) {
        idx = 1;
    } */
}

//theme changer
const checkbox = document.getElementById('checkbox');
checkbox.addEventListener('click', () => {
    document.body.classList.toggle('dark');
});