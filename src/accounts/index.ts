import { AxiosResponse } from "axios";
import { axiosClient } from "..";
import {
  getAllAccountsRealInput,
  getAllAccountsRealResponse,
  createAnAccountRealInput,
  createAnAccountRealResponse,
  getInformationForAnAccountRealInput,
  getInformationForAnAccountRealResponse,
  amendAnAccountRealInput,
  getAccountsVirtualInput,
  getAccountsVirtualResponse,
  createAccountsVirtualInput,
  createAccountsVirtualResponse,
  getAllVirtualAccountsForARealAccountInput,
  getAllVirtualAccountsForARealAccountResponse,
  getInformationForAnAccountVirtualInput,
  getInformationForAnAccountVirtualResponse,
  amendAnAccountVirtualInput,
  amendAnAccountVirtualResponse,
  disableAnAccountVirtualInput,
  disableAnAccountVirtualResponse,
} from "./types";

const getAllAccountsReal = async (
  input?: getAllAccountsRealInput
): Promise<AxiosResponse<getAllAccountsRealResponse>> => {
  const response = await axiosClient.get(`/v3/Accounts`);
  return response;
};
const createAnAccountReal = async (
  input: createAnAccountRealInput
): Promise<AxiosResponse<createAnAccountRealResponse>> => {
  const response = await axiosClient.post(`/v3/Accounts`, input);
  return response;
};
const getInformationForAnAccountReal = async (
  input: getInformationForAnAccountRealInput
): Promise<AxiosResponse<getInformationForAnAccountRealResponse>> => {
  const response = await axiosClient.get(`/v3/Accounts/${input.accountId}`);
  return response;
};
const amendAnAccountReal = async (input: {
  accountId: string;
  body: amendAnAccountRealInput;
}): Promise<AxiosResponse<void>> => {
  const response = await axiosClient.patch(`/v1/Accounts/${input.accountId}`);
  return response;
};
const getAccountsVirtual = async (
  input: getAccountsVirtualInput
): Promise<AxiosResponse<getAccountsVirtualResponse>> => {
  const response = await axiosClient.get(`/v1/Accounts/Virtual`);
  return response;
};
const createAccountsVirtual = async (input: {
  body: createAccountsVirtualInput;
  accountId: string;
}): Promise<AxiosResponse<createAccountsVirtualResponse>> => {
  const response = await axiosClient.post(
    `/v2/Accounts/${input.accountId}/Virtual`
  );
  return response;
};
const getAllVirtualAccountsForARealAccount = async (
  input: getAllVirtualAccountsForARealAccountInput
): Promise<AxiosResponse<getAllVirtualAccountsForARealAccountResponse>> => {
  const response = await axiosClient.get(
    `/v2/Accounts/${input.accountId}/Virtual`
  );
  return response;
};
const getInformationForAnAccountVirtual = async (
  input: getInformationForAnAccountVirtualInput
): Promise<AxiosResponse<getInformationForAnAccountVirtualResponse>> => {
  const response = await axiosClient.get(
    `/v2/Accounts/${input.accountId}/Virtual/${input.virtualAccountId}`
  );
  return response;
};
const amendAnAccountVirtual = async (
  input: amendAnAccountVirtualInput
): Promise<AxiosResponse<amendAnAccountVirtualResponse>> => {
  const response = await axiosClient.patch(
    `/v1/Accounts/${input.accountId}/Virtual/${input.virtualAccountId}`
  );
  return response;
};
const disableAnAccountVirtual = async (
  input: disableAnAccountVirtualInput
): Promise<AxiosResponse<disableAnAccountVirtualResponse>> => {
  const response = await axiosClient.delete(
    `/v1/Accounts/${input.accountId}/Virtual/${input.virtualAccountId}`
  );
  return response;
};

export default {
  getAllAccountsReal,
  createAnAccountReal,
  getInformationForAnAccountReal,
  amendAnAccountReal,
  getAccountsVirtual,
  createAccountsVirtual,
  getAllVirtualAccountsForARealAccount,
  getInformationForAnAccountVirtual,
  amendAnAccountVirtual,
  disableAnAccountVirtual,
};
