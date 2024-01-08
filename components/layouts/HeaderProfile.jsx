import React, { useEffect, useState } from "react";
import { Navbar, Dropdown } from "flowbite-react";
import axios from "axios";
import { useRouter } from "next/router";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


const HeaderProfile = () => {
  const router = useRouter();

  const logOut = async () => {
    document.cookie =
      "user_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    try {
      await axios.get("https://paace-f178cafcae7b.nevacloud.io/api/logout");
    } catch (error) {
      console.log(error);
    }
    router.push("/login");
  };

  return (
    <Navbar className="shadow-lg mb-2 rounded-2xl my-8 mx-4 bg-gray-200" fluid>
      <Navbar.Brand href="/">
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Chat and Talk Here
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>

          }
        >
          <Link href={"/profile"}>
            <Dropdown.Item>My Profile</Dropdown.Item>
          </Link>
          <Dropdown.Divider />
          <Dropdown.Item onClick={logOut}>Sign out</Dropdown.Item>
        </Dropdown>
      </div>
    </Navbar>
  );
};

export default HeaderProfile;
