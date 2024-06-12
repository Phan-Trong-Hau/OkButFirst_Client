import { useContext } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Footer from "./Components/Footer";
import Header from "./Components/Header";

import LoadingSpinner from "./Components/Loading";

import LoadingContext from "./Context/LoadingProvider";
import RouterApp from "./routes";

function App() {
  const { loading } = useContext(LoadingContext);

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
