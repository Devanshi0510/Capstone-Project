export class ICustomer{
    id: string;
    name: string;
    phone: string;
    email: string;
    businessId: string;
    injuries: 
      {
        injuryDate: string,
        time: string,
        location: string,
        description: string,
        severity:string,
        status: string,
        latitude: number,
        longitude:number,
        help:string
      }
    

}