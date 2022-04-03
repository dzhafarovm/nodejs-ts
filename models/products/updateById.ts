import getAll from "./getAll";
import updateProducts from "./updateProducts";
import { IProduct } from "./interfaceProducts";

const updateById = async (id: string, data: IProduct) => {
  const products: IProduct[] = await getAll();
  const indx = products.findIndex((el) => el.id === id);

  if (indx === -1) {
    return null;
  }

  products[indx] = { ...data, id };
  await updateProducts(products);

  return products[indx];
};

export default updateById;
