export class User{ 
    userId:number=0;
    fullName:string='';
    userEmailId:string='';
    userPassword:string='';
    phoneNumber:string='';
    role:string='';
    constructor(userId:number,
        fullName:string,
        userEmailId:string,
        userPassword:string,
        phoneNumber:string,
        role:string)

        {this.userId=userId ;
        this.fullName=fullName;
        this.userEmailId=userEmailId;
        this.userPassword=userPassword;
        this.phoneNumber=phoneNumber;
        this.role=role;
         }
}