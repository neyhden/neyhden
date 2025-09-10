/**
 * Pai lab 10
 * Lissajous curves
 *
 * @author Elías Hernández Abreu
 * @since 08 / 04 / 2024
 *
 * @file Drawable lissajous curves
 */
export default class Lissajous {
    /**
     * @constructor
     */
    constructor() {
        this.HORIZONTAL_AMPLITUDE = 200;
        this.VERTICAL_AMPLITUDE = 200;
        this.PHASE_TEXT = document.getElementById("phaseOutput");
        this.SPEED_SLIDER = document.getElementById('speed-slider'),
            this.PHASE_SLIDER = document.getElementById('phase-slider'),
            this.HORIZONTAL_FREQUENCY_SLIDER = document.getElementById('horizontal-frequency-slider'),
            this.VERTICAL_FREQUENCY_SLIDER = document.getElementById('vertical-frequency-slider');
    }
    /**
    * Draws the current object to the context given
    * @param context The context to draw to
    */
    draw(context) {
        const DETAIL = 0.01;
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
    update(delta) {
        this.PHASE_SLIDER.valueAsNumber += this.SPEED_SLIDER.valueAsNumber * delta;
        if (this.PHASE_SLIDER.valueAsNumber >= 3141) { // PI but multiplied
            this.PHASE_SLIDER.valueAsNumber = 0;
        }
        else if (this.PHASE_SLIDER.valueAsNumber <= 0) {
            this.PHASE_SLIDER.valueAsNumber = 3141;
        }
        this.PHASE_TEXT.value = this.PHASE_SLIDER.value;
    }
}
