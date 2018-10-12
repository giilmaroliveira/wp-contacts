export class ContactModel {
    id: number;
    contact_name: string;
    age: number;
    status: string;

    constructor() {
        
        this.contact_name = "";
        this.age = 0;
        this.status = "";
    }
}