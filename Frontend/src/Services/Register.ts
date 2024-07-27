
export type userDataType= {
    _name:string,
    _email:string,
    _phone:number,
    _birth:string,
    _password:string,
}

// const baseUrl = import.meta.env.VITE_API_KEY
const Register = async(userData:userDataType) => {
    console.log("Here I am registering")
   const response = await fetch(`http://127.0.0.1:3001/api/users/register`, {
    method:'POST',
    headers:{
        "Content-Type" : "application/json"
    },
    body:JSON.stringify(userData)
   })

   if(response.ok){
        console.log("Succesfully Registering data")
        return true;
   }else{
        console.log("Failed registering Data")
        return false
   }
}


export default Register