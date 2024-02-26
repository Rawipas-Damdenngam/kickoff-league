import React from "react";

export default function RegisterAPI(props) {
  const { email, password } = props;
  
  const register = async (email, password) => {
    const res = await fetch("http://127.0.0.1:8080/auth/register/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
  };

  return <div>RegisterAPI</div>;
}
