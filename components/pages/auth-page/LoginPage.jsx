import React, { useEffect, useState } from "react";
import { TextInput, Button } from "flowbite-react";
import { useRouter } from "next/router";
import axios from "axios";
import Link from "next/link";
import Cookies from "js-cookie";

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  const Auth = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://paace-f178cafcae7b.nevacloud.io/api/login/",
        { email, password }
      );

      if (response.data.success) {
        Cookies.set("user_token", response.data.data.token, {
          expires: new Date(response.data.expires_at),
          path: "/",
        });
        router.push("/");
      }
    } catch (error) {
      setMsg(error.response.data.message);
    }
  };

  return (
    <div className="w-full min-h-[100vh] flex flex-col justify-center items-center">
      <div className="w-full max-w-[500px] flex flex-col justify-center items-center rounded-md border border-blue-400 p-4">
        <h2 className="w-full text-sky-700 font-semibold text-2xl text-center mb-4">
          Silahkan Untuk Login
        </h2>
        <p className="text-red-500 text-center mb-2">{msg && <p>{msg}</p>}</p>
        <form onSubmit={Auth} className="flex w-full flex-col gap-4">
          <div>
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
            <TextInput
              id="password1"
              placeholder="Password ..."
              required
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Button className="mb-4" color="blue" type="submit">
            Login
          </Button>
        </form>
        <p>
          Tidak Memiliki Akun?{" "}
          <Link href="/register" className="font-bold text-green-600">
            Register Disini!!
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
