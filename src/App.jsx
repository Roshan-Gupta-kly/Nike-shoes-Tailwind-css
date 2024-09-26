import{ Hero, Footer, CustomerReviews, PopularProducts, Services, SpecialOffers, Subscribe, SuperQuality } from "./sections"
import Nav from "./components/Nav";

const App = () => (
  <main className="relative selection:bg-slate-300 selection:text-cyan-900">
    <Nav />
    <section className="xl:padding-l wide:padding-r padding-b"><Hero /></section>
    <section className="padding"><PopularProducts /></section>
    <section className="padding"><SuperQuality /></section>
    <section className="padding-x py-10"><Services /></section>
    <section className="padding"><SpecialOffers /></section>
    <section className="padding bg-pale-blue"><CustomerReviews /></section>
    <section className="padding-x sm:py-32 py-16 w-full"><Subscribe /></section>
    <section className="bg-black padding-x padding-t pb-8 text-white"><Footer /></section>
  </main>
);

export default App;
