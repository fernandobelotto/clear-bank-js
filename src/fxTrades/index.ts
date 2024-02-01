import { AxiosResponse } from "axios";
import { createAForeignExchangeFxBuyAndSellOrderInput } from "./types";
import { axiosClient } from "..";

const createAForeignExchangeFxBuyAndSellOrder = async (
  input: createAForeignExchangeFxBuyAndSellOrderInput
): Promise<AxiosResponse<void>> => {
  const response = await axiosClient.post(`/fx/v1/order`, input);
  return response;
};

export default {
  createAForeignExchangeFxBuyAndSellOrder,
};
