export type Action = {
  type: string;
  payload: any;
};

export interface State {
  points: number;
  selectedPartner: {
    id: string;
    name: string;
    type: string;
    image: string;
  } | null;
  setPoints: (points: number) => void;
  addPoints: (points: number) => void;
  getPoints: () => void;
  selectPartner: (partner: any) => void;
}
