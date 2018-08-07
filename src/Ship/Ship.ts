import {Position} from "../Field/Position";
class Ship {
    decs: Position[];
    hittedDecs: Position[];
    


    constructor(positions: Position[]){
        this.decs = positions;
    }

    isHit(pos:Position):boolean {
        for(let i = 0; i < this.decs.length; i++ ) {
            if(this.decs[i] == pos) {
                this.hittedDecs.push( this.decs[i] );
                return true;
            }
        }
        return false
    };

    isDead():boolean{
        return this.hittedDecs.length == this.decs.length;
    }

    isLive():boolean{
        return this.hittedDecs.length < this.decs.length;
    }


}
export {Ship}