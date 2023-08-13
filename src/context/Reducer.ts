import { ADD_POINTS, SELECT_PARTNER, SET_POINTS } from ".";
import { Action, State } from "./Types";


export default (state: State, action: Action): State => {
    switch (action.type) {
        case ADD_POINTS:
            return { ...state, points: action.payload + state.points };
        case SET_POINTS:
            return { ...state, points: action.payload };
        case SELECT_PARTNER:
            return { ...state, selectedPartner: action.payload };
        default:
            return state;
    }
}