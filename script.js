function draw(){

    function generateBoard(n) {
        let drawBoard = document.querySelector('.draw-board');
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

    let button8 = document.querySelector('#8')
    let button16 = document.querySelector('#16')
    let button32 = document.querySelector('#32')
    let button64 = document.querySelector('#64')

    button8.addEventListener('click', function(e) {
        let drawBoard = document.querySelector('.draw-board');
        while(drawBoard.firstChild) {
            drawBoard.firstChild.remove()
        }
        generateBoard(e.target.textContent)
    })
}