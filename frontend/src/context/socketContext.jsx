import { createContext, useEffect, useState, useContext} from 'react';
import { useAuthContext } from './AuthContext';
import { io } from 'socket.io-client';

 const SocketContext = createContext();

export const useSocketContext= ()=>{
    return useContext(SocketContext);
}

export const SocketContextProvider = ({ children }) => {
    const [socket, setSocket] = useState(null);
    const [onlineUsers, setOnlineUsers] = useState([]);
    const { authUser } = useAuthContext();

    useEffect(() => {
        if (authUser) {
            const socket = io("https://mern-chat-app-sdag.onrender.com/",{
                query:{
                    userId: authUser._id,
                }
            });
            setSocket(socket);

            // Handle incoming messages or events
            socket.on("getonlineUsers", (users) => {
                setOnlineUsers(users);
            });

            
            return () => socket.close();
        } else {
            if (socket) {
                socket.close();
                setSocket(null);
            }
        }
    }, [authUser]);

    return (
        <SocketContext.Provider value={{ socket, onlineUsers }}>
            {children}
        </SocketContext.Provider>
    );
};
