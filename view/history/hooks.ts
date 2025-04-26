import { ENV } from "@/constans";
import { IPorduct } from "@/interface/product";
import axios from "axios";
import { useEffect, useState } from "react";

const Hooks = () => {
    const [dataHostory, setDataHistory] = useState<IPorduct[]>([]);

    const handleFetch = async () => {
        try {
            const response = await axios.get(`${ENV.URL_ORIGIN}/cart`);
            const jsonData = await response.data;
            setDataHistory(jsonData);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        handleFetch();
    }, [])
    return {
        data: { dataHostory },
        method: {}
    }
}

export default Hooks
