import { Injectable } from "@nestjs/common";
import { User,BookMark, Prisma } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";
@Injectable()
export class AuthProvider{
    constructor( private prisma: PrismaService){

    }
    login(){
        return {'wte':'loged in'}

    }
    signup(){
        return {'msg':'signed up'}

    }
}