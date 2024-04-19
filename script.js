function draw(){

    function generateBoard(n) {
        const drawBoard = document.querySelector('.draw-board');
        for (let i = 0; i < n; i++) {
            let container = document.createElement('div');
            container.className = 'container';
            for (let i = 0; i < n; i++) {
                let item = document.createElement('div');
                item.className = 'item';
                container.appendChild(item);
            }
            drawBoard.appendChild(container);
        }
    }

    generateBoard(8);

    let button8 = document.querySelector('#s8');
    let button16 = document.querySelector('#s16');
    let button32 = document.querySelector('#s32');
    let button64 = document.querySelector('#s64');

    button8.addEventListener('click', function(e) {
        let drawBoard = document.querySelector('.draw-board');
        while(drawBoard.firstChild) {
            drawBoard.firstChild.remove()
        }
        generateBoard(e.target.textContent);
        const items = document.getElementsByClassName('item')
        for (const item of items) {
            item.addEventListener('mousedown', changeColor);
        }
    })

    button16.addEventListener('click', function(e) {
        const drawBoard = document.querySelector('.draw-board');
        while(drawBoard.firstChild) {
            drawBoard.firstChild.remove()
        }
        generateBoard(e.target.textContent);
        const items = document.getElementsByClassName('item')
        for (const item of items) {
            item.addEventListener('mousedown', changeColor);
        }
    })

    button32.addEventListener('click', function(e) {
        const drawBoard = document.querySelector('.draw-board');
        while(drawBoard.firstChild) {
            drawBoard.firstChild.remove()
        }
        generateBoard(e.target.textContent);
        const items = document.getElementsByClassName('item')
        for (const item of items) {
            item.addEventListener('mousedown', changeColor);
        }
    })

    button64.addEventListener('click', function(e) {
        const drawBoard = document.querySelector('.draw-board');
        while(drawBoard.firstChild) {
            drawBoard.firstChild.remove()
        }
        generateBoard(e.target.textContent);
        const items = document.getElementsByClassName('item')
        for (const item of items) {
            item.addEventListener('mousedown', changeColor);
        }
    })


    const items = document.getElementsByClassName('item');
    for(const item of items) {
        item.addEventListener('mousedown', changeColor)
    }

    function changeColor(e) {
        const color = document.querySelector('#color');
        e.target.style.backgroundColor = color.value;
        e.target.style.outline = 'none'
    }
}

draw()