import React, { useEffect, useState } from "react";
import "../styles/user_profile.css";
import { FaUserCircle } from "react-icons/fa";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { signOut } from "firebase/auth";

const UserProfile = () => {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  // Redirect to dashboard if the user is logged in
  useEffect(() => {
    if (user && !loading) {
      navigate("/dashboard");
    }
  }, [user, loading, navigate]);

  const logout = async () => {
    try {
      await signOut(auth);
      toast.success("Logged out successfully");
      navigate("/");
    } catch (err) {
      toast.error(`Error: ${err.message}`);
    }
  };

  const [colorSet, setColorSet] = useState({
    "--primary-purple": "#6842EF", // Default primary color
    "--primary-purple-shade": "#8161f4", // Default secondary color
  });

  const handleColorChange = (colors) => {
    Object.entries(colors).forEach(([variable, color]) => {
      document.documentElement.style.setProperty(variable, color);
    });
    setColorSet(colors);
  };

  return (
    <div className="profile-feature">
      {user ? (
        <div className="user-profile">
          {user.photoURL ? (
            <img src={user.photoURL} alt="user-profile" className="img" />
          ) : (
            <FaUserCircle className="no-photo" />
          )}
          <div className="user-details">
            <h4>{user.displayName ? user.displayName : user.email}</h4>
            <button onClick={logout} className="logout-btn">
              Logout
            </button>
          </div>
        </div>
      ) : (
        <p>Loading...</p> // Handle loading state
      )}
      
      <ColorSwitcher handleColorChange={handleColorChange} />
    </div>
  );
};

export default UserProfile;
