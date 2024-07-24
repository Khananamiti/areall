import Header from "./Header";
import Library from "./Library";
import Investigation from "./Investigation";
import Geolocation from "./Geolocation";
import Research from "./Research";
import Footer from "./Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <Library />
        <Investigation />
        <Geolocation />
        <Research />
      </main>
      <Footer />
    </>
  );
}

export default App;
