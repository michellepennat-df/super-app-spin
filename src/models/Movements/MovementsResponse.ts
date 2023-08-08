import { Movements } from "./Movements";

export interface MovementsResponse {
    data: MovementsSection[]
}

export interface MovementsSection {
    title: string,
    data: Movements[]
}