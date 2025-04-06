
import { createContext, useContext, useState } from "react";

const UsersContext = createContext();

export const UsersProvider = ({ children }) => {
  const [ theUser, setTheUser ] = useState({});

  const addTheUser = (user) => {
    setTheUser({user});
  };
  
  const getTheUser = ()=> theUser

  const clearUsers = () => {
    setTheUser({});
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
