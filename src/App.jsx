import { Route, Routes } from "react-router-dom";
import {
  About,
  Contact,
  DetailedEvent,
  EventCheckout,
  Home,
  Login,
  Register,
} from "./pages";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/events/:id" element={<DetailedEvent />} />
      <Route path="/events/checkout/:id" element={<EventCheckout />} />
      <Route path="/*" element={<div>Page not found</div>} />
    </Routes>
  );
};

export default App;