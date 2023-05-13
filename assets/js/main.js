const menu = document.querySelectorAll(".menu .flower");
const img = document.querySelectorAll(".flw");
menu.forEach (clck => {
    clck.addEventListener('click', () => {
        const type = clck.getAttribute('flower-type');
        img.forEach( col => {
            if (col.getAttribute('class').includes(type)) {
                col.style.display = '';
            } else {
                col.style.display = 'none';
            }
        })
    })
})