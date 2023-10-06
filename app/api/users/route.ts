import { NextResponse } from 'next/server';

import {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} from '../../../mocks/users/data';

export async function GET(req: Request, res: Response) {
  return NextResponse.json(getUsers());
}

export async function POST(req: Request, res: Response) {
  const body = await req.json();
  const newUser = body;
  createUser(newUser);
  return NextResponse.json(newUser);
}
