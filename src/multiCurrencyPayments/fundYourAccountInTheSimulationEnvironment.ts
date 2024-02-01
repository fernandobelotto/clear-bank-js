import { AxiosResponse } from "axios";
import { axiosClient } from "..";

export type fundYourAccountInTheSimulationEnvironmentInput = {
  instructedCurrency: string;
  instructedAmount: number;
  reference: string;
  endToEndId: string;
  ultimateCreditor: UltimateCreditor;
  ultimateDebtor: UltimateDebtor;
};

export type UltimateDebtor = {
  identifier: string;
  name: string;
  address: string;
};

export type UltimateCreditor = {
  iban: string;
  name: string;
  address: string;
};

export type fundYourAccountInTheSimulationEnvironmentResponse = {
  transactionId: string;
  instructedCurrency: string;
  instructedAmount: number;
  reference: string;
  endToEndId: string;
  ultimateCreditorIBAN: string;
  ultimateCreditorName: string;
  ultimateDebtorIdentifier: string;
  ultimateDebtorName: string;
  timestampCreated: string;
  bankRefSearchable: string;
};

export const fundYourAccountInTheSimulationEnvironment = async (input: {
  accountUniqueId: string;
  body: fundYourAccountInTheSimulationEnvironmentInput;
}): Promise<
  AxiosResponse<fundYourAccountInTheSimulationEnvironmentResponse>
> => {
  const response = await axiosClient.post(
    `/v1/mccy/inboundpayment/${input.accountUniqueId}`,
    input
  );
  return response;
};
