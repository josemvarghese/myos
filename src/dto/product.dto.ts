export interface NewProductDto {
    title: string;
    description: string;
    pictureUrl: string;
    price: number;
    quantity: number;
}


export interface ListProductDto {
    limit?: number;
    search?: string;
    page?: number;
    price?: Sort
}

export enum Sort {
    "DESC" = "desc",
    "ASC" = "asc"
}
