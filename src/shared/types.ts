export interface HalLink {
  name: string;
  href: string;
  templated: boolean;
}

export interface Amount {
  instructedAmount: number;
  currency: string;
}

export interface Other {
  identification: string;
  schemeName: SchemeName;
  issuer: string;
}
export interface SchemeName {
  code: string;
  proprietary: string;
}
