'use server'
export async function signup(state, formData){
    const allowedNums = ['0936','0980','0991','0938','0965','0940','0992','0958']
    const uname     = formData.get('name');
    const uemail    = formData.get('email');
    const upassword = formData.get('password');
    const cpassword = formData.get('conpassword');
    const uphone    = formData.get('phone');

    if(!uname || !uemail || !upassword || !cpassword || !uphone){
      return {message: 'invalid'}
    }

    if(uname.length < 3){
      return {message: 'invalid', type: 'nml'}
    }

    if(upassword != cpassword){
      return {message: 'invalid', type:'cpass'}
    }
    const phn = toString(uphone);
    const str = phn.substring(0,3);
    if(uphone.length <= 9 || uphone.length >= 11){
      return {message: 'invalid', type: 'ph', er:'phl'}
    }else if(!allowedNums.includes(str)){
      return {message: 'invalid', type:'ph', er:'phn'}
    }
    
    hdrs.append('Content-Type' ,  'application/json');
    hdrs.append('Accept' ,  'application/json');

    const theBody = {name:uname,password:upassword,email:uemail,phone: uphone,status:"signup"};
    
    try{
      const reso = await fetch('http://127.0.0.1:8000/api/signup',{
        method:"POST",
        headers: hdrs,
        body: JSON.stringify(theBody),
      })
      const jreso = await reso.json();
      return jreso;
    }catch(error){
      if (error) {
        switch (error.type) {
          case 'CredentialsSignin':
            return {message: 'Invalid'}
          default:
            return {message: 'connection'}
        }
      }
    }
  }