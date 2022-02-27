import { Controller, Post } from "@nestjs/common";
import { AuthProvider } from "./auth.service";

@Controller('auth')
export class AuthController{
    constructor(private AuthService:AuthProvider){}  // private is just a shorthand way to create an instance
    
    @Post('login')
    login(){
        return this.AuthService.login()
    }

    @Post('signup')
    signup(){
        return  this.AuthService.signup()

    }
}