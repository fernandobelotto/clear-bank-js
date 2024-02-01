import { HalLink } from "../shared/types";

export type returnBacsPaymentRealAccountBody = {
  returns: Return[];
};

interface Return {
  transactionId: string;
  reasonCode: string;
}

export type returnBacsPaymentRealAccountResponse = {
  halLinks: HalLink[];
};

export type returnBacsPaymentVirtualAccountInput = {
  returns: Return[];
};

export type returnBacsPaymentVirtualAccountResponse = {
  halLinks: HalLink[];
};
