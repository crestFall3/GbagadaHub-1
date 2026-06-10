import { Nav } from "./component/nav";
import { Routes, Route } from "react-router";
import { About } from "./component/about";
import { Contact } from "./component/contact";
import { Pricing } from "./component/pricing";
import { Home } from "./component/home";
import { Footer } from "./component/footer";
import { ModalProvider } from "./context/ModalContext";

function App() {
  return (
    <ModalProvider>
      <div className="max-w-268 px-4 sm:px-auto sm:mx-auto bg-bg relative">
        <div className="fixed top-0 left-0 w-full md:px-10 z-40">
          <Nav />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/pricing" element={<Pricing />} />
        </Routes>

        <Footer />
      </div>
    </ModalProvider>
  );
}

export default App;

