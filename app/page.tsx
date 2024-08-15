import { Banner } from "./components/Banner/Banner";
import { Cook } from "./components/Cook";
import Expert from "./components/Expert";
import Feature from "./components/Feature";
import Gallery from "./components/Gallery";
import Newsletter from "./components/Newsletter";



export default function Home() {
  return (
    <main>
        <Banner />
        <Feature />
        <Cook />
        <Expert />
        <Gallery />
       <Newsletter />
    </main>
  );
}
