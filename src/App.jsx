import Header from "./sections/Header";
import Registration from "./sections/Registration";
import Authorization from "./sections/Authorization";
import Library from "./sections/Library";
import Investigation from "./sections/Investigation";
import Analysis from "./sections/Analysis";
import Research from "./sections/Research";
import Geolocation from "./sections/Geolocation";
import Footer from "./sections/Footer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

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
