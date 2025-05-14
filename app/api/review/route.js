import { NextResponse } from 'next/server';

export async function POST(request){

    try {
        const body = await request.json()
        console.log(body)
        return NextResponse.json(
            {res:"got it"}
        )
        
    } catch (error) {
        return NextResponse.json(
            {res:"error bro"}
        )
    }
}