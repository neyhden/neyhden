/**
 * Pai lab 10
 * Lissajous curves
 *
 * @author Elías Hernández Abreu
 * @since 08 / 04 / 2024
 *
 * @file Draws a solid box on the entire context
 */
export default class Background {
    /**
    * @constructor The constructor
    * @param COLOR The color of the background
    */
    constructor(COLOR) {
        this.COLOR = COLOR;
    }
    /**
    * Draws the current object to the context given
    * @param context The context to draw to
    */
    draw(context) {
        context.fillStyle = this.COLOR;
        context.fillRect(0, 0, context.canvas.width, context.canvas.height);
    }
}
