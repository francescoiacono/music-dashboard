import { useEffect, useState } from "react";
import { Link } from "./components/common/Link/Link";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const checkIfAuthorized = async () => {
      const response = await fetch(
        "http://localhost:8000/api/auth/authorized",
        {
          credentials: "include",
        }
      );
      const content = await response.json();
      setLoggedIn(content.authorized);
    };

    checkIfAuthorized();
  }, []);
  return (
    <main>
      Hello World!
      {!loggedIn ? (
        <Link to="http://localhost:8000/api/auth/login">Login!</Link>
      ) : (
        <p>You're logged in!</p>
      )}
    </main>
  );
}

export default App;
