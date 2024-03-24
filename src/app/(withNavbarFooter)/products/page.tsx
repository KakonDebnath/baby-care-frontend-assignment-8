import AllProductsFilter from '@/components/pages/AllProduct/AllProductFilter';
import { TProduct } from '@/type';

const ProductsPage = async () => {
  const res = await fetch(
    'https://assignment-8-backend.vercel.app/api/products'
  );
  const result = await res.json();
  const productData: TProduct[] = result?.data;
  return (
    <div>
      <AllProductsFilter products={productData} />
    </div>
  );
};

export default ProductsPage;
