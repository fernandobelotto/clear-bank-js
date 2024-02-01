import accounts from "./accounts";
import paymentsData from "./paymentsData";
import bacsPaymentData from "./bacsPaymentData";
import fastPayments from "./fastPayments";
import bacs from "./bacs";
import bacsDirectDebit from "./bacsDirectDebit";
import chaps from "./chaps";
import confirmationOfPayee from "./confirmationOfPayee";
import mccy from "./mccy";
import accountReporting from "./accountReporting";
import multiCurrencyPayments from "./multiCurrencyPayments";
import fxTrades from "./fxTrades";
import fscs from "./fscs";
import axios from "axios";

export const axiosClient = axios.create();

type Configuration = {
  baseURL: string;
  secretKey: string;
};

export const ClearBankAPI = (config: Configuration) => {
  axiosClient.defaults.baseURL = config.baseURL;
  axiosClient.defaults.headers.Authorization = `Bearer ${config.secretKey}`;

  // TODO: add these headers for the appropriate endpoints
  // axiosClient.defaults.headers.DigitalSignature = config.DigitalSignature
  // axiosClient.defaults.headers.['X-Request-Id'] = config.XRequestId

  return {
    accounts,
    paymentsData,
    bacsPaymentData,
    fastPayments,
    bacs,
    bacsDirectDebit,
    chaps,
    confirmationOfPayee,
    mccy,
    accountReporting,
    multiCurrencyPayments,
    fxTrades,
    fscs,
  };
};
