export type initiateAPaymentInput = {
  batchId: string;
  currencyCode: string;
  transactions: Transaction[];
};

export type Transaction = {
  endToEndId: string;
  reference: string;
  amount: number;
  creditor: Creditor;
  debtorName: string;
  debtorAddress: Address;
  debtorBic: string;
  debtorPrivateIdentification: PrivateIdentification;
  accountIdentifier: AccountIdentifier;
  debtorAccountCurrency: string;
  intermediaryAgent: IntermediaryAgent;
  creditorAgent: CreditorAgent;
  instructionForDebtorAgent: string;
  purpose: SchemeName;
  remittanceInformation: RemittanceInformation;
  ultimateCreditor: UltimateCreditor;
};

export type UltimateCreditor = {
  name: string;
  address: Address;
  bic: string;
  identification: Identification;
};

export type RemittanceInformation = {
  additionalRemittanceInformation: string;
};

export type CreditorAgent = {
  FinancialInstitutionIdentification: FinancialInstitutionIdentification2;
  branchId: string;
};

export type FinancialInstitutionIdentification2 = {
  bic: string;
  aba: string;
  clearingSystemIdCode: string;
  memberId: string;
  name: string;
  addressDetails: Address;
};

export type IntermediaryAgent = {
  FinancialInstitutionIdentification: FinancialInstitutionIdentification;
};

export type FinancialInstitutionIdentification = {
  bic: string;
  aba: string;
  name: string;
  addressDetails: Address;
};

export type AccountIdentifier = {
  kind: string;
  identifier: string;
};

export type Creditor = {
  name: string;
  address: Address;
  bic: string;
  identification: Identification;
  countryOfResidence: string;
  contactDetails: ContactDetails;
  iban: string;
  accountNumber: string;
  schemeName: SchemeName;
};

export type ContactDetails = {
  name: string;
  emailAddress: string;
};

export type Identification = {
  organisationIdentification: OrganisationIdentification;
  privateIdentification: PrivateIdentification;
};

export type PrivateIdentification = {
  dateAndPlaceOfBirth: DateAndPlaceOfBirth;
  other: Other2;
};

export type Other2 = {
  identification: string;
  schemeName: SchemeName;
};

export type DateAndPlaceOfBirth = {
  dateOfBirth: string;
  cityOfBirth: string;
  countryOfBirth: string;
};

export type OrganisationIdentification = {
  Other: Other;
};

export type Other = {
  identification: string;
  schemeName: SchemeName;
  issuer: string;
};

export type SchemeName = {
  code: string;
  proprietary: string;
};

export type Address = {
  addressLine1: string;
  addressLine2: string;
  addressLine3: string;
  postCode: string;
  country: string;
};

export type initiateAPaymentResponse = {
  isScheduled: boolean;
};

export type cancelBatchPaymentsInput = {
  batchId: string;
};

export type requestAnInternalTransferInput = {
  debitAccountIban: string;
  debitAccountOther: DebitAccountOther;
  creditAccountIban: string;
  creditAccountOther: DebitAccountOther;
  instructedAmount: number;
  instructedCurrency: string;
  endToEndId: string;
  reference: string;
};

export type DebitAccountOther = {
  kind: string;
  identifier: string;
};
export type requestAnInternalTransferResponse = {
  // todo : add the response values here
  value: string;
};
