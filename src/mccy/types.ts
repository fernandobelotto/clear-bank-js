export type createANewAccountRealInput = {
  label: string;
  owner: string;
  kind: string;
  currencies: string[];
  identifiers: Identifier[];
  routingCode: RoutingCode;
  productId: string;
  customerId: string;
};

interface RoutingCode {
  code: string;
  kind: string;
}

interface Identifier {
  identifier: string;
  kind: string;
}

export type createANewAccountRealResponse = {
  id: string;
  name: string;
  label: string;
  owner: string;
  kind: string;
  currencies: string[];
  productId: string;
  customerId: string;
  identifiers: Identifier[];
  status: string;
  statusReason: string;
  statusInformation: string;
};

interface Identifier {
  identifier: string;
  kind: string;
}

export type getAllAccountsRealInput = {};
export type getAllAccountsRealResponse = {
  accounts: Account[];
};
interface Account {
  id: string;
  name: string;
  label: string;
  owner: string;
  kind: string;
  currencies: string[];
  productId: string;
  customerId: string;
  identifiers: Identifier[];
  status: string;
  statusReason: string;
  statusInformation: string;
  type: string;
}

interface Identifier {
  identifier: string;
  kind: string;
}

export type getInformationForAnAccountRealInput = {
  accountId: string;
};

export type getInformationForAnAccountRealResponse = {
  id: string;
  name: string;
  label: string;
  owner: string;
  kind: string;
  currencies: string[];
  productId: string;
  customerId: string;
  identifiers: Identifier[];
  status: string;
  statusReason: string;
  statusInformation: string;
  type: string;
};

interface Identifier {
  identifier: string;
  kind: string;
}

export type amendThePropertiesOfAnAccountRealInput = {
  label: string;
  owner: string;
};

export type amendThePropertiesOfAnAccountRealResponse = {
  id: string;
  name: string;
  label: string;
  owner: string;
  kind: string;
  currencies: string[];
  productId: string;
  customerId: string;
  identifiers: Identifier[];
  status: string;
  statusReason: string;
  statusInformation: string;
};

interface Identifier {
  identifier: string;
  kind: string;
}

export type updateTheStatusOfAnAccountRealInput = {
  status: string;
  statusReason: string;
  information: string;
};

export type updateTheStatusOfAnAccountRealResponse = {
  id: string;
  name: string;
  label: string;
  owner: string;
  kind: string;
  currencies: string[];
  productId: string;
  customerId: string;
  identifiers: Identifier[];
  status: string;
  statusReason: string;
  statusInformation: string;
};

interface Identifier {
  identifier: string;
  kind: string;
}

export type addACurrencyToAnExistingAccountRealInput = {
  currency: string;
};

export type addACurrencyToAnExistingAccountRealResponse = {
  id: string;
  name: string;
  label: string;
  owner: string;
  kind: string;
  currencies: string[];
  productId: string;
  customerId: string;
  identifiers: Identifier[];
  status: string;
  statusReason: string;
  statusInformation: string;
};

interface Identifier {
  identifier: string;
  kind: string;
}

export type getTheBalanceOfAnAccountRealInput = {
  accountId: string;
};
export type getTheBalanceOfAnAccountRealResponse = {
  balances: Balances;
};

interface Balances {
  EUR: EUR;
  USD: EUR;
  CZK: EUR;
}

interface EUR {
  Available: number;
  Actual: number;
}

export type closeAnExistingAccountRealInput = {
  accountId: string;
};
export type closeAnExistingAccountRealResponse = {
  // todo : add the response values here
  value: string;
};
export type createAnAccountVirtualInput = {
  accountId: string;
  virtualAccount: VirtualAccount;
};

interface VirtualAccount {
  owner: string;
  identifiers: Identifier[];
}

interface Identifier {
  identifier: string;
  kind: string;
}

export type createAnAccountVirtualResponse = {
  id: string;
  accountId: string;
  owner: string;
  status: string;
  identifiers: Identifier[];
  statusReason: string;
  statusInformation: string;
};

interface Identifier {
  identifier: string;
  kind: string;
}

export type getInformationForAnAccountVirtualInput = {
  virtualAccountId: string;
};

export type getInformationForAnAccountVirtualResponse = {
  id: string;
  accountId: string;
  owner: string;
  status: string;
  identifiers: Identifier[];
  statusReason: string;
  statusInformation: string;
};

interface Identifier {
  identifier: string;
  kind: string;
}

export type amendThePropertiesOfAnAccountVirtualInput = {
  owner: string;
};

export type updateTheStatusOfAnAccountVirtualInput = {
  status: string;
  statusReason: string;
  information: string;
};

export type updateTheStatusOfAnAccountVirtualResponse = {
  // todo : add the response values here
  value: string;
};
export type closeAnAccountVirtualInput = {};
export type closeAnAccountVirtualResponse = {
  // todo : add the response values here
  value: string;
};
