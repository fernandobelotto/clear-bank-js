import { AxiosResponse } from "axios";
import {
  sendCHAPSPaymentInput,
  sendCHAPSPaymentResponse,
  returnCHAPSPaymentInput,
  returnCHAPSPaymentResponse,
  sendCHAPSBankToBankPaymentInput,
  sendCHAPSBankToBankPaymentResponse,
  simulateInboundCHAPSPaymentInput,
  simulateInboundCHAPSPaymentResponse,
  simulateReturnedCHAPSPaymentInput,
  simulateReturnedCHAPSPaymentResponse,
  simulateCHAPSBankToBankPaymentInput,
  simulateCHAPSBankToBankPaymentResponse,
} from "./types";
import { axiosClient } from "..";

const sendCHAPSPayment = async (
  input: sendCHAPSPaymentInput
): Promise<AxiosResponse<sendCHAPSPaymentResponse>> => {
  const response = await axiosClient.post(
    `/payments/chaps/v4/customer-payments`,
    input
  );
  return response;
};
const returnCHAPSPayment = async (
  input: returnCHAPSPaymentInput
): Promise<AxiosResponse<returnCHAPSPaymentResponse>> => {
  const response = await axiosClient.post(
    `/payments/chaps/v4/return-payments`,
    input
  );
  return response;
};
const sendCHAPSBankToBankPayment = async (
  input: sendCHAPSBankToBankPaymentInput
): Promise<AxiosResponse<sendCHAPSBankToBankPaymentResponse>> => {
  const response = await axiosClient.post(
    `/payments/chaps/v4/institution-payments`,
    input
  );
  return response;
};
const simulateInboundCHAPSPayment = async (
  input: simulateInboundCHAPSPaymentInput
): Promise<AxiosResponse<simulateInboundCHAPSPaymentResponse>> => {
  const response = await axiosClient.post(
    `/inbound-payment-simulation/chaps/v1/customer-payments`,
    input
  );
  return response;
};
const simulateReturnedCHAPSPayment = async (
  input: simulateReturnedCHAPSPaymentInput
): Promise<AxiosResponse<simulateReturnedCHAPSPaymentResponse>> => {
  const response = await axiosClient.post(
    `/inbound-payment-simulation/chaps/v1/return-payments`,
    input
  );
  return response;
};
const simulateCHAPSBankToBankPayment = async (
  input: simulateCHAPSBankToBankPaymentInput
): Promise<AxiosResponse<simulateCHAPSBankToBankPaymentResponse>> => {
  const response = await axiosClient.post(
    `/inbound-payment-simulation/chaps/v1/institution-payments`,
    input
  );
  return response;
};

export default {
  sendCHAPSPayment,
  returnCHAPSPayment,
  sendCHAPSBankToBankPayment,
  simulateInboundCHAPSPayment,
  simulateReturnedCHAPSPayment,
  simulateCHAPSBankToBankPayment,
};
