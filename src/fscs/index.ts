import { AxiosResponse } from "axios";
import { axiosClient } from "..";
import {
  createRetailCustomerInput,
  createRetailCustomerResponse,
  createAccountInput,
  createAccountResponse,
  updateExistingRetailCustomerPersonalInformationInput,
  updateExistingRetailCustomerAddressInput,
} from "./types";

const createRetailCustomer = async (
  input: createRetailCustomerInput
): Promise<AxiosResponse<createRetailCustomerResponse>> => {
  const response = await axiosClient.post(`/v1/customers/retail`, input);
  return response;
};
const createAccount = async (
  input: createAccountInput
): Promise<AxiosResponse<createAccountResponse>> => {
  const response = await axiosClient.post(`/v4/Accounts`, input);
  return response;
};
const updateExistingRetailCustomerPersonalInformation = async (input: {
  customerId: string;
  body: updateExistingRetailCustomerPersonalInformationInput;
}): Promise<AxiosResponse<void>> => {
  const response = await axiosClient.patch(
    `/v1/customers/retail/${input.customerId}`,
    input
  );
  return response;
};
const updateExistingRetailCustomerAddress = async (input: {
  customerId: string;
  body: updateExistingRetailCustomerAddressInput;
}): Promise<AxiosResponse<void>> => {
  const response = await axiosClient.put(
    `/v1/customers/retail/${input.customerId}/currentaddress`,
    input
  );
  return response;
};

export default {
  createRetailCustomer,
  createAccount,
  updateExistingRetailCustomerPersonalInformation,
  updateExistingRetailCustomerAddress,
};
