import { SignupFormSchema } from '../lib/definitions';
import { redirect } from 'next/dist/server/api-utils';

export async function signup(state, formData) {
    // Validate form fields
    const validatedFields = SignupFormSchema.safeParse({
      name: formData.get('name'),
      email: formData.get('email'),
      password: formData.get('password'),
    })
   
    // If any form fields are invalid, return early
    if (!validatedFields.success) {
      return {
        errors: validatedFields.error.flatten().fieldErrors,
      }
    }

    const {name, email, password}= validatedFields.data;

    const hashedpassword = password+'rand';

    //connect to database

    if(!user){
      return{
        message:'Cannot find the user'
      }
    }
   
    redirect('/')
    // Call the provider or db to create a user...
  }