import { AxiosResponse } from "axios";
import {
  createDDIRealAccountInput,
  createDDIRealAccountResponse,
  getAllDDIsRealAccountInput,
  getAllDDIsRealAccountResponse,
  amendDDIRealAccountInput,
  amendDDIRealAccountResponse,
  returnDDIRealAccountInput,
  returnDDIRealAccountResponse,
  cancelDDIRealAccountInput,
  cancelDDIRealAccountResponse,
  createDDIVirtualAccountInput,
  createDDIVirtualAccountResponse,
  getAllDDIsVirtualAccountInput,
  getAllDDIsVirtualAccountResponse,
  amendDDIVirtualAccountInput,
  amendDDIVirtualAccountResponse,
  returnDDIVirtualAccountInput,
  returnDDIVirtualAccountResponse,
  cancelDDIVirtualAccountInput,
  cancelDDIVirtualAccountResponse,
} from "./types";
import { axiosClient } from "..";

const createDDIRealAccount = async (input: {
  accountId: string;
  body: createDDIRealAccountInput;
}): Promise<AxiosResponse<createDDIRealAccountResponse>> => {
  const response = await axiosClient.post(
    `/v1/Accounts/${input.accountId}/Mandates`,
    input
  );
  return response;
};
const getAllDDIsRealAccount = async (
  input: getAllDDIsRealAccountInput
): Promise<AxiosResponse<getAllDDIsRealAccountResponse>> => {
  const response = await axiosClient.get(
    `/v2/Accounts/${input.accountId}/Mandates`
  );
  return response;
};
const amendDDIRealAccount = async (input: {
  accountId: string;
  mandateId: string;
  body: amendDDIRealAccountInput;
}): Promise<AxiosResponse<amendDDIRealAccountResponse>> => {
  const response = await axiosClient.patch(
    `/v1/Accounts/${input.accountId}/Mandates/${input.mandateId}`,
    input
  );
  return response;
};
const returnDDIRealAccount = async (input: {
  accountId: string;
  mandateId: string;
  body: returnDDIRealAccountInput;
}): Promise<AxiosResponse<returnDDIRealAccountResponse>> => {
  const response = await axiosClient.post(
    `/v1/Accounts/${input.accountId}/Mandates/${input.mandateId}/Returns`,
    input
  );
  return response;
};
const cancelDDIRealAccount = async (input: {
  accountId: string;
  mandateId: string;
  body: cancelDDIRealAccountInput;
}): Promise<AxiosResponse<cancelDDIRealAccountResponse>> => {
  const response = await axiosClient.delete(
    `/v1/Accounts/${input.accountId}/Mandates/${input.mandateId}`,
    {
      data: input.body,
    }
  );
  return response;
};
const createDDIVirtualAccount = async (input: {
  accountId: string;
  virtualAccountId: string;
  body: createDDIVirtualAccountInput;
}): Promise<AxiosResponse<createDDIVirtualAccountResponse>> => {
  const response = await axiosClient.post(
    `/v1/Accounts/${input.accountId}/Virtual/${input.virtualAccountId}/Mandates`,
    input
  );
  return response;
};
const getAllDDIsVirtualAccount = async (
  input: getAllDDIsVirtualAccountInput
): Promise<AxiosResponse<getAllDDIsVirtualAccountResponse>> => {
  const response = await axiosClient.get(
    `/v2/Accounts/${input.accountId}/Virtual/${input.virtualAccountId}/Mandates`
  );
  return response;
};
const amendDDIVirtualAccount = async (input: {
  accountId: string;
  virtualAccountId: string;
  mandateId: string;
  body: amendDDIVirtualAccountInput;
}): Promise<AxiosResponse<amendDDIVirtualAccountResponse>> => {
  const response = await axiosClient.post(
    `/v1/Accounts/${input.accountId}/Virtual/${input.virtualAccountId}/Mandates/${input.mandateId}`,
    input
  );
  return response;
};
const returnDDIVirtualAccount = async (input: {
  accountId: string;
  virtualAccountId: string;
  mandateId: string;
  body: returnDDIVirtualAccountInput;
}): Promise<AxiosResponse<returnDDIVirtualAccountResponse>> => {
  const response = await axiosClient.post(
    `/v1/Accounts/${input.accountId}/Virtual/${input.virtualAccountId}/Mandates/${input.mandateId}/Returns`,
    input
  );
  return response;
};
const cancelDDIVirtualAccount = async (input: {
  accountId: string;
  virtualAccountId: string;
  mandateId: string;
  body: cancelDDIVirtualAccountInput;
}): Promise<AxiosResponse<cancelDDIVirtualAccountResponse>> => {
  const response = await axiosClient.delete(
    `/v1/Accounts/${input.accountId}/Virtual/${input.virtualAccountId}/Mandates/${input.mandateId}`,
    {
      data: input.body,
    }
  );
  return response;
};

export default {
  createDDIRealAccount,
  getAllDDIsRealAccount,
  amendDDIRealAccount,
  returnDDIRealAccount,
  cancelDDIRealAccount,
  createDDIVirtualAccount,
  getAllDDIsVirtualAccount,
  amendDDIVirtualAccount,
  returnDDIVirtualAccount,
  cancelDDIVirtualAccount,
};
