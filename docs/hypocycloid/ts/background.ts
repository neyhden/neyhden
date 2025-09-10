/**
 * Pai lab 10
 * Lissajous curves
 *
 * @author Elías Hernández Abreu
 * @since 08 / 04 / 2024
 *
 * @file Draws a solid box on the entire context
 */

import Drawable from './drawable.js';

export default class Background implements Drawable {
  /**
  * @constructor The constructor
  * @param COLOR The color of the background
  */
  constructor(private readonly COLOR: string) {}

  /**
  * Draws the current object to the context given
  * @param context The context to draw to
  */
  public draw(context: CanvasRenderingContext2D): void {
    context.fillStyle = this.COLOR;
    context.fillRect(0, 0, context.canvas.width, context.canvas.height);
  }
}
