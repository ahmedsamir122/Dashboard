import ProductsTable from "../component/dataTable/ProductsTable";
import TopTitle from "../component/TopTitle";
const Products = () => {
  return (
    <div>
      <TopTitle
        nav={"/users/newproduct"}
        titleRight={"Add New Product"}
        titleLeft={"Products"}
      />
      <ProductsTable />
    </div>
  );
};

export default Products;
