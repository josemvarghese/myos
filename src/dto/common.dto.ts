export interface IResponse {
    status: boolean;
    message: string;
    data?: any;
    error?: any;
    detail?: any;
}