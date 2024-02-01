import { AxiosResponse } from "axios";
import {
  createANewAccountRealInput,
  createANewAccountRealResponse,
  getAllAccountsRealInput,
  getAllAccountsRealResponse,
  getInformationForAnAccountRealInput,
  getInformationForAnAccountRealResponse,
  amendThePropertiesOfAnAccountRealInput,
  amendThePropertiesOfAnAccountRealResponse,
  updateTheStatusOfAnAccountRealInput,
  updateTheStatusOfAnAccountRealResponse,
  addACurrencyToAnExistingAccountRealInput,
  addACurrencyToAnExistingAccountRealResponse,
  getTheBalanceOfAnAccountRealInput,
  getTheBalanceOfAnAccountRealResponse,
  closeAnExistingAccountRealInput,
  closeAnExistingAccountRealResponse,
  createAnAccountVirtualInput,
  createAnAccountVirtualResponse,
  getInformationForAnAccountVirtualInput,
  getInformationForAnAccountVirtualResponse,
  amendThePropertiesOfAnAccountVirtualInput,
  updateTheStatusOfAnAccountVirtualInput,
  closeAnAccountVirtualInput,
} from "./types";
import { axiosClient } from "..";

const createANewAccountReal = async (
  input: createANewAccountRealInput
): Promise<AxiosResponse<createANewAccountRealResponse>> => {
  const response = await axiosClient.post(`/mccy/v1/Accounts`, input);
  return response;
};
const getAllAccountsReal = async (
  input: getAllAccountsRealInput
): Promise<AxiosResponse<getAllAccountsRealResponse>> => {
  const response = await axiosClient.get(`/mccy/v1/Accounts`);
  return response;
};
const getInformationForAnAccountReal = async (
  input: getInformationForAnAccountRealInput
): Promise<AxiosResponse<getInformationForAnAccountRealResponse>> => {
  const response = await axiosClient.post(
    `/mccy/v1/Accounts/${input.accountId}`
  );
  return response;
};
const amendThePropertiesOfAnAccountReal = async (input: {
  accountId: string;
  body: amendThePropertiesOfAnAccountRealInput;
}): Promise<AxiosResponse<amendThePropertiesOfAnAccountRealResponse>> => {
  const response = await axiosClient.post(
    `/mccy/v1/Accounts/${input.accountId}`,
    input
  );
  return response;
};
const updateTheStatusOfAnAccountReal = async (input: {
  accountId: string;
  body: updateTheStatusOfAnAccountRealInput;
}): Promise<AxiosResponse<updateTheStatusOfAnAccountRealResponse>> => {
  const response = await axiosClient.patch(
    `/mccy/v1/Accounts/${input.accountId}/status`,
    input
  );
  return response;
};
const addACurrencyToAnExistingAccountReal = async (input: {
  accountId: string;
  body: addACurrencyToAnExistingAccountRealInput;
}): Promise<AxiosResponse<addACurrencyToAnExistingAccountRealResponse>> => {
  const response = await axiosClient.post(
    `/mccy/v1/Accounts/${input.accountId}/currencies`,
    input
  );
  return response;
};
const getTheBalanceOfAnAccountReal = async (
  input: getTheBalanceOfAnAccountRealInput
): Promise<AxiosResponse<getTheBalanceOfAnAccountRealResponse>> => {
  const response = await axiosClient.get(
    `/mccy/v1/Accounts/${input.accountId}/balances`
  );
  return response;
};
const closeAnExistingAccountReal = async (
  input: closeAnExistingAccountRealInput
): Promise<AxiosResponse<closeAnExistingAccountRealResponse>> => {
  const response = await axiosClient.delete(
    `/mccy/v1/Accounts/${input.accountId}`
  );
  return response;
};
const createAnAccountVirtual = async (
  input: createAnAccountVirtualInput
): Promise<AxiosResponse<createAnAccountVirtualResponse>> => {
  const response = await axiosClient.post(`/mccy/v1/VirtualAccounts`, input);
  return response;
};
const getInformationForAnAccountVirtual = async (
  input: getInformationForAnAccountVirtualInput
): Promise<AxiosResponse<getInformationForAnAccountVirtualResponse>> => {
  const response = await axiosClient.get(
    `/mccy/v1/VirtualAccounts/${input.virtualAccountId}`
  );
  return response;
};
const amendThePropertiesOfAnAccountVirtual = async (input: {
  virtualAccountId: string;
  body: amendThePropertiesOfAnAccountVirtualInput;
}): Promise<AxiosResponse<void>> => {
  const response = await axiosClient.patch(
    `/mccy/v1/VirtualAccounts/${input.virtualAccountId}`,
    input
  );
  return response;
};
const updateTheStatusOfAnAccountVirtual = async (input: {
  virtualAccountId: string;
  body: updateTheStatusOfAnAccountVirtualInput;
}): Promise<AxiosResponse<void>> => {
  const response = await axiosClient.put(
    `/mccy/v1/VirtualAccounts/${input.virtualAccountId}/status`,
    input
  );
  return response;
};
const closeAnAccountVirtual = async (input: {
  virtualAccountId: string;
  body: closeAnAccountVirtualInput;
}): Promise<AxiosResponse<void>> => {
  const response = await axiosClient.delete(
    `/mccy/v1/VirtualAccounts/${input.virtualAccountId}`,
    input
  );
  return response;
};

export default {
  createANewAccountReal,
  getAllAccountsReal,
  getInformationForAnAccountReal,
  amendThePropertiesOfAnAccountReal,
  updateTheStatusOfAnAccountReal,
  addACurrencyToAnExistingAccountReal,
  getTheBalanceOfAnAccountReal,
  closeAnExistingAccountReal,
  createAnAccountVirtual,
  getInformationForAnAccountVirtual,
  amendThePropertiesOfAnAccountVirtual,
  updateTheStatusOfAnAccountVirtual,
  closeAnAccountVirtual,
};
