import React, { useEffect, useState } from "react";
import { JSX } from "react/jsx-runtime";

type Props = {
  title: string;
};

type users = {
  username: string;
};

export default function Counter({ title }: Props) {
  const [user, setUser] = useState<users[]>([]);
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  useEffect(() => {}, [visible]);
  console.log("visible active");

  console.log(user);

  return (
    <div className={visible ? "bg-blue-100" : "bg-red-100"}>
      <h1>{title}</h1>
      {user.map((users) => (
        <div>
          <h2>{users.username}</h2>
        </div>
      ))}
      <button
        className="border-2 bg-blue-300 hover:cursor-pointer"
        onClick={() => {
          setVisible(!visible);
        }}
      >
        Toggle
      </button>
    </div>
  );
}
