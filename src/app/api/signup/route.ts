import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { pool } from "@/lib/db-config";



export async function POST(req: Request) {
    const {username, email, password}  = await req.json();
    if (!username || !email || !password) {
        return NextResponse.json({error: "Please fill all fields"}, {status: 400});
    }

    try{
        const hashedPassword  = await bcrypt.hash(password, 10);

        const [result] = await pool.query(
            'INSERT INTO users (username, email, password) VALUES (?, ?, ?)',
            [username, email, hashedPassword]
        ) 

        return NextResponse.json({message: "User created successfully",userId: (result as any).insertId});
    }catch(err:any){
        console.log(err.code);
        if(err.code === 'ER_DUP_ENTRY'){
            return NextResponse.json({error: "User already exists"}, {status: 400});
        }
        return NextResponse.json({error: "Something went wrong"}, {status: 500});
    }
    
}