// app/api/route.ts

import { NextRequest, NextResponse } from "next/server";

import { ConnectDB } from "@/lib/config/mongodb";
import TodoModel from "@/lib/models/TodoModel";

const LoadDB = async () => {
  await ConnectDB();
}

LoadDB();

export async function GET(req: NextRequest) {
  return NextResponse.json({msg:"get method"})

}

export async function POST(req: NextRequest) {

   const {title, description} = await req.json()

   await TodoModel.create({
    title,
    description,
   })
  return NextResponse.json({msg:"Todo Created"})

}