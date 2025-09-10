/**
 * Pai lab 10
 * Lissajous curves
 *
 * @author Elías Hernández Abreu
 * @since 08 / 04 / 2024
 *
 * @file Calls updates to the updatable objects
 */
export default class UpdateServer {
    /**
     * @constructor The constructor
    */
    constructor(UPDATABLES) {
        this.UPDATABLES = UPDATABLES;
        this.previousCallTime = 0;
        this.previousCallTime = Date.now();
        window.requestAnimationFrame(() => this.callUpdates());
    }
    /**
     * Updates the updatable objects
     */
    callUpdates() {
        for (let updatable of this.UPDATABLES) {
            updatable.update((Date.now() - this.previousCallTime) / 1000); // To pass it in seconds
        }
        this.previousCallTime = Date.now();
        window.requestAnimationFrame(() => this.callUpdates());
    }
}
