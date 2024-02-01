export type optOutFromTheCoPServiceRealAccountInput = {
  optOut: boolean;
  optOutReason: string;
};

export type optOutFromTheCoPServiceVirtualAccountInput = {
  optOut: boolean;
  optOutReason?: string;
};

export type checkPayeeAccountNameInput = {
  SchemeName: string;
  LegalOwnerType: string;
  Identification: string;
  OwnerName: string;
  SecondaryIdentification: string;
  EndToEndIdentification: string;
};

export type checkPayeeAccountNameResponse = {
  Data: Data;
};

interface Data {
  VerificationReport: VerificationReport;
}

interface VerificationReport {
  Matched: boolean;
  Name: string;
  ReasonCode: string;
  ReasonCodeDescription: string;
  MatchedBank: string;
  ResponseWithinSla: boolean;
  LegalOwnerType: string;
  ResponderRegistrationId: string;
}

export type checkWhetherASortCodeAccountNumberRequiresSrdInput = {
  SchemeName: string;
  Identification: string;
};

export type checkWhetherASortCodeAccountNumberRequiresSrdResponse = {
  Data: Data;
};

interface Data {
  Required: boolean;
  BankName: string;
  Identification: string;
}

export type getCertificateTypeInput = {
  softwareStatementId: string;
  certificatetype: string;
};
export type getCertificateTypeResponse = {
  // todo : add the response values here
  value: string;
};
export type createANewCertificateInput = {
  pem: string;
  kid: string;
  certificateType: string;
};
