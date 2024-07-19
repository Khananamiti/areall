import Header from "./Header";
import Library from "./Library";
import Investigation from "./Investigation";
import Geolocation from "./Geolocation";
import Footer from "./Footer";
import Research from "./Research";

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
