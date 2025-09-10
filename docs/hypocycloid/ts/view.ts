/**
 * Pai lab 10
 * Lissajous curves
 *
 * @author Elías Hernández Abreu
 * @since 08 / 04 / 2024
 *
 * @file Class that renders the objexts to the canvas
 */

import Drawable from './drawable.js';
import Updatable from './updatable.js';

export default class View implements Updatable {
  /**
   * @constructor
   * @param ITEMS_TO_DRAW The items to be displayed by the view
   */
  public constructor(
      private readonly ITEMS_TO_DRAW: Drawable[],
      private readonly CONTEXT: CanvasRenderingContext2D) {}

  /**
  * Renders the view on a rendering context
  * @param context The rendering context to render on
  */
  public render(): void {
    for (let currentItemToDraw of this.ITEMS_TO_DRAW) {
      currentItemToDraw.draw(this.CONTEXT);
    }
  }
  
  /**
  * Updates the object
  * @param delta The time since the last call
  */
  public update(): void {
    this.render()
  }
}
