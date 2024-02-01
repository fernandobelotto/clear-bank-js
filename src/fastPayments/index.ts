import { AxiosResponse } from "axios";
import {
  returnAnFpsPaymentInput,
  sendAFasterPaymentOriginatedOverseasInput,
  sendAFasterPaymentOriginatedOverseasResponse,
} from "./types";
import { axiosClient } from "..";
import { sendFasterPayments } from "./sendFasterPayments";

const returnAnFpsPayment = async (
  input: returnAnFpsPaymentInput
): Promise<AxiosResponse<void>> => {
  const response = await axiosClient.post(`/v3/payments/fps/return`, input);
  return response;
};
const sendAFasterPaymentOriginatedOverseas = async (
  input: sendAFasterPaymentOriginatedOverseasInput
): Promise<AxiosResponse<sendAFasterPaymentOriginatedOverseasResponse>> => {
  const response = await axiosClient.post(
    `/v2/payments/fps/singlepayment`,
    input
  );
  return response;
};

export default {
  sendFasterPayments,
  returnAnFpsPayment,
  sendAFasterPaymentOriginatedOverseas,
};
