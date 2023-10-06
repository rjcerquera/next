import { NextResponse } from "next/server"

import { updateUser, deleteUser, getUserById } from "../../../../mocks/users/data"

interface RouteParams {
  id: string
}

export async function GET(req: Request, context: { params: RouteParams }) {
  const id = context.params.id
  return NextResponse.json(getUserById(Number(id)))
}

export async function PUT(req: Request, context: { params: RouteParams }) {
  const id = context.params.id
  const body = await req.json()
  const updatedUser = body
  updateUser(Number(id), updatedUser)
  return NextResponse.json(body)
}

export async function DELETE(req: Request, context: { params: RouteParams }) {
  const id = context.params.id
  deleteUser(Number(id))
  return NextResponse.json({})
}
