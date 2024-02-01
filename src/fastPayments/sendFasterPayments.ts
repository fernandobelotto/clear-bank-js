import { AxiosResponse } from "axios";
import { axiosClient } from "..";
import { HalLink } from "../shared/types";

export type sendFasterPaymentsInput = {
  paymentInstructions: PaymentInstruction[];
};

type PaymentInstruction = {
  debtor: Debtor;
  paymentInstructionIdentification: string;
  debtorAccount: DebtorAccount;
  creditTransfers: CreditTransfer[];
};

type CreditTransfer = {
  paymentIdentification: PaymentIdentification;
  amount: Amount;
  creditor: Creditor;
  creditorAccount: DebtorAccount;
  remittanceInformation: RemittanceInformation;
};

type RemittanceInformation = {
  structured: Structured;
};

type Structured = {
  creditorReferenceInformation: CreditorReferenceInformation;
};

type CreditorReferenceInformation = {
  reference: string;
};

type Creditor = {
  name: string;
  legalEntityIndentifier: string;
};

type Amount = {
  currency: string;
  instructedAmount: number;
};

type PaymentIdentification = {
  instructionIdentification: string;
  endToEndIdentification: string;
};

type DebtorAccount = {
  identification: Identification;
};

type Identification = {
  iban: string;
  other: Other;
};

type Other = {
  issuer: string;
  identification: string;
  schemeName: SchemeName;
};

type SchemeName = {
  code: string;
  proprietary: string;
};

type Debtor = {
  legalEntityIdentifier: string;
  address: string;
};

export type sendFasterPaymentsResponse = {
  transaction: Transaction;
  halLinks: HalLink[];
};

type Transaction = {
  endToEndIdentification: string;
  response: string;
};

export const sendFasterPayments = async (
  input: sendFasterPaymentsInput
): Promise<AxiosResponse<sendFasterPaymentsResponse>> => {
  const response = await axiosClient.post(`/v3/payments/fps`, input);
  return response;
};
