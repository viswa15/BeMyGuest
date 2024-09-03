import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import "./App.css";
import Website from "./pages/Website";
import Layouts from "./components/Layout";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import LoaderView from "./components/LoaderView";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Faqpage from "./pages/Faq";
import Weddings from "./pages/Weddings";
import WeddingPage from "./pages/WeddingPage";
import ClientGallery from "./pages/ClientGallery";
import ContactUs from "./pages/ContactUs";
import Login from "./components/Login";
import Register from "./components/Register";
import HostingLandingPage from "./pages/HostingLandingPage";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Suspense fallback={<LoaderView />}>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route element={<Layouts />}>
              <Route path="/" element={<Website />} />
              <Route path="/weddings">
                <Route index element={<Weddings />} />
                <Route path=":_id" element={<WeddingPage />} />
              </Route>
              <Route path="/client-gallery" element={<ClientGallery />} />
              <Route path="/contact-us" element={<ContactUs />} />
              <Route path="/faq" element={<Faqpage />} />
              <Route path="/hosting-landingpage" element={<HostingLandingPage />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
      <ToastContainer />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
