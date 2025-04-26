import { notifSucces } from "@/component/Alert";
import { ENV } from "@/constans";
import { IPorduct } from "@/interface/product";
import axios from "axios";
import { useEffect, useState } from "react";

const Hooks = () => {
    const [data, setData] = useState<IPorduct[]>([]);

    const handleFetch = async () => {
        try {
            const response = await axios.get(`${ENV.URL_ORIGIN}/foods`);
            const jsonData = await response.data;
            setData(jsonData);
        } catch (error) {
            console.log(error);
        }
    };
    const handleSimpanHarga = async (productPrice: IPorduct[]) => {
        console.log(productPrice);
        try {
            await axios.post(`${ENV.URL_ORIGIN}/cart`, productPrice);
            handleFetch();
            notifSucces("Simpan Harga Berhasil");
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        handleFetch();
    }, [])
    return {
        data: { data },
        method: { handleSimpanHarga }
    }
}

export default Hooks
