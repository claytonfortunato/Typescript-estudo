import React from "react";

interface IUser {
  name: string;
  email?: string;
}

interface Props {
  user: IUser;
}

const User: React.FC<Props> = ({ user }) => {
  return (
    <div>
      <strong>Nome: </strong> {user.name}
      <strong>Email: </strong> {user.email || "Não possui e-mail"}
    </div>
  );
};

export default User;
