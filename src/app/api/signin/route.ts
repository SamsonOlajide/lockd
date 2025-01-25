import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import {pool} from "@/lib/db-config";

const JWT_SECRET = process.env.JWT_SECRET || 'secret';

export async function POST (req: Request){
    const {email, password} = await req.json();

    if (!email || !password) {
        return NextResponse.json({error: "Please fill all fields"}, {status: 400});
    }

    try{
        const [rows]: any = await pool.query('SELECT * FROM users WHERE email = ?', [email]);
        const user = rows[0];
        
        if (!user) {
            return NextResponse.json({error: "Invalid credentials"}, {status: 401});
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return NextResponse.json({error: "Invalid credentials"}, {status: 401});
        }

        const token =  jwt.sign({userId: user.id,username: user.username,email:user.email,created_at:user.created_at}, JWT_SECRET, {expiresIn: '7d'});

        return NextResponse.json({message: "Logged in successfully", token});
    }catch(err:any){

        return NextResponse.json({error: "Something went wrong"}, {status: 500});
    }

}


