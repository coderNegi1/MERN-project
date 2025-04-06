import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import axios from "axios";

export default function UserRoute() {
  const [ok, setOk] = useState(false);
  const { token } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const checkUser = async () => {
      try {
        const res = await axios.get("/api/v1/auth/user-auth", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (res.data.ok) {
          setOk(true);
        } else {
          setOk(false);
          navigate("/login");
        }
      } catch (err) {
        console.error("User check failed:", err);
        navigate("/login");
      }
    };

    if (token) checkUser();
    else navigate("/login");
  }, [token, navigate]);

  return ok ? <Outlet /> : <div>Loading...</div>;
}
