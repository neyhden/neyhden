/**
 * Pai lab 10
 * Lissajous curves
 *
 * @author Elías Hernández Abreu
 * @since 08 / 04 / 2024
 *
 * @file Entry point to the program
 */
import Background from './background.js';
import UpdateServer from './update-server.js';
import View from './view.js';
import Lissajous from './lissajous-curves.js';
import Grid from './grid.js';
function main() {
    let lissajous = new Lissajous();
    const ITEMS_TO_DRAW = [
        new Background('white'),
        new Grid(),
        lissajous
    ];
    const CANVAS = document.getElementById('canvas');
    const CONTEXT = CANVAS.getContext('2d');
    const ITEMS_TO_UPDATE = [
        lissajous,
        new View(ITEMS_TO_DRAW, CONTEXT)
    ];
    new UpdateServer(ITEMS_TO_UPDATE);
}
main();
