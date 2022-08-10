import { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export default function middleware(request: NextRequest) {
  const { access_token } = request.cookies;
  if (access_token) {
    if (
      request.url === "/sign-in" ||
      request.url === "/sign-up" ||
      request.url === "/sign-up-photo" ||
      request.url === "/sign-up-success"
    ) {
      return NextResponse.redirect("/");
    } else {
      return NextResponse.next();
    }
  }
}
