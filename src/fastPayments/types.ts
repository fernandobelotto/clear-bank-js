import { HalLink } from "../shared/types";

export type returnAnFpsPaymentInput = {
  paymentReturnInstruction: PaymentReturnInstruction;
};

type PaymentReturnInstruction = {
  TransactionId: string;
  ReasonForReturn: string;
};

export type sendAFasterPaymentOriginatedOverseasInput = {
  paymentInstruction: PaymentInstruction;
};

type PaymentInstruction = {
  debtor: Debtor;
  debtorAccount: DebtorAccount;
  ultimateDebtor: UltimateDebtor;
  ultimateDebtorAccount: UltimateDebtorAccount;
  creditTransfer: CreditTransfer;
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
  unstructured: Unstructured;
};

type Unstructured = {
  additionalReferenceInformation: CreditorReferenceInformation;
};

type Structured = {
  creditorReferenceInformation: CreditorReferenceInformation;
};

type CreditorReferenceInformation = {
  reference: string;
};

type Creditor = {
  name: string;
  legalEntityIdentifier: string;
  address: string;
};

type Amount = {
  originalCurrency: string;
  originalAmount: number;
  exchangeRate: number;
  instructedAmount: number;
};

type PaymentIdentification = {
  endToEndIdentification: string;
};

type UltimateDebtorAccount = {
  identification: Identification2;
};

type Identification2 = {
  bic: string;
  accountNumber: string;
};

type UltimateDebtor = {
  name: string;
  address: string;
};

type DebtorAccount = {
  identification: Identification;
};

type Identification = {
  iban: string;
  other: Other;
};

type Other = {
  identification: string;
  schemeName: SchemeName;
};

type SchemeName = {
  code: string;
  proprietary: string;
};

type Debtor = {
  legalEntityIdentifier: string;
};

export type sendAFasterPaymentOriginatedOverseasResponse = {
  transaction: Transaction;
  halLinks: HalLink[];
};
