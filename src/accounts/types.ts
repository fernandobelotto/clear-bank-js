import { HalLink } from "../shared/types";

export type getAllAccountsRealInput = {
  PageNumber?: number;
  PageSize?: number;
};

export type getAllAccountsRealResponse = {
  accounts: Account[];
  halLinks: HalLink[];
};

type Account = {
  id: string;
  name: string;
  label: string;
  type: string;
  currency: string[];
  balances: Balance[];
  minimumBalance: Balance;
  status: string;
  statusReason: string;
  iban: string;
  bban: string;
  upic: string;
  cuid: string;
};

type Balance = {
  name: string;
  amount: number;
  currency: string;
  status: string;
  lastCommittedTransaction: string;
};

export type createAnAccountRealInput = {
  accountName: string;
  owner: Owner;
  sortCode: string;
  usageType?: string;
};

type Owner = {
  name: string;
};

export interface createAnAccountRealResponse {
  account: Account;
  halLinks: HalLink[];
}

export type getInformationForAnAccountRealInput = {
  accountId: string;
};

export type getInformationForAnAccountRealResponse = {
  account: Account;
  halLinks: HalLink[];
};

export type amendAnAccountRealInput = {
  status?: string;
  statusReason?: string;
  ownerName?: string;
  legalOwnerType?: string;
  relationshipType?: string;
  minimumBalance?: number;
};

export type getAccountsVirtualInput = {};

export type getAccountsVirtualResponse = {
  accounts: Account[];
  halLinks: HalLink[];
};

export type createAccountsVirtualInput = {
  virtualAccounts: VirtualAccount[];
};

interface VirtualAccount {
  ownerName: string;
  accountIdentifier: AccountIdentifier;
}

interface AccountIdentifier {
  iban: string;
  bban: string;
  proprietaryIdentifier: string;
  externalIdentifier: string;
}

export type createAccountsVirtualResponse = {
  halLinks: HalLink[];
};

export type getAllVirtualAccountsForARealAccountInput = {
  accountId: string;
};

export type getAllVirtualAccountsForARealAccountResponse = {
  accounts: Account[];
  halLinks: HalLink[];
};

export type getInformationForAnAccountVirtualInput = {
  accountId: string;
  virtualAccountId: string;
};

export type getInformationForAnAccountVirtualResponse = {
  accounts: Account[];
  halLinks: HalLink[];
};

export type amendAnAccountVirtualInput = {
  accountId: string;
  virtualAccountId: string;
};

export type amendAnAccountVirtualResponse = {
  // todo : add the response values here
  value: string;
};

export type disableAnAccountVirtualInput = {
  accountId: string;
  virtualAccountId: string;
};

export type disableAnAccountVirtualResponse = {
  // todo : add the response values here
  value: string;
};
