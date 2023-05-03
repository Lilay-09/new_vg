import { useRef } from "react";

function HomePage() {
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const contactRef = useRef(null);

  function handleScroll(ref) {
    ref.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div>
      <nav>
        <button onClick={() => handleScroll(aboutRef)}>About</button>
        <button onClick={() => handleScroll(servicesRef)}>Services</button>
        <button onClick={() => handleScroll(contactRef)}>Contact</button>
      </nav>
      <section ref={aboutRef}>
        <h2>About Us</h2>
        <p>Some information about our company...</p>
      </section>
      <section ref={servicesRef}>
        <h2>Our Services</h2>
        <p>Some information about the services we offer...</p>
      </section>
      <section ref={contactRef}>
        <h2>Contact Us</h2>
        <p>Our contact information...</p>
      </section>
    </div>
  );
}

export default HomePage;
