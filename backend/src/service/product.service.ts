import { Product } from "../model/product.ts";

const getProducts = (): Product[] => {
  return [
    {
      id: "1",
      name: "Cimento Nassau",
      value: 18.9,
      quantity: 18,
      weight: "25 Kg",
      obs: "",
      image: "",
    },
    {
      id: "2",
      name: "Cimento Votorantin",
      value: 20.5,
      quantity: 18,
      weight: "25 Kg",
      obs: "",
      image: "",
    },
    {
      id: "3",
      name: "Cimento CSN",
      value: 22.9,
      quantity: 18,
      weight: "25 Kg",
      obs: "",
      image: "",
    },
    {
      id: "4",
      name: "Cimento Campeão",
      value: 15.9,
      quantity: 18,
      weight: "25 Kg",
      obs: "",
      image: "",
    },
  ];
};

const ProductService = {
  getProducts,
};

export default ProductService;
