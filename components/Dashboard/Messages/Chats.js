import React from "react";

import axios from "axios";

const Chats = ({ selectedChat, setSelectedChat, loggedInUser, users }) => {
  const createChat = async (id) => {
    const doc = {
      senderId: loggedInUser._id,
      receiverId: id,
    };

    const { data } = await axios.post(
      "https://sheltered-journey-99057.herokuapp.com/chats",
      doc
    );
    setSelectedChat(data);
  };
  return (
    <div>
      <h1 className="text-center py-2 text-3xl"> Chats</h1>
      <div className="py-5">
        {users?.map((user) => (
          <div key={user._id}>
            <div
              onClick={() => createChat(user._id)}
              className="flex px-3 py-2 bg-white items-center justify-between my-2 rounded cursor-pointer hover:bg-cyan-500 hover:text-white transition duration-300"
            >
              {user?.photoURL ? (
                <img
                  className="w-12 h-12 "
                  style={{ borderRadius: "50%" }}
                  src={user?.photoURL}
                  alt=""
                />
              ) : (
                <img
                  className="w-12 h-12 "
                  style={{ borderRadius: "50%" }}
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbYJVcYGSoZSxYfXFGYVQwaCpLQRKqpmf5Zp77UeZXZXVWgiw-jNwENx_C4GfglwZTR38&usqp=CAU"
                  alt=""
                />
              )}

              <h1 className="font-bold">{user?.username}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chats;
