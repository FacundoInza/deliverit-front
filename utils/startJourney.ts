import { deletePackagesSelected } from '@/redux/features/packages/packagesSlice';
import { Dispatch } from 'redux';

interface CustomRouter {
    push: (url: string, options?: { scroll: boolean }) => void;
}

export const startJourney = (dispatch: Dispatch, router: CustomRouter) => {
    dispatch(deletePackagesSelected());
    router.push('/dealer/home');
};
