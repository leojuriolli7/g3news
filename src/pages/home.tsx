import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { NewsList } from "../components/NewsList";

export function Home() {
  return (
    <>
      <Header />
      <NewsList />
      <Footer />
    </>
  );
}
