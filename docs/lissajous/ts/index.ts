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
import Drawable from './drawable.js';
import Updatable from './updatable.js';
import UpdateServer from './update-server.js';
import View from './view.js';
import Lissajous from './lissajous-curves.js'
import Grid from './grid.js';

function main() {
  let lissajous: Lissajous = new Lissajous() 
  const ITEMS_TO_DRAW: Drawable[] = [
    new Background('white'),
    new Grid(),
    lissajous
  ];
  const CANVAS: HTMLCanvasElement = document.getElementById('canvas') as HTMLCanvasElement;
  const CONTEXT: CanvasRenderingContext2D = CANVAS.getContext('2d') as CanvasRenderingContext2D;
  const ITEMS_TO_UPDATE: Updatable[] = [
    lissajous,
    new View(ITEMS_TO_DRAW, CONTEXT)
  ];
  new UpdateServer(ITEMS_TO_UPDATE);
}

main();
