'use server'
export default async function signup(state, formData){
    const uname = formData.get('name');
    const uemail = formData.get('email');
    const upassword = formData.get('password');
    const uphone = formData.get('phone');

    const hdrs = new Headers();
    hdrs.append('Content-Type' ,  'application/json');
    hdrs.append('Accept' ,  'application/json');

    const theBody = {name:uname,password:upassword,email:uemail,phone: uphone,status:"signup"};
   
    try{
      const reso = await fetch('http://randauth.rf.gd/sign/signup.php',{
        method:"POST",
      })

      return reso.text(); 
    }catch(error){
      if (error) {
        switch (error.type) {
          case 'CredentialsSignin':
            return 'Invalid credentials.'
          default:
            return 'Something went wrong.'
        }
      }
    }
  }

