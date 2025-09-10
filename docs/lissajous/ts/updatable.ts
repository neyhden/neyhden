/**
 * Pai lab 10
 * Lissajous curves
 *
 * @author Elías Hernández Abreu
 * @since 08 / 04 / 2024
 *
 * @file Updatable interface for time based elements
 */

export default interface Updatable {
  /**
  * Updates the object
  * @param delta The time since the last call
  */
  update(delta: number): void;
}

