import { Movement } from "./Movement";

export interface MovementsResponse {
    data: MovementsSection[]
}

export interface MovementsSection {
    title: string,
    data: Movement[]
}