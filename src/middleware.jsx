import { NextResponse } from "next/server";

const protectedRoutes = ['']
const publicRoutes = ['/login','/signup','/']

export default async function middlewre(req){
   
    const path = req.nextUrl.pathname
    const sessionInfo = req.cookies.get('session')?.value
    const isProtectedRoute = protectedRoutes.includes(path)
    const isPublicRoute = publicRoutes.includes(path)

    //isLoggedIn = false;

    if(isProtectedRoute && req.nextUrl.pathname.startsWith('/dashboard') &&!sessionInfo ){
        return NextResponse.redirect(new URL('/login',req.nextUrl));
    }

    if(isProtectedRoute && !req.nextUrl.pathname.startsWith('/dashboard') && sessionInfo ){
        return NextResponse.redirect(new URL('/dashboard',req.nextUrl));
    }

    if(isProtectedRoute && sessionInfo && !req.nextUrl.pathname.startsWith('/dashboard')){
        return NextResponse.redirect(new URL('/dashboard',req.nextUrl));
    }

    return NextResponse.next();

}

export const config ={
    matcher:['/((?!api|_next/static|sitemap.xml|_next/image|.*\\.png$).*)']
}