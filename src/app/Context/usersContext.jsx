import { createContext , useContext , useState } from "react";


const userModel = {
    name:"username",email:"user mail",phone:"usr phone",bills:"user nills",statis:"null"
            ,bills:[{created_at:"na",price:"n/a",items:'[{"name":"na","price":"na","amounr":"na"}]'}]
            ,status:false,loged:false}

export const UsersContext = createContext({user:userModel});

export const UserProvider = ({children})=>{
    const [user, setUser] = useState({user:userModel});

    const addUser = (newUser)=>{
        const theUser = userModel;
        theUser.name  = newUser.name;
        theUser.email = newUser.email;
        theUser.phone = newUser.phone;
        theUser.bills = newUser.bills;
        theUser.status = newUser.status;
        theUser.loged = true;
        setUser({user:theUser});
    }

    const removeUser = ()=>{
        setUser(userModel);
    }

    return(
        <UsersContext.Provider
            value={{user, addUser, removeUser}}
        >
            {children}
        </UsersContext.Provider>
    );
};

export const useUsers = ()=> useContext(UsersContext);

export default UsersContext;
