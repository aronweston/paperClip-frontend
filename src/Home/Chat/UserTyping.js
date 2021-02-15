import React, { useState } from "react";

const UserTyping = () => {
  const [user, setUser] = useState("User");
  return (
    <div>
      <h2>{user} is typing</h2>
    </div>
  );
};

export default UserTyping;
