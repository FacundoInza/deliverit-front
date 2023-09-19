export interface IDelivery {
    _id: string;
    orderId: OrderID;
    userId: string;
    status: string;
}

export type ValidStatus = 'pending' | 'in progress' | 'delivered';

export interface ResponseDeliveries {
    message: string;
    page: number;
    totalPages: number;
    data: IDelivery[];
    totalItems: number;
    itemsPerPage: number;
    prevPage: null;
    nextPage: null;
    status: number;
}

export interface OrderID {
    _id: string;
    address: string;
}
