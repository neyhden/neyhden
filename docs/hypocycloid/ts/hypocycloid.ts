/**
 * Pai lab 10
 * Hypocycloid
 *
 * @author Elías Hernández Abreu
 * @since 08 / 04 / 2024
 *
 * @file Drawable Hypocycloid
 */

import Drawable from './drawable.js';
import Updatable from './updatable.js';

export default class Hypocycloid implements Drawable, Updatable {
  private readonly OUTER_RADIUS: number = 300;
  private readonly SPEED: number = 2;
  private readonly CHANGE_RADIUS_SPEED: number = 0.05;

  private innerRadius: number = 0.6;
  private showCircles: boolean = true;
  private animate: boolean = true;
  private phase: number = 0;

  private readonly INCREASE_RADIUS_BUTTON: HTMLInputElement;
  private readonly DECREASE_RADIUS_BUTTON: HTMLInputElement;
  private readonly ANIMATE_BUTTON: HTMLInputElement;
  private readonly SHOW_CIRCLES_BUTTON: HTMLInputElement;

  /**
   * @constructor
   */
  constructor() {
    this.INCREASE_RADIUS_BUTTON = document.getElementById('increase-radius') as HTMLInputElement;
    this.DECREASE_RADIUS_BUTTON = document.getElementById('decrease-radius') as HTMLInputElement;
    this.ANIMATE_BUTTON = document.getElementById('animate') as HTMLInputElement;
    this.SHOW_CIRCLES_BUTTON = document.getElementById('show-circles') as HTMLInputElement;

    this.INCREASE_RADIUS_BUTTON.addEventListener('click', this.toggleButton);
    this.INCREASE_RADIUS_BUTTON.addEventListener('click', () => this.changeInnerRadius(this.CHANGE_RADIUS_SPEED));
    this.ANIMATE_BUTTON.addEventListener('click', this.toggleButton);
    this.ANIMATE_BUTTON.addEventListener('click', () => this.animate = !this.animate);
    this.DECREASE_RADIUS_BUTTON.addEventListener('click', this.toggleButton);
    this.DECREASE_RADIUS_BUTTON.addEventListener('click', () => this.changeInnerRadius(-this.CHANGE_RADIUS_SPEED));
    this.SHOW_CIRCLES_BUTTON.addEventListener('click', this.toggleButton);
    this.SHOW_CIRCLES_BUTTON.addEventListener('click', () => this.showCircles = !this.showCircles);
  }

  /**
  * Draws the current object to the context given
  * @param context The context to draw to
  */
  draw(context: CanvasRenderingContext2D): void {
    const WIDTH = context.canvas.width;
    const HEIGHT = context.canvas.height;
    const CIRCLE_COLOR = 'black';
    const TRACE_COLOR = 'red';
    const STROKE_SIZE = 2;
    const GUIDE_CIRCLE_RADIUS = 10;

    const SHOW_CIRCLES = this.showCircles;
    const INNER_RADIUS = this.innerRadius * this.OUTER_RADIUS;

    const INNER_CIRCLE_CENTER_X = WIDTH / 2 + Math.cos(this.phase) * (this.OUTER_RADIUS - INNER_RADIUS);
    const INNER_CIRCLE_CENTER_Y = HEIGHT / 2 + Math.sin(this.phase) * (this.OUTER_RADIUS - INNER_RADIUS);
    const HYPOCYCLOID_X = INNER_CIRCLE_CENTER_X + INNER_RADIUS * Math.cos((this.OUTER_RADIUS - INNER_RADIUS) / INNER_RADIUS * this.phase);
    const HYPOCYCLOID_Y = INNER_CIRCLE_CENTER_Y - INNER_RADIUS * Math.sin((this.OUTER_RADIUS - INNER_RADIUS) / INNER_RADIUS * this.phase);

    if (SHOW_CIRCLES) {
      context.setLineDash([]);
      context.lineWidth = STROKE_SIZE;
      context.strokeStyle = CIRCLE_COLOR;
      context.beginPath();
      context.arc(WIDTH / 2, HEIGHT / 2, this.OUTER_RADIUS, 0, 2 * Math.PI);
      context.moveTo(INNER_CIRCLE_CENTER_X + INNER_RADIUS, INNER_CIRCLE_CENTER_Y)
      context.arc(INNER_CIRCLE_CENTER_X, INNER_CIRCLE_CENTER_Y, INNER_RADIUS, 0, 2 * Math.PI);
      context.moveTo(INNER_CIRCLE_CENTER_X, INNER_CIRCLE_CENTER_Y)
      context.lineTo(HYPOCYCLOID_X, HYPOCYCLOID_Y);
      context.closePath();
      context.stroke();

      context.fillStyle = CIRCLE_COLOR;
      context.beginPath();
      context.arc(INNER_CIRCLE_CENTER_X, INNER_CIRCLE_CENTER_Y, GUIDE_CIRCLE_RADIUS, 0, Math.PI * 2);
      context.closePath();
      context.fill();

      context.fillStyle = TRACE_COLOR;
      context.beginPath();
      context.arc(HYPOCYCLOID_X, HYPOCYCLOID_Y, GUIDE_CIRCLE_RADIUS, 0, Math.PI * 2);
      context.closePath();
      context.fill();
    }
  }

  /**
   * Toggles a button color
   * @param event The event
   */
  toggleButton(event: Event) {
    let button = event.currentTarget as HTMLButtonElement;
    if (button.className === 'button_on') {
      button.className = 'button_off';
    }  else if (button.className === 'button_off') {
      button.className = 'button_on';
    }
  }

  /**
   * Changes the radius by the given percentage relative to the outer radius
   * @param value The amount to change
   */
  changeInnerRadius(value: number) {
    this.innerRadius = this.innerRadius += value;
    if (this.innerRadius > 0.9) {
      this.innerRadius = 0.9;
    } else if (this.innerRadius < 0.1) {
      this.innerRadius = 0.1;
    }
  }

  /**
  * Updates the object
  * @param delta The time since the last call
  */
  update(delta: number): void {
    if (this.animate) {
      this.phase += delta * this.SPEED;
    }
  }
}
