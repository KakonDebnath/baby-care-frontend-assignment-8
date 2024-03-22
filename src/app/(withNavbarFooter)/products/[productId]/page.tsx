import { TDynamicProductParams } from "@/type";

const DynamicProductPage = ({ params }: TDynamicProductParams) => {
  console.log(params.productId);
  return <div>Dynamic Product Page</div>;
};

export default DynamicProductPage;
