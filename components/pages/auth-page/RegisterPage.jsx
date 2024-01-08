import React, { useState } from "react";
import { Label, TextInput, Button } from "flowbite-react";
import axios from "axios";
import { useRouter } from "next/router";

const Register = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const saveUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`https://paace-f178cafcae7b.nevacloud.io/api/register`, {
        name,
        email,
        password,
      });
      router.push("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full min-h-[100vh] flex flex-col justify-center items-center">
      <div className="w-full max-w-[500px] flex flex-col justify-center items-center rounded-md border border-blue-400 p-4">
      <h2 className="w-full text-sky-700 font-semibold text-2xl text-center mb-4">
          Silahkan Untuk Registrasi
        </h2>
        <form onSubmit={saveUser} className="flex w-full flex-col gap-4 shadow-lg">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="name" value="Name" />
            </div>
            <TextInput
              id="name"
              placeholder="Name ..."
              required
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email" value="Email" />
            </div>
            <TextInput
              id="email"
              placeholder="Email ..."
              required
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password" value="Password" />
            </div>
            <TextInput
              id="password"
              required
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Button color="blue" type="submit">
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Register;
