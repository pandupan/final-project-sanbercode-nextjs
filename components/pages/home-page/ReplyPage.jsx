import React, { useEffect, useState } from "react";
import { Button, Textarea } from "flowbite-react";
import axios from "axios";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

const Reply = () => {
  const router = useRouter();
  const { id } = router.query;
  const [replies, setReplies] = useState("");
  const [description, setDescription] = useState("");

  const getReplies = async () => {
    try {
      const token = Cookies.get("user_token");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.get(
        `https://paace-f178cafcae7b.nevacloud.io/api/replies/post/${id}`,
        config
      );
      console.log('=>' ,response.data.data)
      setReplies(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getReplies();
  }, []);

  const addReply = async (e) => {
    e.preventDefault();
    try {
      const token = Cookies.get("user_token");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
      await axios.post(`https://paace-f178cafcae7b.nevacloud.io/api/replies/post/${id}`, {description}, config)
      getReplies()
      setDescription("")
    } catch (error) {
      console.log(error)
    }
  };

  const handleDelete = async (deleteId) => {
    try {
      const token = Cookies.get("user_token")
      const config = {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
      await axios.delete(`https://paace-f178cafcae7b.nevacloud.io/api/replies/delete/${deleteId}`, config)
      getReplies()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="w-full min-h-[100vh] flex flex-col justify-center items-center">
      <div className="w-full max-w-[500px] flex flex-col justify-center items-center gap-8">
        <h2 className="w-full text-sky-700 font-semibold text-2xl text-center mb-4">
          Silahkan Untuk Membalas Chat
        </h2>
        <form onSubmit={addReply} className="flex w-full flex-col gap-4">
          <div className="w-full" id="textarea">
            <Textarea
              id="comment"
              placeholder="reply post..."
              required
              rows={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <Button type="submit" color="info">
            Reply
          </Button>
        </form>
        <div className="shadow-xl mt-3 w-full">
          {replies.length > 0 ? (
            replies.map((reply,id) => (
              <div key={id} className="bg-zinc-100 p-3 mb-4 rounded-lg">
                <h2 className="text-xl font-semibold">{reply.user.name}</h2>
                <p>{new Date(reply.created_at).toLocaleDateString("en-US")}</p>
                <p>{reply.description}</p>
                {reply.is_own_reply && <button type="button" value={reply.id} onClick={(e) => handleDelete(e.target.value)} className="bg-red-600 rounded-lg py-2 px-4 text-slate-50 mt-2">Delete</button>}
              </div>
            ))
          ) : (
            null
          )}
        </div>
      </div>
    </div>

  );
};

export default Reply;
