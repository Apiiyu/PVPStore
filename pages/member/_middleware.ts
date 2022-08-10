import { JWTPayloadTypes, UserTypes } from "data-types";
import jwtDecode from "jwt-decode";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export default function middleware(request: NextRequest) {
  const { access_token } = request.cookies;

  if (!access_token) return NextResponse.redirect("/sign-in");

  const jwtToken = Buffer.from(access_token, "base64").toString("ascii"); // --> Convert base64 to original jwt, (use in SSR, if in Client using function atob)
  const payload: JWTPayloadTypes = jwtDecode(jwtToken);
  const userData: UserTypes = payload.data;
  const BASE_IMG = process.env.NEXT_PUBLIC_BASE_IMG;
  userData.avatar = `${BASE_IMG}/players/${userData.avatar}`;

  return NextResponse.next();
}
