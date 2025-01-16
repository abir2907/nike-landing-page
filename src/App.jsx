import {
  CustomerReviews,
  Footer,
  Hero,
  PopularProducts,
  Services,
  SpecialOffer,
  Subscribe,
  SuperQuality,
} from "./sections";
import Nav from "./components/Nav";

const App = () => (
  <main className="max-container relative">
    <Nav />
    <section className="xl:padding-l wide:padding-r padding-b max-container">
      <Hero />
    </section>
    <section className="padding max-container">
      <PopularProducts />
    </section>
    <section className="padding max-container">
      <SuperQuality />
    </section>
    <section className="padding-x max-container py-10">
      <Services />
    </section>
    <section className="padding max-container">
      <SpecialOffer />
    </section>
    <section className="padding bg-pale-blue">
      <CustomerReviews className="w-full" />
    </section>
    <section className="padding-x w-full py-16 sm:py-32">
      <Subscribe />
    </section>
    <section className="padding-x padding-t bg-black pb-8">
      <Footer />
    </section>
  </main>
);

export default App;
