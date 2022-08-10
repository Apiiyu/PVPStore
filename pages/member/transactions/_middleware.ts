import { JWTPayloadTypes, UserTypes } from "data-types";
import jwtDecode from "jwt-decode";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export default async function middleware(request: NextRequest) {
  const { access_token } = request.cookies;

  if (!access_token) return NextResponse.redirect("/sign-in");
  return NextResponse.next();
}
