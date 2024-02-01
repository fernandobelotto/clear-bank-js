export type getFullTransactionListForAnAccountInput = {
  accountId: string;
};
export type getFullTransactionListForAnAccountResponse = {
  transactions: Transaction[];
};

interface Transaction {
  transactionId: string;
  accountId: string;
  virtualAccountId: string;
  endToEndId: string;
  reference: string;
  ultimateBeneficiary: UltimateBeneficiary;
  ultimateRemitter: UltimateRemitter;
  amount: number;
  currency: string;
  currencyExchange: CurrencyExchange;
  actualPaymentMethod: string;
  requestedPaymentMethod: string;
  kind: string;
  createdAt: string;
  identifiers: Identifier[];
  additionalProperties: AdditionalProperty[];
  settledAt: string;
  valueAt: string;
  cancelledAt: string;
  cancellationCode: string;
  reason: string;
  status: string;
}

interface AdditionalProperty {
  key: string;
  value: string;
}

interface Identifier {
  scope: string;
  name: string;
  identifier: string;
}

interface CurrencyExchange {
  rate: number;
  margin: number;
  currency: string;
  amount: number;
}

interface UltimateRemitter {
  accountIdentifiers: AccountIdentifier[];
  payerName: string;
}

interface UltimateBeneficiary {
  accountIdentifiers: AccountIdentifier[];
  payeeName: string;
}

interface AccountIdentifier {
  identifier: string;
  kind: string;
}

export type getTransactionListForAVirtualAccountInput = {
  virtualAccountId: string;
};

export type getTransactionListForAVirtualAccountResponse = {
  transactionId: string;
  accountId: string;
  virtualAccountId: string;
  endToEndId: string;
  reference: string;
  ultimateBeneficiary: UltimateBeneficiary;
  ultimateRemitter: UltimateRemitter;
  amount: number;
  currency: string;
  currencyExchange: CurrencyExchange;
  actualPaymentMethod: string;
  requestedPaymentMethod: string;
  kind: string;
  createdAt: string;
  identifiers: Identifier[];
  additionalProperties: AdditionalProperty[];
  settledAt: string;
  valueAt: string;
  cancelledAt: string;
  cancellationCode: string;
  reason: string;
  status: string;
};

interface AdditionalProperty {
  key: string;
  value: string;
}

interface Identifier {
  scope: string;
  name: string;
  identifier: string;
}

interface CurrencyExchange {
  rate: number;
  margin: number;
  currency: string;
  amount: number;
}

interface UltimateRemitter {
  accountIdentifiers: AccountIdentifier[];
  payerName: string;
}

interface UltimateBeneficiary {
  accountIdentifiers: AccountIdentifier[];
  payeeName: string;
}

interface AccountIdentifier {
  identifier: string;
  kind: string;
}

export type getATransactionInput = {
  transactionId: string;
};

export type getATransactionResponse = {
  transactionId: string;
  accountId: string;
  virtualAccountId: string;
  endToEndId: string;
  reference: string;
  ultimateBeneficiary: UltimateBeneficiary;
  ultimateRemitter: UltimateRemitter;
  amount: number;
  currency: string;
  currencyExchange: CurrencyExchange;
  actualPaymentMethod: string;
  requestedPaymentMethod: string;
  kind: string;
  createdAt: string;
  identifiers: Identifier[];
  additionalProperties: AdditionalProperty[];
  settledAt: string;
  valueAt: string;
  cancelledAt: string;
  cancellationCode: string;
  reason: string;
  status: string;
};

interface AdditionalProperty {
  key: string;
  value: string;
}

interface Identifier {
  scope: string;
  name: string;
  identifier: string;
}

interface CurrencyExchange {
  rate: number;
  margin: number;
  currency: string;
  amount: number;
}

interface UltimateRemitter {
  accountIdentifiers: AccountIdentifier[];
  payerName: string;
}

interface UltimateBeneficiary {
  accountIdentifiers: AccountIdentifier[];
  payeeName: string;
}

interface AccountIdentifier {
  identifier: string;
  kind: string;
}

export type requestAStatementForAllAccountsInput = {
  year: number;
  month: number;
  format: string;
  currency: string;
};

export type requestAStatementForAnAccountInput = {
  year: number;
  month: number;
  format: string;
  currency: string;
};
