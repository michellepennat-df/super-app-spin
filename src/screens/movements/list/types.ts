import { MovementsSection } from "../../../models/Movements/MovementsResponse";

export interface MovementsListProps {
    movements: MovementsSection[],
    getData: () => void,
    loading: boolean,
    moreData: boolean
}