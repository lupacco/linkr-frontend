import { createContext, useState } from "react";

export const UserContext = createContext();

export default function UserProvider({ children }) {
  const emptyImage =
    "https://www.pngitem.com/pimgs/m/150-1503945_transparent-user-png-default-user-image-png-png.png";

  const [myUser, setMyUser] = useState({ pictureUrl: emptyImage });
  const [selectedUser, setSelectedUser] = useState(null)

  return (
    <UserContext.Provider
      value={{
        myUser,
        setMyUser,
        selectedUser,
        setSelectedUser
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
