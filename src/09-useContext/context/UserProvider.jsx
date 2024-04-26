import { UserContext } from "./UserContext"


const user={
    id:123,
    name:'Pablo',
    email:'pablo@info.com'
}
const UserProvider = ({children}) => {
  return (
    <UserContext.Provider value={{user}}>
        {children}
    </UserContext.Provider>
  )
}

export default UserProvider
