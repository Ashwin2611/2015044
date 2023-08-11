import { useEffect, useState } from "react";
import style from "./ConnectingToServer.module.css";
import { useNavigate } from "react-router-dom";

//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTE3MzQ5MDYsImNvbXBhbnlOYW1lIjoiVHJhaW4gQ2VudGVyYWwiLCJjbGllbnRJRCI6IjQxMDc5NjA4LWQ3NGEtNDJmMS1hMGJjLTA5YTU4M2NhYTk0YyIsIm93bmVyTmFtZSI6IiIsIm93bmVyRW1haWwiOiIiLCJyb2xsTm8iOiIyMDE1MDQ0In0.UZ6qLnJTpPvlZVb28vfHMhIHh4X4X5zCZPi2d22Deoo
export default function ConnectingToServer() {
  const [userdetails, setuserDetails] = useState({
    companyName: "",
    ownerName: "",
    rollNo: "",
    ownerEmail: "",
    accessCode: "",
  });
  const navigate = useNavigate();
  //  const [data,setdata]=useState("");
  function SubmitHandler(e) {
    e.preventDefault();
    const { name, value } = e.target;
    setuserDetails((prev) => ({ ...prev, [name]: value }));
  }

  async function Submit(e) {
    console.log(userdetails);
    e.preventDefault();
    const response = await fetch("http://20.244.56.144/train/register", {
      method: "POST",
      body: JSON.stringify(userdetails),
      headers: { "Content-type": "application/json" },
    });
    const res = await response.json();
    if (response.ok) {
      console.log(res);
      setdata(res);
    } else {
      console.log("error", res);
    }
  }

  useEffect(() => {
    async function TokenHandler() {
      const res1 = await fetch("http://20.244.56.144/train/auth", {
        method: "POST",
        body: JSON.stringify({
          companyName: "Train Centeral",
          clientID: "41079608-d74a-42f1-a0bc-09a583caa94c",
          ownerName: "Ashwin",
          ownerEmail: "Ashwin@gmail.com",
          rollNo: "2015044",
          clientSecret: "cPSiSYbqFbTLaNCe",
        }),
        headers: { "Content-type": "application/json" },
      });
      const response1 = await res1.json();
      if (res1.ok) {
        console.log(response1);
        navigate("/trainDetails", {
          state: {
            token: response1.access_token,
          },
        });
      } else {
        console.log("error", response1);
      }
    }
    TokenHandler();
  }, []);
  return (
    <div className={style.container}>
      <h1 className={style.title}>Register</h1>
      <form onSubmit={Submit}>
        <input
          name="companyName"
          value={userdetails.companyName}
          type="text"
          placeholder="companyName"
          onChange={SubmitHandler}
        />
        <input
          name="ownerName"
          value={userdetails.ownerName}
          type="text"
          placeholder="ownerName"
          onChange={SubmitHandler}
        />
        <input
          name="rollNo"
          value={userdetails.rollNo}
          type="Number"
          placeholder="rollNo"
          onChange={SubmitHandler}
        />
        <input
          name="ownerEmail"
          value={userdetails.ownerEmail}
          type="email"
          placeholder="Email"
          onChange={SubmitHandler}
        />
        <input
          name="accessCode"
          type="password"
          value={userdetails.accessCode}
          placeholder="Password"
          onChange={SubmitHandler}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
