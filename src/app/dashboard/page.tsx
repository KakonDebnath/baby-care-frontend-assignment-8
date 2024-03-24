import ProductTable from '@/components/pages/Dashboard/ProductTable';

import { TProduct } from '@/type';

const AdminDashboardPage = async () => {
  const res = await fetch(
    'https://assignment-8-backend.vercel.app/api/products',
    {
      cache: 'no-store',
    }
  );
  const result = await res.json();
  const productData: TProduct[] = result?.data;
  return (
    <>
      <h2 className="text-center py-4">All Products</h2>
      <ProductTable productsData={productData} />
    </>
  );
};

export default AdminDashboardPage;
