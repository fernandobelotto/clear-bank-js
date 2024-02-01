export type sendCHAPSPaymentInput = {
  instructionIdentification: string;
  endToEndIdentification: string;
  instructedAmount: InstructedAmount;
  sourceAccount: SourceAccount;
  debtorAccount: SourceAccount;
  debtor: Debtor;
  creditorAccount: SourceAccount;
  creditor: Debtor;
  purpose: string;
  categoryPurpose: string;
  remittanceInformation: RemittanceInformation;
};

interface RemittanceInformation {
  creditorReferenceInformation: string;
}

interface Debtor {
  name: string;
  postalAddress: PostalAddress;
  lei: string;
}

interface PostalAddress {
  buildingNumber: string;
  buildingName: string;
  streetName: string;
  townName: string;
  country: string;
  postCode: string;
}

interface SourceAccount {
  iban: string;
  schemeName: string;
  proprietary: string;
  identification: string;
}

interface InstructedAmount {
  amount: number;
  currency: string;
}

export type sendCHAPSPaymentResponse = {
  paymentId: string;
};
export type returnCHAPSPaymentInput = {
  paymentId: string;
  reason: string;
  instructionIdentification: string;
};

export type returnCHAPSPaymentResponse = {
  paymentId: string;
};

export type sendCHAPSBankToBankPaymentInput = {
  instructionIdentification: string;
  endToEndIdentification: string;
  instructedAmount: InstructedAmount;
  sourceAccount: SourceAccount;
  debtor: Debtor;
  creditorAccount: SourceAccount;
  creditor: Debtor;
  purpose: string;
  categoryPurpose: string;
  remittanceInformation: RemittanceInformation;
};

interface RemittanceInformation {
  unstructured: string;
}

interface Debtor {
  name: string;
  postalAddress: PostalAddress;
  lei: string;
}

interface PostalAddress {
  buildingNumber: string;
  buildingName: string;
  streetName: string;
  townName: string;
  country: string;
  postCode: string;
}

interface SourceAccount {
  iban: string;
  schemeName: string;
  identification: string;
}

interface InstructedAmount {
  amount: number;
  currency: string;
}

export type sendCHAPSBankToBankPaymentResponse = {
  paymentId: string;
};

export type simulateInboundCHAPSPaymentInput = {
  instructionIdentification: string;
  endToEndIdentification: string;
  instructedAmount: InstructedAmount;
  debtorBic: string;
  debtorAccount: DebtorAccount;
  debtor: Debtor;
  creditorBic: string;
  creditorAccount: DebtorAccount;
  creditor: Debtor;
  purpose: string;
  categoryPurpose: string;
  remittanceInformation: RemittanceInformation;
};

interface RemittanceInformation {
  creditorReferenceInformation: string;
}

interface Debtor {
  name: string;
  postalAddress: PostalAddress;
}

interface PostalAddress {
  buildingNumber: string;
  buildingName: string;
  streetName: string;
  townName: string;
  country: string;
  postCode: string;
}

interface DebtorAccount {
  iban: string;
  schemeName: string;
  identification: string;
}

interface InstructedAmount {
  amount: number;
  currency: string;
}

export type simulateInboundCHAPSPaymentResponse = {
  uetr: string;
};

export type simulateReturnedCHAPSPaymentInput = {
  originalUetr: string;
  returnReasonCode: string;
  originalInstructionIdentification: string;
  originalEndToEndIdentification: string;
  originalReference: string;
  instructedAmount: InstructedAmount;
  debtorName: string;
  debtorBic: string;
  creditorName: string;
  creditorBic: string;
};

interface InstructedAmount {
  amount: number;
  currency: string;
}

export type simulateReturnedCHAPSPaymentResponse = {
  uetr: string;
};

export type simulateCHAPSBankToBankPaymentInput = {
  instructionIdentification: string;
  endToEndIdentification: string;
  instructedAmount: InstructedAmount;
  debtorAccount: DebtorAccount;
  debtorBic: string;
  debtor: Debtor;
  creditorBic: string;
  creditorAccount: DebtorAccount;
  creditor: Debtor;
  purpose: string;
  categoryPurpose: string;
  remittanceInformation: RemittanceInformation;
};

interface RemittanceInformation {
  unstructured: string;
}

interface Debtor {
  name: string;
  postalAddress: PostalAddress;
}

interface PostalAddress {
  buildingNumber: string;
  buildingName: string;
  streetName: string;
  townName: string;
  country: string;
  postCode: string;
}

interface DebtorAccount {
  iban: string;
  schemeName: string;
  identification: string;
}

interface InstructedAmount {
  amount: number;
  currency: string;
}

export type simulateCHAPSBankToBankPaymentResponse = {
  uetr: string;
};
