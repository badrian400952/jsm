import React from "react";

import Button from "@/component/Button";
import { IPorduct } from "@/interface/product";
import { parseNumbertoRupiah } from "@/utils/formatRupiah";
import { notifWarning } from "@/component/Alert";

interface Props {
  item: IPorduct;
  harga: number;
  setHarga: React.Dispatch<React.SetStateAction<number>>;
  setProductPrice: React.Dispatch<React.SetStateAction<IPorduct[]>>;
}
const ProdukView: React.FC<Props> = ({ ...props }) => {
  const tambahCart = (item: IPorduct) => {
    if (props.harga === 0) {
      notifWarning("Harga item ini adalah 0, tambahkan saldo terlebih dahulu!");
      return;
    }
    if (props.harga < item.price) {
      notifWarning("Total harga tidak mencukupi untuk mengurangi item ini!");
      return;
    }

    props.setHarga((prevHarga) => prevHarga - item.price);
    props.setProductPrice((prev) => [...prev, item]);
  };

  return (
    <div
      key={props.item.id}
      className="w-[300px] bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
    >
      <img
        className="p-8 rounded-t-lg w-full h-[350px] object-cover"
        src={props.item.image}
        alt="product image"
      />
      <div className="px-5 pb-5">
        <a href="#">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {props.item.name}
          </h5>
        </a>
        <div className="flex items-end justify-between mt-2">
          <span className="text-2xl font-bold text-gray-900 dark:text-white">
            {parseNumbertoRupiah(props.item.price)}
          </span>
          <Button
            onClick={() => tambahCart(props.item)}
            type="submit"
            classname="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
          >
            Add to cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProdukView;
