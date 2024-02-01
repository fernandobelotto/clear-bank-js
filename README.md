# clear-bank-sdk

original documentation at https://clearbank.github.io/docs/api/overview
Description:

The Clear Bank SDK is a simple yet powerful client SDK for Javascript/Typescript developers. It makes it easy to add banking features to your apps. This SDK helps you connect your app to Clear Bank's REST API and includes all the necessary endpoints.


## Usage

```typescript
import { ClearBankAPI } from "clear-bank-js";

const cba = ClearBankApi({
  baseURL: "",
  apikey: "",
});

const result = await cba.accounts.getAllAccountsReal();
```

## Roadmap:

- [x] accounts
- [x] paymentsData
- [x] bacsPaymentData
- [x] fastPayments
- [x] bacs
- [x] bacsDirectDebit
- [x] chaps
- [x] confirmationOfPayee
- [x] mccy
- [x] accountReporting
- [x] multiCurrencyPayments
- [x] fxTrades
- [x] fscs
- [ ] Improve documentation