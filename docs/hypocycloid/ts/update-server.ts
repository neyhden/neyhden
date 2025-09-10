/**
 * Pai lab 10
 * Lissajous curves
 *
 * @author Elías Hernández Abreu
 * @since 08 / 04 / 2024
 *
 * @file Calls updates to the updatable objects
 */

import Updatable from './updatable.js';

export default class UpdateServer {
  private previousCallTime: number = 0;

  /**
   * @constructor The constructor
  */
  public constructor(private readonly UPDATABLES: Updatable[]) {
    this.previousCallTime = Date.now();
    window.requestAnimationFrame(() => this.callUpdates());
  }

  /**
   * Updates the updatable objects
   */
  private callUpdates(): void {
    for (let updatable of this.UPDATABLES) {
      updatable.update((Date.now() - this.previousCallTime) / 1000); // To pass it in seconds
    }
    this.previousCallTime = Date.now();
    window.requestAnimationFrame(() => this.callUpdates());
  }
}
