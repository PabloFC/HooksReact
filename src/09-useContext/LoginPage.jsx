import { useContext } from "react";
import { UserContext } from "./context/UserContext";

const LoginPage = () => {
  const { user } = useContext(UserContext);
  console.log(user);

  return (
    <div>
      <h1>Login Page</h1>
      <hr />
      <pre>{JSON.stringify(user, null, 3)}</pre>
    </div>
  );
};

export default LoginPage;
