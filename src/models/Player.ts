import { PlayerAttributes } from "./PlayerAttributes";


export class Player {

    constructor(
        public id:number, 
        public name:string, 
        public attributes:PlayerAttributes, 
        ) {}
}