
export enum TransportType {
   NONE, FREIGHT, PASSENGER, SPECIAL
}

export type TransportModel = {
    id: number;
    name: string;
    type:TransportType,
}
