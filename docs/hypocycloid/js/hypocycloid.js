/**
 * Pai lab 10
 * Hypocycloid
 *
 * @author Elías Hernández Abreu
 * @since 08 / 04 / 2024
 *
 * @file Drawable Hypocycloid
 */
export default class Hypocycloid {
    /**
     * @constructor
     */
    constructor() {
        this.OUTER_RADIUS = 300;
        this.SPEED = 2;
        this.CHANGE_RADIUS_SPEED = 0.05;
        this.innerRadius = 0.6;
        this.showCircles = true;
        this.animate = true;
        this.phase = 0;
        this.INCREASE_RADIUS_BUTTON = document.getElementById('increase-radius');
        this.DECREASE_RADIUS_BUTTON = document.getElementById('decrease-radius');
        this.ANIMATE_BUTTON = document.getElementById('animate');
        this.SHOW_CIRCLES_BUTTON = document.getElementById('show-circles');
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
    draw(context) {
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
            context.moveTo(INNER_CIRCLE_CENTER_X + INNER_RADIUS, INNER_CIRCLE_CENTER_Y);
            context.arc(INNER_CIRCLE_CENTER_X, INNER_CIRCLE_CENTER_Y, INNER_RADIUS, 0, 2 * Math.PI);
            context.moveTo(INNER_CIRCLE_CENTER_X, INNER_CIRCLE_CENTER_Y);
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
    toggleButton(event) {
        let button = event.currentTarget;
        if (button.className === 'button_on') {
            button.className = 'button_off';
        }
        else if (button.className === 'button_off') {
            button.className = 'button_on';
        }
    }
    /**
     * Changes the radius by the given percentage relative to the outer radius
     * @param value The amount to change
     */
    changeInnerRadius(value) {
        this.innerRadius = this.innerRadius += value;
        if (this.innerRadius > 0.9) {
            this.innerRadius = 0.9;
        }
        else if (this.innerRadius < 0.1) {
            this.innerRadius = 0.1;
        }
    }
    /**
    * Updates the object
    * @param delta The time since the last call
    */
    update(delta) {
        if (this.animate) {
            this.phase += delta * this.SPEED;
        }
    }
}
