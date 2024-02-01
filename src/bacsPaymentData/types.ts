import { Amount, HalLink, Other } from "../shared/types";

export type getAllCollectedDirectDebitPaymentsRealAccountInput = {
  accountId: string;
  mandateId: string;
};
export type getAllCollectedDirectDebitPaymentsRealAccountResponse = {
  mandateTransactions: MandateTransaction[];
  halLinks: HalLink[];
};

interface MandateTransaction {
  transactionId: string;
  date: string;
  amount: Amount;
  status: string;
  reference: string;
  debtorBban: string;
  debtorAccountName: string;
  debtorSortCode: string;
  debtorAccountNumber: string;
}

export type getAllCollectedDirectDebitPaymentsVirtualAccountInput = {
  accountId: string;
  virtualAccountId: string;
  mandateId: string;
};
export type getAllCollectedDirectDebitPaymentsVirtualAccountResponse = {
  mandateTransactions: MandateTransaction[];
  halLinks: HalLink[];
};
export type getAllUnpaidDirectDebitPaymentsInstitutionInput = {
  sortCode: string;
};
export type getAllUnpaidDirectDebitPaymentsInstitutionResponse = {
  // todo : add the response values here
  value: string;
};
export type getAllUnpaidDirectDebitPaymentsRealAccountInput = {
  accountId: string;
};
export type getAllUnpaidDirectDebitPaymentsRealAccountResponse = {
  // todo : add the response values here
  value: string;
};
export type getAllUnpaidDirectDebitPaymentsVirtualAccountInput = {
  accountId: string;
  virtualAccountId: string;
};
export type getAllUnpaidDirectDebitPaymentsVirtualAccountResponse = {
  unpaidTransactions: UnpaidTransaction[];
  halLinks: HalLink[];
};

interface RootObject {}

interface UnpaidTransaction {
  pendingTransactionId: string;
  transactionType: string;
  transactionStatus: string;
  creditorAccount: CreditorAccount;
  debtorAccount: CreditorAccount;
  amount: number;
  paymentReference: string;
  processingDate: string;
  settlementDate: string;
  transferredDate: string;
  serviceUserNumber: string;
  transactionCode: string;
  isReturn: boolean;
  hasReturn: boolean;
  reasonCode: string;
  collectionReference: string;
}

interface Identification {
  iban: string;
  accountName: string;
  sortCode: string;
  accountNumber: string;
  reference: string;
  other: Other;
}

export type getAllUnappliedDirectCreditPaymentsInput = {
  sortCode: string;
};
export type getAllUnappliedDirectCreditPaymentsResponse = {
  unappliedTransactions: UnappliedTransaction[];
};

interface UnappliedTransaction {
  pendingTransactionId: string;
  transactionType: string;
  transactionStatus: string;
  creditorAccount: CreditorAccount;
  debtorAccount: CreditorAccount;
  amount: number;
  paymentReference: string;
  processingDate: string;
  settlementDate: string;
  transferredDate: string;
  serviceUserNumber: string;
  transactionCode: string;
  isReturn: boolean;
  hasReturn: boolean;
  reasonCode: string;
  collectionReference: string;
  creditorAccountName: string;
  debtorAccountName: string;
}

interface CreditorAccount {
  identification: Identification;
}

interface Identification {
  iban: string;
  other: Other;
}
