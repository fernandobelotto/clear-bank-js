export type createAForeignExchangeFxBuyAndSellOrderInput = {
  customerInformation: CustomerInformation;
  tradeInformation: TradeInformation;
};

interface TradeInformation {
  valueDate: string;
  details: Details;
  margin: Margin;
  endToEndId: string;
  unstructuredInformation: string;
}

interface Margin {
  amount: number;
  account: SellAccount;
}

interface Details {
  instructedAmount: number;
  fixedSide: string;
  sellCurrency: string;
  buyCurrency: string;
}

interface CustomerInformation {
  sellAccount: SellAccount;
  buyAccount: SellAccount;
  attestation: string;
}

interface SellAccount {
  owner: string;
  iban: string;
}
