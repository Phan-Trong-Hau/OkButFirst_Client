import { useContext } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Footer from "./Components/Footer";
import Header from "./Components/Header";

import LoadingSpinner from "./Components/Loading";

import RouterApp from "./routes";
import AuthContext from "./Context/AuthProvider";

function App() {
  const { loading } = useContext(AuthContext);

  return (
    <div className="App">
      <Router>
        <Header />
        {loading ? <LoadingSpinner /> : <RouterApp />}
        <Footer />
      </Router>
    </div>
  );
}

export default App;
