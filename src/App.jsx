import Hero from "./components/hero";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <main style={{ height: "100vh" }}>
      <NavBar></NavBar>
      <Hero></Hero>
    </main>
  );
};

export default App;
