import { AxiosResponse } from "axios";
import { axiosClient } from "..";
import {
  optOutFromTheCoPServiceRealAccountInput,
  optOutFromTheCoPServiceVirtualAccountInput,
  checkPayeeAccountNameInput,
  checkPayeeAccountNameResponse,
  checkWhetherASortCodeAccountNumberRequiresSrdInput,
  checkWhetherASortCodeAccountNumberRequiresSrdResponse,
  getCertificateTypeInput,
  getCertificateTypeResponse,
  createANewCertificateInput,
} from "./types";

const optOutFromTheCoPServiceRealAccount = async (input: {
  accountId: string;
  body: optOutFromTheCoPServiceRealAccountInput;
}): Promise<AxiosResponse<void>> => {
  const response = await axiosClient.put(
    `/v1/Cop/opt/accounts/${input.accountId}`,
    input
  );
  return response;
};
const optOutFromTheCoPServiceVirtualAccount = async (input: {
  accountId: string;
  virtualAccountId: string;
  body: optOutFromTheCoPServiceVirtualAccountInput;
}): Promise<AxiosResponse<void>> => {
  const response = await axiosClient.put(
    `/v1/Cop/opt/accounts/${input.accountId}/virtual/${input.virtualAccountId}`,
    input
  );
  return response;
};
const checkPayeeAccountName = async (
  input: checkPayeeAccountNameInput
): Promise<AxiosResponse<checkPayeeAccountNameResponse>> => {
  const response = await axiosClient.post(
    `/open-banking/outbound/v1/name-verification`,
    input
  );
  return response;
};
const checkWhetherASortCodeAccountNumberRequiresSrd = async (
  input: checkWhetherASortCodeAccountNumberRequiresSrdInput
): Promise<
  AxiosResponse<checkWhetherASortCodeAccountNumberRequiresSrdResponse>
> => {
  const response = await axiosClient.post(
    `/open-banking/outbound/v1/srd/validate`,
    input
  );
  return response;
};
const getCertificateType = async (
  input: getCertificateTypeInput
): Promise<AxiosResponse<getCertificateTypeResponse>> => {
  const response = await axiosClient.get(
    `/v1/softwarestatements/${input.softwareStatementId}/csr/${input.certificatetype}`
  );
  return response;
};
const createANewCertificate = async (input: {
  softwareStatementId: string;
  body: createANewCertificateInput;
}): Promise<AxiosResponse<void>> => {
  const response = await axiosClient.post(
    `/v1/softwarestatements/${input.softwareStatementId}/pem`,
    input
  );
  return response;
};

export default {
  optOutFromTheCoPServiceRealAccount,
  optOutFromTheCoPServiceVirtualAccount,
  checkPayeeAccountName,
  checkWhetherASortCodeAccountNumberRequiresSrd,
  getCertificateType,
  createANewCertificate,
};
