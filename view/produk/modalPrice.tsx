import Button from "@/component/Button";
import { IPorduct } from "@/interface/product";
import { parseNumbertoRupiah } from "@/utils/formatRupiah";
import React from "react";
import { FaTrash } from "react-icons/fa";

interface Props {
  productPrice: IPorduct[];
  setIcart: React.Dispatch<React.SetStateAction<boolean>>;
  setProductPrice: React.Dispatch<React.SetStateAction<IPorduct[]>>;
  handleSimpanHarga: (productPrice: IPorduct[]) => Promise<void>;
}

const ModalPrice: React.FC<Props> = ({
  productPrice,
  setIcart,
  setProductPrice,

  handleSimpanHarga,
}) => {
  const handleSimpanan = () => {
    setProductPrice([]);
    handleSimpanHarga(productPrice);
  };
  return (
    <>
      {productPrice.length > 0 ? (
        <div className="m-10 flex flex-wrap justify-center gap-6">
          {productPrice.map((item, x) => (
            <div
              key={item.id}
              className="w-[220px] h-[340px] bg-white border border-gray-200 shadow-sm rounded-lg flex flex-col overflow-hidden"
            >
              <div className="flex-1 flex items-center justify-center p-4 bg-gray-50">
                <img
                  src={item.image}
                  alt={item.name}
                  className="max-h-40 object-contain"
                />
              </div>

              <div className="flex flex-col justify-between p-4 h-[140px]">
                <h5 className="text-sm font-semibold tracking-tight text-gray-900 mb-2 text-center line-clamp-2">
                  {item.name}
                </h5>
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-sm font-bold text-gray-900">
                    {parseNumbertoRupiah(item.price)}
                  </span>
                  <Button
                    onClick={() => {}}
                    type="button"
                    classname="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-xs px-3 py-1"
                  >
                    <FaTrash
                      className="w-4 h-4"
                      onClick={() => {
                        setProductPrice((prev) =>
                          prev.filter((i, index) => index !== x)
                        );
                      }}
                    />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex justify-center m-auto">
          <h1 className="text-2xl font-bold text-gray-900 mt-10">
            Keranjang Kosong
          </h1>
        </div>
      )}
      <div className="flex justify-center m-auto gap-5">
        <Button
          onClick={() => setIcart(false)}
          type="button"
          classname="bg-red-500 text-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-xs px-3 py-1"
        >
          Close
        </Button>
        <Button
          onClick={() => {
            setIcart(false);
            handleSimpanan();
          }}
          type="button"
          classname="bg-emerald-500 text-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-xs px-3 py-1"
        >
          Simpan
        </Button>
      </div>
    </>
  );
};

export default ModalPrice;
