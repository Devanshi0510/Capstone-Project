export class Iorganisation{
    id: string;
    name: string;
    phone: string;
    email: string;
    licenceNo: string;
    password: string;
    idToken: string;
    admin: [
      {
        name: string,
        phone: string,
        email: string,
        password:string,
        username:string
      }
    ];
    subOrdinate: [
      {
        name: string,
        phone: string,
        email: string,
        password:string,
        username:string
      }
    ]
}