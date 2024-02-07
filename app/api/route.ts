// app/api/route.ts

import { NextRequest, NextResponse } from "next/server";

import { ConnectDB } from "@/lib/config/mongodb";
import TodoModel from "@/lib/models/TodoModel";

const LoadDB = async () => {
  await ConnectDB();
}

LoadDB();


export async function GET(req: NextRequest) {

  const todos = await TodoModel.find({})
  return NextResponse.json({ todos: todos })
}


export async function POST(req: NextRequest) {

  const { title, description } = await req.json()

  await TodoModel.create({
    title,
    description,
  })
  return NextResponse.json({ msg: "Todo created successfully!" })

}


export async function DELETE(req: NextRequest) {

  const mongoId = await req.nextUrl.searchParams.get('mongoId')

  await TodoModel.findByIdAndDelete(mongoId);
  return NextResponse.json({ msg: "Todo deleted successfully!" })
}


export async function PUT(req: NextRequest) {

  const mongoId = await req.nextUrl.searchParams.get('mongoId')

  await TodoModel.findByIdAndUpdate(mongoId, {
    $set: {
      isCompleted: true,
    }
  });
  return NextResponse.json({ msg: "Todo upated successfully!" })
}