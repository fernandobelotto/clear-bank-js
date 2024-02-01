export type createRetailCustomerInput = {
  firstName: string;
  middleName: string;
  surname: string;
  dateOfBirth: string;
  email: string;
  idCountryOfIssue: string;
  idType: string;
  idNumber: string;
  idExpiryDate: string;
  currentAddress: CurrentAddress;
  previousAddresses: CurrentAddress[];
};

interface CurrentAddress {
  addressType: string;
  validFrom: string;
  validTo: string;
  countryCode: string;
  buildingNameNumber: string;
  streetName: string;
  city: string;
  county: string;
  postalCode: string;
}

export type createRetailCustomerResponse = {
  id: string;
};
export type createAccountInput = {
  owner: Owner;
  sortCode: string;
  productId: string;
  customerId: string;
  minimumBalance: number;
};

interface Owner {
  name: string;
}

export type createAccountResponse = {
  id: string;
  name: string;
  label: string;
  type: string;
  currency: string[];
  balances: Balance[];
  productId: string;
  customerId: string;
  minimumBalance: number;
  iban: string;
  bban: string;
  upic: string;
  cuid: string;
};

interface Balance {
  name: string;
  amount: number;
  currency: string;
  status: string;
  lastCommittedTransaction: string;
}

export type updateExistingRetailCustomerPersonalInformationInput = {
  firstName: string;
  middleName: string;
  surname: string;
  dateOfBirth: string;
  email: string;
  idCountryOfIssue: string;
  idType: string;
  idNumber: string;
  idExpiryDate: string;
};

export type updateExistingRetailCustomerAddressInput = {
  addressType: string;
  validFrom: string;
  validTo: string;
  countryCode: string;
  buildingNameNumber: string;
  streetName: string;
  city: string;
  county: string;
  postalCode: string;
};
