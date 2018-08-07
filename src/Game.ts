import {Player} from "./Player/Player";
import {PlayerAI} from "./Player/PlayerAI";

 

class Game{
    status: string;
    gamer: Player;
    gamerAI: PlayerAI;

    setStatus(status:string):void{
        this.status = status;
        //todo: update status div
    }
    startGame():void{}
}