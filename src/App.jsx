import Header from "./pages/Header";
import Registration from "./pages/Registration";
import Authorization from "./pages/Authorization";
import Library from "./Pages/Library";
import Investigation from "./pages/Investigation";
import Analysis from "./pages/Analysis";
import Research from "./pages/Research";
import Geolocation from "./pages/Geolocation";
import Footer from "./pages/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <Header />
      <main>
        <Registration />
        <Authorization />
        <Library />
        <Investigation />
        <Analysis />
        <Research />
        <Geolocation />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
