import { IOrderResponse } from '.';

export interface IDelivery {
    _id: string;
    orderId: OrderID;
    userId: string;
    status: string;
}

export interface IDeliveryResponse {
    message: string;
    data: {
        _id: string;
        orderId: IOrderResponse;
        userId: string;
        status: string;
        startingDeliveryDate: string | null;
        resolutionDeliveryDate: string | null;
        createdAt: string;
        updatedAt: string;
    };
}

export type ValidStatus = 'pending' | 'in progress' | 'delivered';

export interface OrderID {
    _id: string;
    address: string;
}

export interface FilterDelivery {
    status: string;
    userId: string;
}
