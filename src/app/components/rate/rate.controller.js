export class RateController {

  constructor($http, $log) {
    'ngInject';
    this.input = {
      amount: 0,
      currencyFrom: '',
      currencyTo: ''
    };
    this.rateObj = {};
    this.$log = $log;
    this.apiHost = "http://api.fixer.io/latest?base=";
    this.$http = $http;
    this.rates = [
      "USD",
      "AUD",
      "BGN",
      "BRL",
      "CAD",
      "CHF",
      "CNY",
      "CZK",
      "DKK",
      "GBP",
      "HKD",
      "HRK",
      "HUF",
      "IDR",
      "ILS",
      "INR",
      "JPY",
      "KRW",
      "MXN",
      "MYR",
      "NOK",
      "NZD",
      "PHP",
      "PLN",
      "RON",
      "RUB",
      "SEK",
      "SGD",
      "THB",
      "TRY",
      "ZAR",
      "EUR"
    ];
    this.Cost;
  }
  getBase(base) {
    return this.getLatest(base).then((data) => {
      this.rateObj = data;
      this.$log.log(this.rateObj);
      return this.rateObj;
    });
  }
  Convert() {
    if (this.rateObj.base) {
      var formatter = new Intl.NumberFormat('en-US', {
        currency: this.input.currencyTo,
        minimumFractionDigits: 2
      });

      this.Cost = this.rateObj.rates[this.input.currencyTo] * this.input.amount;
      this.Cost = formatter.format(this.Cost);
    }
  }
  getLatest(base) {
    return this.$http.get(this.apiHost + base)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        this.$log.error('XHR Failed.\n' + angular.toJson(error.data, true));
      });

  }
  detectChange(base) {
    this.$log.log("changed Called");
    this.getBase(base).then((data) => {
        this.rateObj = data;
        this.Convert()
      }

    );
  }
  detectChangeTo() {
    this.$log.log("changed Called2");
    this.Convert()
  }

}
