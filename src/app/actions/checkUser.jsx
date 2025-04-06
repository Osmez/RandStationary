'use server'

import { cookies } from 'next/headers';

export async function CheckUser(){
    const  rt = cookies().has('id');
    return rt;
}