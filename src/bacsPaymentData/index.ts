import { AxiosResponse } from "axios";
import {
  getAllCollectedDirectDebitPaymentsRealAccountInput,
  getAllCollectedDirectDebitPaymentsRealAccountResponse,
  getAllCollectedDirectDebitPaymentsVirtualAccountInput,
  getAllCollectedDirectDebitPaymentsVirtualAccountResponse,
  getAllUnpaidDirectDebitPaymentsInstitutionInput,
  getAllUnpaidDirectDebitPaymentsInstitutionResponse,
  getAllUnpaidDirectDebitPaymentsRealAccountInput,
  getAllUnpaidDirectDebitPaymentsRealAccountResponse,
  getAllUnpaidDirectDebitPaymentsVirtualAccountInput,
  getAllUnpaidDirectDebitPaymentsVirtualAccountResponse,
  getAllUnappliedDirectCreditPaymentsInput,
  getAllUnappliedDirectCreditPaymentsResponse,
} from "./types";
import { axiosClient } from "..";

const getAllCollectedDirectDebitPaymentsRealAccount = async (
  input: getAllCollectedDirectDebitPaymentsRealAccountInput
): Promise<
  AxiosResponse<getAllCollectedDirectDebitPaymentsRealAccountResponse>
> => {
  const response = await axiosClient.get(
    `/v2/Accounts/${input.accountId}/Mandates/${input.mandateId}/Collections`
  );
  return response;
};
const getAllCollectedDirectDebitPaymentsVirtualAccount = async (
  input: getAllCollectedDirectDebitPaymentsVirtualAccountInput
): Promise<
  AxiosResponse<getAllCollectedDirectDebitPaymentsVirtualAccountResponse>
> => {
  const response = await axiosClient.get(
    `/v2/Accounts/${input.accountId}/Virtual/${input.virtualAccountId}/Mandates/${input.mandateId}/Collections`
  );
  return response;
};
const getAllUnpaidDirectDebitPaymentsInstitution = async (
  input: getAllUnpaidDirectDebitPaymentsInstitutionInput
): Promise<
  AxiosResponse<getAllUnpaidDirectDebitPaymentsInstitutionResponse>
> => {
  const response = await axiosClient.get(
    `/v1/Transactions/${input.sortCode}/DirectDebit/Unpaid`
  );
  return response;
};
const getAllUnpaidDirectDebitPaymentsRealAccount = async (
  input: getAllUnpaidDirectDebitPaymentsRealAccountInput
): Promise<
  AxiosResponse<getAllUnpaidDirectDebitPaymentsRealAccountResponse>
> => {
  const response = await axiosClient.get(
    `/v2/Accounts/${input.accountId}/Mandates/Unpaid`
  );
  return response;
};
const getAllUnpaidDirectDebitPaymentsVirtualAccount = async (
  input: getAllUnpaidDirectDebitPaymentsVirtualAccountInput
): Promise<
  AxiosResponse<getAllUnpaidDirectDebitPaymentsVirtualAccountResponse>
> => {
  const response = await axiosClient.get(
    `/v2/Accounts/${input.accountId}/Virtual/${input.virtualAccountId}/Mandates/Unpaid`
  );
  return response;
};
const getAllUnappliedDirectCreditPayments = async (
  input: getAllUnappliedDirectCreditPaymentsInput
): Promise<AxiosResponse<getAllUnappliedDirectCreditPaymentsResponse>> => {
  const response = await axiosClient.get(
    `/v1/Transactions/${input.sortCode}/DirectCredit/Unapplied`
  );
  return response;
};

export default {
  getAllCollectedDirectDebitPaymentsRealAccount,
  getAllCollectedDirectDebitPaymentsVirtualAccount,
  getAllUnpaidDirectDebitPaymentsInstitution,
  getAllUnpaidDirectDebitPaymentsRealAccount,
  getAllUnpaidDirectDebitPaymentsVirtualAccount,
  getAllUnappliedDirectCreditPayments,
};
