import {Player} from "../Player/Player";
import {Position} from "../Field/Position";

class PlayerAI extends Player{


    calculateShoot(): Position {
        return new Position(1,1);
    }
}
export {PlayerAI};