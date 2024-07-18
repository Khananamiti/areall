import Header from "./Header";
import Library from "./Library";
import Footer from "./Footer";
import Investigation from "./Investigation";



function App() {

  return (
    <>
      <Header />
      <main>
        <Library />
        <Investigation />
        <Analysis />
        <Reserch />
        <Geolocation />
      </main>
      <Footer />
    </>
  );
}

export default App;
