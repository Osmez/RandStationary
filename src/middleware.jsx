import { NextResponse } from "next/server";
import { cookies } from 'next/headers';
 

const protectedRoutes = ['/dashboard'] 
const publicRoutes = ['/login','/signup','/']

export default async function middlewre(req){
   
    const path = req.nextUrl.pathname;
    const sessionInfo = cookies().has('mainjob');
    const sessValid = cookies().get('mainjob')?.value;
    
    const isProtectedRoute = protectedRoutes.includes(path)
    const isPublicRoute = publicRoutes.includes(path)

    if(isProtectedRoute && req.nextUrl.pathname.startsWith('/dashboard') &&!sessionInfo ){
        return NextResponse.redirect(new URL('/login',req.nextUrl));
    }

    if(isProtectedRoute && req.nextUrl.pathname.startsWith('/confirm') && !sessionInfo ){
        return NextResponse.redirect(new URL('/login',req.nextUrl));
    }

    if(isProtectedRoute && req.nextUrl.pathname.startsWith('/confirm') &&  sessValid == 'true'){
        return NextResponse.redirect(new URL('/dashboard',req.nextUrl));
    }

    return NextResponse.next();
}

export const config ={
    matcher:['/((?!api|_next/static|sitemap.xml|_next/image|.*\\.png$).*)']
}