import Footer from "./Components/Footer";
import MainContent from "./Components/MainContent";
import Banner from "./Components/Banner";
const images = import.meta.glob(
  "./assets/slideshow_images/*.{jpg,jpeg,png,webp}",
  {
    eager: true,
    import: "default",
  }
);
export default function App() {
  const imageList = Object.values(images);
  return (
    <>
      <Banner />
      <MainContent images={imageList} />
      <Footer />
    </>
  );
}
