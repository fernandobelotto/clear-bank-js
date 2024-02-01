import { Amount, HalLink, Other } from "../shared/types";

export type getAllPaymentsInstitutionInput = {};

export type getAllPaymentsInstitutionResponse = {
  transactions: Transaction[];
  halLinks: HalLink[];
};

interface Transaction {
  amount: Amount;
  counterpartAccount: CounterpartAccount;
  debitCreditCode: string;
  endToEndIdentifier: string;
  transactionId: string;
  transactionReference: string;
  transactionTime: string;
  status: string;
  ultimateBeneficiaryAccount: UltimateBeneficiaryAccount;
  ultimateRemitterAccount: UltimateBeneficiaryAccount;
}

interface UltimateBeneficiaryAccount {
  id: string;
  iban: string;
  bban: string;
  upic: string;
  cuid: string;
}

interface CounterpartAccount {
  identification: Identification;
}

interface Identification {
  iban: string;
  accountName: string;
  sortCode: string;
  accountNumber: string;
  reference: string;
  other: Other;
}

export type getAllPaymentsRealAccountInput = {
  accountId: string;
};
export type getAllPaymentsRealAccountResponse = {
  transactions: Transaction[];
  halLinks: HalLink[];
};
export type getAPaymentRealAccountInput = {
  accountId: string;
  transactionId: string;
};
export type getAPaymentRealAccountResponse = {
  transaction: Transaction;
  halLinks: HalLink[];
};
export type getAllPaymentsVirtualAccountInput = {
  virtualAccountId: string;
  accountId: string;
};
export type getAllPaymentsVirtualAccountResponse = {
  transactions: Transaction[];
  halLinks: HalLink[];
};
export type getAPaymentVirtualAccountInput = {
  accountId: string;
  virtualAccountId: string;
  transactionId: string;
};
export type getAPaymentVirtualAccountResponse = {
  transaction: Transaction;
  halLinks: HalLink[];
};
