import React, { useState } from "react";
import api from "../api/api";

export default function AdminAddProduct() {
  const [title, settitle] = useState("");
  const [disc, setdisc] = useState("");
  const [category, setcategory] = useState("");
  const [price, setprice] = useState("");
  const [image, setimage] = useState(null);
  const [loading , setloading]=useState(false);
  const [message ,setmessage]=useState("");
  const [msgtype , setmsgtype]=useState("");

  const handlesubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();

      formData.append("title", title);
      formData.append("disc", disc);
      formData.append("category", category);
      formData.append("price", price);
      formData.append("image", image);
      setloading(true);
      const res = await api.post("/products/", formData);
       settitle("");
       setdisc("");
       setcategory("");
       setprice("");
       setimage(null);
       console.log(res.data.message);
      setmsgtype("success");
      setmessage(res.data.message);
    } catch (error) {
      console.log(error);
      if(error.response?.status===409){
        setmsgtype("error");
        setmessage(error.response.data.message);
      }
      else{
        setmsgtype("error");
        setmessage("product upload failed");
      }
    }
    finally{
      setloading(false);
      setTimeout(()=>{
        setmessage("");
        setmsgtype("");
      },3000);
    }
  };

  return (
    <div className="flex items-center justify-center bg-gradient-to-r from-[#f7e9df] via-[#f8e5d6] to-[#fed7ad] w-full min-h-screen">

      <form
        onSubmit={handlesubmit}
        className="flex flex-col items-center justify-center mx-10 bg-white max-w-[470px] xl:mx-auto my-20 w-full rounded-xl border p-4"
      >

        <h3 className='font-semibold text-xl font-["Playfair_Display"]'>
          Add new product
        </h3>

        <input
          className="w-full px-3 py-2 rounded-lg mt-10 border"
          type="text"
          placeholder="enter title"
          value={title}
          onChange={(e) => settitle(e.target.value)}
        />

        <input
          className="w-full px-3 py-2 rounded-lg mt-5 border"
          type="text"
          placeholder="enter product description"
          value={disc}
          onChange={(e) => setdisc(e.target.value)}
        />

        <input
          className="w-full px-3 py-2 rounded-lg mt-5 border"
          type="text"
          placeholder="category"
          value={category}
          onChange={(e) => setcategory(e.target.value)}
        />

        <input
          className="w-full px-3 py-2 rounded-lg mt-5 border"
          type="number"
          placeholder="price"
          value={price}
          onChange={(e) => setprice(e.target.value)}
        />

        <input
          className="w-full px-3 py-6 rounded-lg mt-5 border"
          type="file"
          accept="image/*"
          onChange={(e) => setimage(e.target.files[0])}
        />
        <div className="h-5 my-1  flex items-center ">
          {message && (
            <p className={`textl-sm font-semibold ${msgtype === "success" ? "text-green-600" : "text-red-500"}`}>{message}</p>
          )}

        </div>

        <button
          type="submit"
          disabled={loading}
          className="bg-[#bd5d3c] text-white font-semibold hover:bg-[#a94f32] transition px-10 py-2 rounded-lg mt-5"
        >
          {loading?"Loading...":"Submit"}
        </button>

      </form>
    </div>
  );
}