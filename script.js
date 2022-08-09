let box = document.querySelector('.textBox');
let text = [
    'Welcome to Cubight Game Luncher !!!',
    'Play now in your browser',
    'For 0$'
]
let idx = 0
let time = 1

for (let i=0; i<text.length; i++) {
    let p_html = document.createElement("p");
    box.appendChild(p_html)
}

document.querySelectorAll('.textBox p').forEach(el => {
    setTimeout(() => {
        el.innerHTML = text[idx]
        el.style.animation = 'slowText 2s normal'
        idx += 1
    }, time*1000);
    time += 1
});


let disibleSmallNavBool = false;

function disibleSmallNav() {
    if (window.innerWidth < 963) {
        if (disibleSmallNavBool) {
            disibleSmallNavBool = false;
            let nav = document.getElementById('smallNav')
            nav.style.display = 'none';
        }
        else {
            disibleSmallNavBool = true
            let nav = document.getElementById('smallNav')
            nav.style.display = 'block';
        }
        
    }
}
