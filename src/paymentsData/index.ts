import { AxiosResponse } from "axios";
import {
  getAllPaymentsInstitutionInput,
  getAllPaymentsInstitutionResponse,
  getAllPaymentsRealAccountInput,
  getAllPaymentsRealAccountResponse,
  getAPaymentRealAccountInput,
  getAPaymentRealAccountResponse,
  getAllPaymentsVirtualAccountInput,
  getAllPaymentsVirtualAccountResponse,
  getAPaymentVirtualAccountInput,
  getAPaymentVirtualAccountResponse,
} from "./types";
import { axiosClient } from "..";

const getAllPaymentsInstitution = async (
  input: getAllPaymentsInstitutionInput
): Promise<AxiosResponse<getAllPaymentsInstitutionResponse>> => {
  const response = await axiosClient.get(`/v2/Transactions`);
  return response;
};
const getAllPaymentsRealAccount = async (
  input: getAllPaymentsRealAccountInput
): Promise<AxiosResponse<getAllPaymentsRealAccountResponse>> => {
  const response = await axiosClient.get(
    `/v2/Accounts/${input.accountId}/Transactions`
  );
  return response;
};
const getAPaymentRealAccount = async (
  input: getAPaymentRealAccountInput
): Promise<AxiosResponse<getAPaymentRealAccountResponse>> => {
  const response = await axiosClient.get(
    `/v2/Accounts/${input.accountId}/Transactions/${input.transactionId}`
  );
  return response;
};
const getAllPaymentsVirtualAccount = async (
  input: getAllPaymentsVirtualAccountInput
): Promise<AxiosResponse<getAllPaymentsVirtualAccountResponse>> => {
  const response = await axiosClient.get(
    `/v2/Accounts/${input.accountId}/Virtual/${input.virtualAccountId}/Transactions`
  );
  return response;
};
const getAPaymentVirtualAccount = async (
  input: getAPaymentVirtualAccountInput
): Promise<AxiosResponse<getAPaymentVirtualAccountResponse>> => {
  const response = await axiosClient.get(
    `/v2/Accounts/${input.accountId}/Virtual/${input.virtualAccountId}/Transactions/${input.transactionId}`
  );
  return response;
};

export default {
  getAllPaymentsInstitution,
  getAllPaymentsRealAccount,
  getAPaymentRealAccount,
  getAllPaymentsVirtualAccount,
  getAPaymentVirtualAccount,
};
