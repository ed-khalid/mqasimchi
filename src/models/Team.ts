import { Player } from "./Player";


export class Team {

    constructor(public color:TeamColor, public players:Array<Player>) {

    }


    public get attributes() {
        return {
            speed: this.players.map(it => it.attributes.speed).reduce((acc,it) => acc+it, 0),
            shoot: this.players.map(it => it.attributes.shoot).reduce((acc,it) => acc+it, 0),
            pass: this.players.map(it => it.attributes.pass).reduce((acc,it) => acc+it, 0),
            dribble: this.players.map(it => it.attributes.dribble).reduce((acc,it) => acc+it, 0),
            defense: this.players.map(it => it.attributes.defense).reduce((acc,it) => acc+it, 0),
        }
    }

    
     



}

export enum TeamColor { 
    BLACK, WHITE, RED  
}