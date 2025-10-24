/**
 * This namespace contains the functions required to control the Droid.
 * @author Jirka Dell'Oro-Friedl | Hochschule Furtwangen University | 2024
 */
export namespace DroidController {
    // This object stores the state of our droid's behavior.
    // It persists between calls to getCommand.
    // const state: {
    //     task: string;
    //     step: number;
    //     path: { x: number, z: number }[];
    //     pathIndex: number;
    // } = {
    //     task: "left", // Current task being executed
    //     step: 0,           // Current step in a sequence of actions
    //     path: [],          // A calculated path for the droid to follow
    //     pathIndex: 0       // The current position in the path
    // };

    /**
     * This function is called by the Droid for each command.
     * @param _droidState The current state of the Droid (e.g., position, orientation)
     * @returns A command for the Droid to execute
     */

    type Output = { module: string, method: string, data: string }
    // let command: number = 0

    export function getCommand(_droidState: any): Output | null {
        // You can choose the active task by changing the "task" value in the state object.
        return moveRandom()
    }

    // function forwardLeft(): { module: string, method: string, data: string } {
    //     // Always moves forward

    // }

    function moveOuterPerimiter(): Output{
        const randomNumber: number = Math.floor(Math.random() * 5);
        let output: Output = { module: "Chassis", method: "move", data: "forward" }

        
    }

    function moveRandom(): Output {
        const randomNumber: number = Math.floor(Math.random() * 5);
        let output: Output = { module: "Chassis", method: "move", data: "forward" }
        switch (randomNumber) {
            case 0:
                output = moveForward()
                break;
            case 1:
                output = moveBackward()
                break;
            case 2:
                output = moveRight()
                break;
            case 3:
                output = moveLeft()
                break;
            case 4:
                output = stop()
                break;
        }
        return output
    }

    // function moveCircle(): Output{
    //     let output: { module: string, method: string, data: string } = { module: "Chassis", method: "move", data: "forward" }
    //     if (command % 2 == 0) {
    //         output = moveForward()
    //         command++
    //         console.log("Command: ", output)
    //     }
    //     else if (command % 2 == 1) {
    //         output = moveLeft()
    //         command++
    //         console.log("Command: ", output)
    //     }
    //     return output
    // }

    function moveForward(): { module: string, method: string, data: string } {
        // Always moves forward
        return { module: "Chassis", method: "move", data: "forward" };
    }
    function moveBackward(): { module: string, method: string, data: string } {
        // Always moves forward
        return { module: "Chassis", method: "move", data: "back" };
    }
    function moveRight(): { module: string, method: string, data: string } {
        // Always moves forward
        return { module: "Chassis", method: "move", data: "right" };
    }
    function moveLeft(): { module: string, method: string, data: string } {
        // Always moves forward
        return { module: "Chassis", method: "move", data: "left" };
    }
    function stop(): { module: string, method: string, data: string } {
        // Always moves forward
        return { module: "Chassis", method: "move", data: "stop" };
    }
}