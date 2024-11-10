import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();

  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };
  return (
    <div className="absolute px-2 py-2 w-screen bg-gradient-to-b from-black z-10 flex justify-between ">
      <img
        className="w-44"
        //src="https://images.ctfassets.net/y2ske730sjqp/1aONibCke6niZhgPxuiilC/2c401b05a07288746ddf3bd3943fbc76/BrandAssets_Logos_01-Wordmark.jpg?w=940"
        src="https://i.pinimg.com/736x/09/f7/39/09f739cb30ca8a17f1a655cadd0f76a4.jpg"
        alt="logo"
      />
      {user && (
        <div className="flex p-2 ">
          <img
            className="w-10 h-10 "
            alt="usericon"
            //  src="https://i.pinimg.com/originals/5b/50/e7/5b50e75d07c726d36f397f6359098f58.png"
            src={user?.photoURL}
          />
          <button onClick={handleSignOut} className="flex font-bold text-white">
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
