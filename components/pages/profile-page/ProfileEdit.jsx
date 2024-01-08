import React, { useEffect, useState } from "react";
import { Label, Textarea, Button } from "flowbite-react";
import axios from "axios";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

const ProfileEdit = () => {
  const router = useRouter();
  const {id} = router.query;
  const [description, setDescription] = useState("");

  const getPostById = async () => {
    try {
      const token = Cookies.get("user_token");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.get(
        `https://paace-f178cafcae7b.nevacloud.io/api/post/${id}`,
        config
      );
      // console.log(response.data.data)
      setDescription(response.data.data.description);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getPostById();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const token = Cookies.get("user_token");
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        await axios.patch(`https://paace-f178cafcae7b.nevacloud.io/api/post/update/${id}`, {description}, config)
        router.push('/profile')
    } catch (error) {
        console.log(error)
    }
  }

  return (
    <>
      <div className="w-full min-h-[100vh] flex flex-col justify-center items-center">
        <div className="w-full max-w-[500px] flex flex-col justify-center items-center gap-8">
          <h1 className="mt-5 p-3 text-2xl font-semibold">FORM EDIT</h1>
          <div className="shadow-xl p-3">
            <form onSubmit={handleSubmit} className="flex max-w-md flex-col gap-4">
              <div className="max-w-md">
                <div className="mb-2 block">
                  <Label htmlFor="comment" value="Your description" />
                </div>
                <Textarea
                  id="comment"
                  placeholder="Bagikan pengalaman berhargamu disini..."
                  required
                  rows={4}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <Button color="success" type="submit">
                Submit
              </Button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileEdit;
