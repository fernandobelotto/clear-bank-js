import { AxiosResponse } from "axios";
import { axiosClient } from "..";
import {
  cancelBatchPaymentsInput,
  initiateAPaymentInput,
  initiateAPaymentResponse,
  requestAnInternalTransferInput,
} from "./types";
import { fundYourAccountInTheSimulationEnvironment } from "./fundYourAccountInTheSimulationEnvironment";

const initiateAPayment = async (
  input: initiateAPaymentInput
): Promise<AxiosResponse<initiateAPaymentResponse>> => {
  const response = await axiosClient.post(`/v1/mccy/payments`, input);
  return response;
};
const cancelBatchPayments = async (
  input: cancelBatchPaymentsInput
): Promise<AxiosResponse<void>> => {
  const response = await axiosClient.delete(
    `/v1/mccy/payments/${input.batchId}`
  );
  return response;
};
const cancelASinglePayment = async (input: {
  batchId: string;
  endToEndId: string;
}): Promise<AxiosResponse<void>> => {
  const response = await axiosClient.delete(
    `/v1/mccy/payments/${input.batchId}/${input.endToEndId}`
  );
  return response;
};
const requestAnInternalTransfer = async (
  input: requestAnInternalTransferInput
): Promise<AxiosResponse<void>> => {
  const response = await axiosClient.post(`/v1/mccy/internaltransfers`, input);
  return response;
};

export default {
  fundYourAccountInTheSimulationEnvironment,
  initiateAPayment,
  cancelBatchPayments,
  cancelASinglePayment,
  requestAnInternalTransfer,
};
