export interface ResponsePaginated<T> {
    message: string;
    page: number;
    totalPages: number;
    data: T[];
    totalItems: number;
    itemsPerPage: number;
    prevPage: null;
    nextPage: null;
    status: number;
}
