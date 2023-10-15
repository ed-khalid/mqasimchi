


export class PlayerAttributes {

    constructor(
        public speed:PlayerAttribute,
        public shoot:PlayerAttribute,
        public pass:PlayerAttribute,
        public dribble:PlayerAttribute,
        public defense:PlayerAttribute,
        ) 
    {}

}


export type PlayerAttribute = 1 | 2 | 3 | 4 | 5 