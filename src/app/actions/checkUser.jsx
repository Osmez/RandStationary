'use server'

import { cookies } from 'next/headers';

export async function CheckUser(){
    const  rt = cookies().has('mainjob');
    return rt;
}

export async function LogOut(){
    const l = cookies().delete('mainjob');
    return l;
}