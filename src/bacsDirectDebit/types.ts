import { HalLink } from "../shared/types";

export type createDDIRealAccountInput = {
  serviceUserNumber: string;
  originatorName: string;
  reference: string;
  payerName: string;
  counterpartAccount: CounterpartAccount;
  mandateType: string;
};

interface CounterpartAccount {
  identification: Identification;
}

interface Identification {
  iban: string;
  other: Other;
}

interface Other {
  identification: string;
  schemeName: SchemeName;
  issuer: string;
}

interface SchemeName {
  code: string;
  proprietary: string;
}

export type createDDIRealAccountResponse = {
  halLinks: HalLink[];
};
export type getAllDDIsRealAccountInput = {
  accountId: string;
};
export type getAllDDIsRealAccountResponse = {
  directDebitMandates: DirectDebitMandate[];
  halLinks: HalLink[];
};

interface DirectDebitMandate {
  mandateId: string;
  payerName: string;
  payerBban: string;
  payerAccountNumber: string;
  payerSortCode: string;
  reference: string;
  serviceUserNumber: string;
  originatorName: string;
  mandateType: string;
  state: string;
}

export type amendDDIRealAccountInput = {
  reasonCode: string;
  newDebtorAccount: NewDebtorAccount;
};

interface NewDebtorAccount {
  identification: Identification;
}

interface Identification {
  iban: string;
  other: Other;
}

interface Other {
  identification: string;
  schemeName: SchemeName;
  issuer: string;
}

interface SchemeName {
  code: string;
  proprietary: string;
}

export type amendDDIRealAccountResponse = {
  halLinks: HalLink[];
};
export type returnDDIRealAccountInput = {
  rejectionReason: string;
};
export type returnDDIRealAccountResponse = {
  halLinks: HalLink[];
};
export type cancelDDIRealAccountInput = {};
export type cancelDDIRealAccountResponse = {
  halLinks: HalLink[];
};

export type createDDIVirtualAccountInput = {
  serviceUserNumber: string;
  originatorName: string;
  reference: string;
  payerName: string;
  counterpartAccount: CounterpartAccount;
  mandateType: string;
};

interface CounterpartAccount {
  identification: Identification;
}

interface Identification {
  iban: string;
  other: Other;
}

interface Other {
  identification: string;
  schemeName: SchemeName;
  issuer: string;
}

interface SchemeName {
  code: string;
  proprietary: string;
}

export type createDDIVirtualAccountResponse = {
  halLinks: HalLink[];
};
export type getAllDDIsVirtualAccountInput = {
  accountId: string;
  virtualAccountId: string;
};
export type getAllDDIsVirtualAccountResponse = {
  halLinks: HalLink[];
  directDebitMandates: DirectDebitMandate[];
};
export type amendDDIVirtualAccountInput = {
  reasonCode: string;
  newDebtorAccount: NewDebtorAccount;
};

interface NewDebtorAccount {
  identification: Identification;
}

interface Identification {
  iban: string;
  other: Other;
}

interface Other {
  identification: string;
  schemeName: SchemeName;
  issuer: string;
}

interface SchemeName {
  code: string;
  proprietary: string;
}

export type amendDDIVirtualAccountResponse = {
  halLinks: HalLink[];
};
export type returnDDIVirtualAccountInput = {};
export type returnDDIVirtualAccountResponse = {
  halLinks: HalLink[];
};
export type cancelDDIVirtualAccountInput = {
  reasonCode: string;
};
export type cancelDDIVirtualAccountResponse = {
  halLinks: HalLink[];
};
