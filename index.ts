
const BOARD_ROWS = 32
const BOARD_COLS = BOARD_ROWS

type State = "alive" | "dead"

const board: Array<Array<State>> = []
for (let r = 0; r < BOARD_ROWS; ++r) {
    board.push(new Array(BOARD_COLS).fill("dead"))
}

const canvasId = "app"
const app = document.getElementById(canvasId) as HTMLCanvasElement
if (app === null) {
    throw new Error(`Could not found canvas ${canvasId}`)
}
app.width = 800
app.height = 800
const ctx = app.getContext("2d")
if (ctx === null) {
    throw new Error(`Could not initialize 2d context`)
}

const CELL_WIDTH = app.width/BOARD_COLS
const CELL_HEIGHT = app.height/BOARD_ROWS

function render () {
    if(!ctx) return
    
    ctx.fillStyle = "#202020"
    ctx.fillRect(0, 0, app.width, app.height)

    ctx.fillStyle = "red"
    for (let r = 0; r < BOARD_ROWS; ++r) {
        for (let c = 0; c < BOARD_COLS; ++c) {
            if (board[r][c] === "alive") {
                const x = c*CELL_WIDTH
                const y = r*CELL_HEIGHT
                ctx.fillRect(x, y, CELL_WIDTH, CELL_HEIGHT)
            }
        }
    }
}

app.addEventListener("click", (e) => {
    const col = Math.floor(e.offsetX/CELL_WIDTH)
    const row = Math.floor(e.offsetY/CELL_HEIGHT)
    board[col][row] = "alive"
    render()
})

render()



