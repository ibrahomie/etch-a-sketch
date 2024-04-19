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

    const button8 = document.querySelector('#s8');
    const button16 = document.querySelector('#s16');
    const button32 = document.querySelector('#s32');
    const button64 = document.querySelector('#s64');

    function changeBoardSize(e) {
        const drawBoard = document.querySelector('.draw-board');
        while(drawBoard.firstChild) {
            drawBoard.firstChild.remove()
        }
        generateBoard(e.target.textContent);
        const items = document.getElementsByClassName('item')
        for (const item of items) {
            item.addEventListener('mousedown', changeColor);
        }
    }
    
    button8.addEventListener('click', changeBoardSize)
    button16.addEventListener('click', changeBoardSize)
    button32.addEventListener('click', changeBoardSize)
    button64.addEventListener('click', changeBoardSize)


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