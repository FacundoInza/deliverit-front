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

export interface IOrderResponse {
    _id: string;
    status: string;
    address: string;
    coords: {
        lat: number;
        lng: number;
    };
    packagesQuantity: number;
    weight: number;
    recipient: string;
    deliveryDate: string;
}
