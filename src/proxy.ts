import { routing } from "@/i18n/routing";
import createMiddleware from "next-intl/middleware";
import { NextRequest } from "next/server";

const intlMiddleware = createMiddleware(routing);

export default function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    if (pathname.startsWith('/admin') || pathname.startsWith('/api')) {
        return;
    }

    return intlMiddleware(request);
}

export const config = {
    matcher: ["/((?!_next|_vercel|.*\\..*).*)",],
};
