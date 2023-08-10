
export type Action = {
    type: string,
    payload: number
}

export interface State {
    points: number,
    setPoints: (points: number) => void,
    addPoints: (points: number) => void,
    getPoints: () => void
}