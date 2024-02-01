import { AxiosResponse } from "axios";
import { axiosClient } from "..";
import {
  getFullTransactionListForAnAccountInput,
  getFullTransactionListForAnAccountResponse,
  getTransactionListForAVirtualAccountInput,
  getTransactionListForAVirtualAccountResponse,
  getATransactionInput,
  getATransactionResponse,
  requestAStatementForAllAccountsInput,
  requestAStatementForAnAccountInput,
} from "./types";

const getFullTransactionListForAnAccount = async (
  input: getFullTransactionListForAnAccountInput
): Promise<AxiosResponse<getFullTransactionListForAnAccountResponse>> => {
  const response = await axiosClient.get(
    `/mccy/v1/Accounts/${input.accountId}/transactions`
  );
  return response;
};
const getTransactionListForAVirtualAccount = async (
  input: getTransactionListForAVirtualAccountInput
): Promise<AxiosResponse<getTransactionListForAVirtualAccountResponse>> => {
  const response = await axiosClient.get(
    `/mccy/v1/VirtualAccounts/${input.virtualAccountId}/transactions`
  );
  return response;
};
const getATransaction = async (
  input: getATransactionInput
): Promise<AxiosResponse<getATransactionResponse>> => {
  const response = await axiosClient.get(
    `/mccy/v1/Transactions/${input.transactionId}`
  );
  return response;
};
const requestAStatementForAllAccounts = async (
  input: requestAStatementForAllAccountsInput
): Promise<AxiosResponse<void>> => {
  const response = await axiosClient.post(`/mccy/v1/StatementRequests`, input);
  return response;
};
const requestAStatementForAnAccount = async (input: {
  iban: string;
  body: requestAStatementForAnAccountInput;
}): Promise<AxiosResponse<void>> => {
  const response = await axiosClient.get(
    `/mccy/v1/StatementRequests/account/${input.iban}`
  );
  return response;
};

export default {
  getFullTransactionListForAnAccount,
  getTransactionListForAVirtualAccount,
  getATransaction,
  requestAStatementForAllAccounts,
  requestAStatementForAnAccount,
};
