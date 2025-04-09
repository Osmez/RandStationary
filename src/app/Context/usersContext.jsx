
import { createContext, useContext, useState } from "react";

const UsersContext = createContext();

export const UsersProvider = ({ children }) => {
  const userModel = {user:{user:{name:"username",verified:"n/a",email:"user mail",phone:"usr phone",bills:"user nills",statis:"null"}
  ,bills:[{created_at:"na",price:"n/a",items:'[{"name":"na","price":"na","amounr":"na"}]'}]}
,status:"model"}

  const [ theUser, setTheUser ] = useState(userModel);

  const addTheUser = (user) => {
    setTheUser({user});
  };
  
  const getTheUser = ()=> theUser

  const clearUsers = () => {
    setTheUser(userModel);
  };

  return (
    <UsersContext.Provider
      value={{ theUser, addTheUser, getTheUser,clearUsers }}
    >
      {children}
    </UsersContext.Provider>
  );
};

export const useUsers = () => useContext(UsersContext);

export default UsersContext;
