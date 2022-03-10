import { IEnvelop } from "../models/envelop";

export function formatoEnvelop(data: any) {
    let retorno: IEnvelop<any> = {
        header: {
            dataValidation: {                
                ip: "string",
                server: "string",               
                startDate: "string",
                endDate: "string"
            }
        },
        body: data
    };
    return retorno;
}
