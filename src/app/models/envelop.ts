
interface IDataValidation {       
    ip: string;
    server: string;
    startDate: string;
    endDate: string;   
}


interface IHeader {  
    dataValidation: IDataValidation;      
}

export interface IEnvelop<T> {
    header: IHeader;
    body: T;
}
