export interface ProductStatusDetail {
    status: ProductStatus;
    title: string;
    summary: string;
}

export enum ProductStatus {
    Live = 'Live',
    Offline = 'Offline'
}