/**
 * Pai lab 10
 * Lissajous curves
 *
 * @author Elías Hernández Abreu
 * @since 08 / 04 / 2024
 *
 * @file Class that renders the objexts to the canvas
 */
export default class View {
    /**
     * @constructor
     * @param ITEMS_TO_DRAW The items to be displayed by the view
     */
    constructor(ITEMS_TO_DRAW, CONTEXT) {
        this.ITEMS_TO_DRAW = ITEMS_TO_DRAW;
        this.CONTEXT = CONTEXT;
    }
    /**
    * Renders the view on a rendering context
    * @param context The rendering context to render on
    */
    render() {
        for (let currentItemToDraw of this.ITEMS_TO_DRAW) {
            currentItemToDraw.draw(this.CONTEXT);
        }
    }
    /**
    * Updates the object
    * @param delta The time since the last call
    */
    update() {
        this.render();
    }
}
