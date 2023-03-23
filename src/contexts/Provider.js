import UserProvider from "./UserProvider"
import PostProvider from "./PostProvider"

export default function Provider({children}){
    return(
        <>
            <UserProvider>
                <PostProvider>
                    {children}
                </PostProvider>
            </UserProvider>
        </>
    )
}