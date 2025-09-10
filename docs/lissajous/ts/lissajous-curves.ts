/**
 * Pai lab 10
 * Lissajous curves
 *
 * @author Elías Hernández Abreu
 * @since 08 / 04 / 2024
 *
 * @file Drawable lissajous curves
 */

import Drawable from './drawable.js';
import Updatable from './updatable.js';

export default class Lissajous implements Drawable, Updatable {
  private readonly HORIZONTAL_AMPLITUDE: number = 200;
  private readonly VERTICAL_AMPLITUDE: number = 200;

  private readonly PHASE_TEXT: HTMLInputElement;
  private readonly SPEED_SLIDER: HTMLInputElement;
  private readonly PHASE_SLIDER: HTMLInputElement;
  private readonly HORIZONTAL_FREQUENCY_SLIDER: HTMLInputElement;
  private readonly VERTICAL_FREQUENCY_SLIDER: HTMLInputElement;

  /**
   * @constructor
   */
  constructor() {
    this.PHASE_TEXT = document.getElementById("phaseOutput") as HTMLInputElement;
    this.SPEED_SLIDER = document.getElementById('speed-slider') as HTMLInputElement,
    this.PHASE_SLIDER = document.getElementById('phase-slider') as HTMLInputElement,
    this.HORIZONTAL_FREQUENCY_SLIDER = document.getElementById('horizontal-frequency-slider') as HTMLInputElement,
    this.VERTICAL_FREQUENCY_SLIDER = document.getElementById('vertical-frequency-slider') as HTMLInputElement
  }

  /**
  * Draws the current object to the context given
  * @param context The context to draw to
  */
  draw(context: CanvasRenderingContext2D): void {
    const DETAIL = 0.01
    const WIDTH = context.canvas.width;
    const HEIGHT = context.canvas.height;
    const STROKE_COLOR = 'black';
    const STROKE_SIZE = 2;

    const PHASE = this.PHASE_SLIDER.valueAsNumber * 0.01;
    const HORIZONTAL_FREQUENCY = this.HORIZONTAL_FREQUENCY_SLIDER.valueAsNumber;
    const VERTICAL_FREQUENCY = this.VERTICAL_FREQUENCY_SLIDER.valueAsNumber;

    context.lineWidth = STROKE_SIZE;
    context.strokeStyle = STROKE_COLOR;
    context.setLineDash([0, 0]);
    let tValue = 0;
    let previousX = this.HORIZONTAL_AMPLITUDE * Math.sin(HORIZONTAL_FREQUENCY * tValue + PHASE);
    let previousY = -this.VERTICAL_AMPLITUDE * Math.sin(VERTICAL_FREQUENCY * tValue);
    context.beginPath();
    while (tValue <= 2 * Math.PI + DETAIL) {
      let currentX = this.HORIZONTAL_AMPLITUDE * Math.sin(HORIZONTAL_FREQUENCY * tValue + PHASE);
      let currentY = -this.VERTICAL_AMPLITUDE * Math.sin(VERTICAL_FREQUENCY * tValue);
      context.moveTo(previousX + WIDTH / 2, previousY + HEIGHT / 2);
      context.lineTo(currentX + WIDTH / 2, currentY + HEIGHT / 2);
      previousX = currentX;
      previousY = currentY;
      tValue += DETAIL;
    }
    context.closePath();
    context.stroke();
  }

  /**
  * Updates the object
  * @param delta The time since the last call
  */
  update(delta: number): void {
    this.PHASE_SLIDER.valueAsNumber += this.SPEED_SLIDER.valueAsNumber * delta;
    if (this.PHASE_SLIDER.valueAsNumber >= 3141) { // PI but multiplied
      this.PHASE_SLIDER.valueAsNumber = 0;
    } else if (this.PHASE_SLIDER.valueAsNumber <= 0) {
      this.PHASE_SLIDER.valueAsNumber = 3141;
    }
    this.PHASE_TEXT.value = this.PHASE_SLIDER.value;
  }
}
