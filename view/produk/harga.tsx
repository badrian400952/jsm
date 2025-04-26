import Button from "@/component/Button";
import { IHarga } from "@/interface/product";
import { parseNumbertoRupiah } from "@/utils/formatRupiah";
import React from "react";

const harga: IHarga[] = [
  { harga: 2000 },
  { harga: 5000 },
  { harga: 10000 },
  { harga: 20000 },
  { harga: 50000 },
];

interface Props {
  setHarga: React.Dispatch<React.SetStateAction<number>>;
  Totalharga: number;
}
const HargaView: React.FC<Props> = ({ ...props }) => {
  const handleAddHarga = (item: number) => {
    props.setHarga((prevHarga) => prevHarga + item);
  };
  return (
    <>
      <div className="px-8 flex justify-start gap-10">
        <div>
          <p className="px-8 font-semibold">Harga</p>
          <div className="px-8 flex justify-start gap-6 mt-5 mb-5">
            {harga.map((item: IHarga, index: number) => {
              return (
                <div key={index}>
                  <Button
                    onClick={() => handleAddHarga(item.harga)}
                    classname="bg-gray-500 px-8 hover:bg-gray-400"
                    type="submit"
                  >
                    {parseNumbertoRupiah(item.harga)}
                  </Button>
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <p className="px-8 font-semibold">Sisa Uang Anda</p>
          <p className="px-8 mt-10">{parseNumbertoRupiah(props.Totalharga)}</p>
        </div>
      </div>
    </>
  );
};

export default HargaView;
