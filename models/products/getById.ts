import { IProduct } from "./interfaceProducts";

import getAll from "./getAll";

const getById = async (id: string) => {
  const products: IProduct[] = await getAll();
  const result = products.find((el) => el.id === id);

  if (!result) {
    return null;
  }

  return result;
};

export default getById;
