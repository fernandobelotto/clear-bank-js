import { expect, it, test } from "bun:test";
import { ClearBankAPI } from "../src";

it("should have all the property and methods", () => {
  const clearBankClient = ClearBankAPI({
    baseURL: "https://api.clear.bank",
    secretKey: "secretKey",
  });

  expect(clearBankClient.accounts).toBeDefined();
  expect(clearBankClient.paymentsData).toBeDefined();
  expect(clearBankClient.bacsPaymentData).toBeDefined();
  expect(clearBankClient.fastPayments).toBeDefined();
  expect(clearBankClient.bacs).toBeDefined();
  expect(clearBankClient.bacsDirectDebit).toBeDefined();
  expect(clearBankClient.chaps).toBeDefined();
  expect(clearBankClient.confirmationOfPayee).toBeDefined();
  expect(clearBankClient.mccy).toBeDefined();
  expect(clearBankClient.accountReporting).toBeDefined();
  expect(clearBankClient.multiCurrencyPayments).toBeDefined();
  expect(clearBankClient.fxTrades).toBeDefined();
  expect(clearBankClient.fscs).toBeDefined();
});
