import { NodeNextResponse } from "next/dist/server/base-http/node";
import { NextResponse } from "next/server";

const protectedRoutes = ['/dashboard']
const publicRoutes = ['/login','/signup','/']

export default async function middlewre(req){
    const path = req.nextUrl.pathname
    const isProtectedRoute = protectedRoutes.includes(path)
    const isPublicRoute = publicRoutes.includes(path)

    if(isProtectedRoute && path != "/login"){
        return NextResponse.redirect(new URL('/login',req.nextUrl));
    }

    if(isPublicRoute && !req.nextUrl.pathname.startsWith('/dashboard')){
        //return NextResponse.redirect(new URL('/dashboard', req.nextUrl));
    }

    return NextResponse.next();

}

export const config ={
    matcher:['/((?!api|_next/static|sitemap.xml|_next/image|.*\\.png$).*)']
}