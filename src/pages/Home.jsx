import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Home = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");

    // No token = not logged in, send to login
    if (!token) {
      navigate("/login");
      return;
    }

    // Fetch the logged-in user's info from your backend
    const fetchUser = async () => {
      try {
        const { data } = await axios.get(
          "https://sangini-e893.onrender.com/me",
          {
            headers: { Authorization: token },
          },
        );
        setUsername(data.username);
        toast(`Hello ${data.username}`, { position: "top-right" });
      } catch (err) {
        localStorage.removeItem("token");
        navigate("/login");
      }
    };

    fetchUser();
  }, [navigate]);

  const Logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <>
      <div className="home_page">
        <h4>
          Welcome <span>{username}</span>
        </h4>
        <button onClick={Logout}>LOGOUT</button>
      </div>
      <ToastContainer />
    </>
  );
};

export default Home;
