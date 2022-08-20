import { Status } from "./pokemon-status.model";
import { Type } from "./pokemon-type.model";


export interface Pokemon {
    id: number;
    name: string;
    image: string;
    types: Type[];
    status: Status;
}

export interface PokemonList {
    results: {
        name: string;
        url: string;
    }[];
}