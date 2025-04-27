import Banner from "./(components)/banner"
import ProductList from "./product_list";

export default function Home() {
  return (
    <div className="text-black">
      <Banner />
      <ProductList />
    </div>
  );
}
