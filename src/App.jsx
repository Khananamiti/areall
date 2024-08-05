import Header from "./Header";
import Library from "./Library";
import Investigation from "./Investigation";
import Analysis from "./Analysis";
import Research from "./Research";
import Geolocation from "./Geolocation";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";
import Registration from "./Registration";

function App() {
  return (
    <>
      <Header />
      <main>
        <Registration />
        <Library />
        <Investigation />
        <Analysis/>
        <Research />
        <Geolocation />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
