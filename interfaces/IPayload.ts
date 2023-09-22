import { IUser } from './IUser';

export interface IPayload {
    user: IUser;
    iat: number;
    exp: number;
}
