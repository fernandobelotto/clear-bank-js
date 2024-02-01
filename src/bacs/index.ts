import { AxiosResponse } from "axios";
import {
  returnBacsPaymentRealAccountBody,
  returnBacsPaymentRealAccountResponse,
  returnBacsPaymentVirtualAccountInput,
  returnBacsPaymentVirtualAccountResponse,
} from "./types";
import { axiosClient } from "..";

const returnBacsPaymentRealAccount = async (input: {
  accountId: string;
  body: returnBacsPaymentRealAccountBody;
}): Promise<AxiosResponse<returnBacsPaymentRealAccountResponse>> => {
  const response = await axiosClient.post(
    `/v1/Accounts/${input.accountId}/Transactions/Returns`,
    input
  );
  return response;
};
const returnBacsPaymentVirtualAccount = async (input: {
  accountId: string;
  virtualAccountId: string;
  body: returnBacsPaymentVirtualAccountInput;
}): Promise<AxiosResponse<returnBacsPaymentVirtualAccountResponse>> => {
  const response = await axiosClient.post(
    `/v1/Accounts/${input.accountId}/Virtual/${input.virtualAccountId}/Transactions/Returns`
  );
  return response;
};

export default {
  returnBacsPaymentRealAccount,
  returnBacsPaymentVirtualAccount,
};
