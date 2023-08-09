export interface IDelivery {
    deliveryId: string;
    deliveryAddress: string;
    status: ValidStatus;
}

export type ValidStatus = 'pending' | 'in progress' | 'delivered';
