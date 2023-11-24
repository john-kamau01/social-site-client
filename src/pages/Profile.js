import axios from "axios";
import { useEffect } from "react";

const Profile = () => {
  useEffect(() => {
    (async () => {
      const response = await axios.get("http://localhost:8081/api/getSession");
      console.log(response);
    })();
  });

  return <div>Profile</div>;
};
export default Profile;
