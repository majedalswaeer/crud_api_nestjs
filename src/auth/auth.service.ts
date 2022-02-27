import { Injectable } from "@nestjs/common";

@Injectable()
export class AuthProvider{
    login(){
        return {'wte':'loged in'}

    }
    signup(){
        return {'msg':'signed up'}

    }
}