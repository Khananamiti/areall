import Header from "./Header";
import Library from "./Library";
import Investigation from "./Investigation";
import Geolocation from "./Geolocation";
import Footer from "./Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <Library />
        <Investigation />
        <Geolocation />
      </main>
      <Footer />
    </>
  );
}

export default App;
