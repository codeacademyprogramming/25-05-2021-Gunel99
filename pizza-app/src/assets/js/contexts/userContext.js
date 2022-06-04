import { createContext } from "react";

const UserContext = createContext();

export function UserProvider({ children }) {
    const user = {
        id: 1, username: 'Gunel'
    }

    return (
        <UserContext.Provider value={user}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContext
