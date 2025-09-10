/**
 * Pai lab 10
 * Lissajous curves
 *
 * @author Elías Hernández Abreu
 * @since 08 / 04 / 2024
 *
 * @file Grid on the canvas
 */

import Drawable from "./drawable.js";

export default class Grid implements Drawable{
  /**
   * @constructor
   * Builds a grid
   */
  constructor() {}

  /**
   * Draws something on a canvas context
   * @param context The context to draw this in
   */
  public draw(context: CanvasRenderingContext2D): void {
    const PIXELS_PER_UNIT: number = 50;
    const WIDTH: number = context.canvas.width;
    const HEIGHT: number = context.canvas.height;
    const CENTER_LINES_WIDTH: number = 1;
    const LINE_WIDTH: number = 1;
    const LINE_DASH: number[] = [5, 5];
    const FONT: string = '12px Arial';
    const NUMBER_PADDING = 4;

    context.strokeStyle = 'gray';
    context.lineWidth = CENTER_LINES_WIDTH;
    context.beginPath();
    context.moveTo(WIDTH / 2, 0);
    context.lineTo(WIDTH / 2, HEIGHT);
    context.moveTo(0, HEIGHT / 2);
    context.lineTo(WIDTH, HEIGHT / 2);
    context.closePath();
    context.stroke();

    context.lineWidth = LINE_WIDTH;
    context.setLineDash(LINE_DASH);
    context.font = FONT;
    context.beginPath()
    for (let verticalLine: number = 1; verticalLine < WIDTH / PIXELS_PER_UNIT; verticalLine++) {
      context.moveTo(PIXELS_PER_UNIT * verticalLine, 0);
      context.lineTo(PIXELS_PER_UNIT * verticalLine, HEIGHT);
      context.moveTo(-PIXELS_PER_UNIT * verticalLine, 0);
      context.lineTo(-PIXELS_PER_UNIT * verticalLine, HEIGHT);
      context.fillText(verticalLine.toString(), WIDTH / 2 + NUMBER_PADDING + PIXELS_PER_UNIT * verticalLine, HEIGHT / 2 - NUMBER_PADDING);
    }
    for (let horizontalLine: number = 1; horizontalLine < HEIGHT / PIXELS_PER_UNIT; horizontalLine++) {
      context.moveTo(0, PIXELS_PER_UNIT * horizontalLine);
      context.lineTo(WIDTH, PIXELS_PER_UNIT * horizontalLine);
      context.moveTo(0, -PIXELS_PER_UNIT * horizontalLine);
      context.lineTo(WIDTH, -PIXELS_PER_UNIT * horizontalLine);
      context.fillText(horizontalLine.toString(), WIDTH / 2 + NUMBER_PADDING, HEIGHT / 2 - PIXELS_PER_UNIT * horizontalLine - NUMBER_PADDING);
    }
    context.closePath();
    context.stroke();
  }
}
