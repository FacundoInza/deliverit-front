export interface IOrder {
    _id: string;
    status: string;
    address: string;
    packagesQuantity: number;
    weight: number;
}

export interface FilterOrder {
    status: string;
    page: number;
}
