export interface IDelivery {
    _id: string;
    orderId: OrderID;
    userId: string;
    status: string;
}

export type ValidStatus = 'pending' | 'in progress' | 'delivered';

export interface OrderID {
    _id: string;
    address: string;
}

export interface FilterDelivery {
    status: string;
}
