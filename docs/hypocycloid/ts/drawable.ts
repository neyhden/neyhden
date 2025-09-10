/**
 * Pai lab 10
 * Lissajous curves
 *
 * @author Elías Hernández Abreu
 * @since 08 / 04 / 2024
 *
 * @file Drawable interface for drawing canvas objects
 */

export default interface Drawable {
  /**
  * Draws the current object to the context given
  * @param context The context to draw to
  */
  draw(context: CanvasRenderingContext2D): void;
}
