import { MovementsSection } from "../../../models/movement/MovementResponse";

export interface MovementsListProps {
    movements: MovementsSection[],
    getData: () => void,
    loading: boolean,
    moreData: boolean
}