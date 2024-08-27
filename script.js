async function convertCurrency(){
    const amount = document.getElementById("currency_value_amount").value;
    const currency = document.getElementById("currency").value;

    if(!amount){
        alert("Please enter an amount.");
        return 
    }


    const response_document = {
        "result": "success",
        "documentation": "https://www.exchangerate-api.com/docs",
        "terms_of_use": "https://www.exchangerate-api.com/terms",
        "time_last_update_unix": 1724716801,
        "time_last_update_utc": "Tue, 27 Aug 2024 00:00:01 +0000",
        "time_next_update_unix": 1724803201,
        "time_next_update_utc": "Wed, 28 Aug 2024 00:00:01 +0000",
        "base_code": "INR",
        "conversion_rates": {
            "INR": 1,
            "AED": 0.04378,
            "AFN": 0.8422,
            "ALL": 1.0696,
            "AMD": 4.6273,
            "ANG": 0.02134,
            "AOA": 10.9485,
            "ARS": 11.3128,
            "AUD": 0.0176,
            "AWG": 0.02134,
            "AZN": 0.02027,
            "BAM": 0.02088,
            "BBD": 0.02384,
            "BDT": 1.4247,
            "BGN": 0.02088,
            "BHD": 0.004482,
            "BIF": 34.283,
            "BMD": 0.01192,
            "BND": 0.01554,
            "BOB": 0.08233,
            "BRL": 0.06543,
            "BSD": 0.01192,
            "BTN": 1.0,
            "BWP": 0.1587,
            "BYN": 0.03861,
            "BZD": 0.02384,
            "CAD": 0.01609,
            "CDF": 33.6481,
            "CHF": 0.0101,
            "CLP": 10.8408,
            "CNY": 0.08491,
            "COP": 47.9063,
            "CRC": 6.2673,
            "CUP": 0.2861,
            "CVE": 1.1772,
            "CZK": 0.2672,
            "DJF": 2.1184,
            "DKK": 0.07966,
            "DOP": 0.7088,
            "DZD": 1.6015,
            "EGP": 0.5813,
            "ERN": 0.1788,
            "ETB": 1.3234,
            "EUR": 0.01068,
            "FJD": 0.0263,
            "FKP": 0.00904,
            "FOK": 0.07967,
            "GBP": 0.00904,
            "GEL": 0.03218,
            "GGP": 0.00904,
            "GHS": 0.1875,
            "GIP": 0.00904,
            "GMD": 0.8405,
            "GNF": 103.2137,
            "GTQ": 0.09218,
            "GYD": 2.4959,
            "HKD": 0.09295,
            "HNL": 0.2945,
            "HRK": 0.08044,
            "HTG": 1.5725,
            "HUF": 4.2155,
            "IDR": 184.2681,
            "ILS": 0.04381,
            "IMP": 0.00904,
            "IQD": 15.5966,
            "IRR": 506.678,
            "ISK": 1.632,
            "JEP": 0.00904,
            "JMD": 1.8639,
            "JOD": 0.008451,
            "JPY": 1.7208,
            "KES": 1.5388,
            "KGS": 1.0189,
            "KHR": 48.4533,
            "KID": 0.0176,
            "KMF": 5.2521,
            "KRW": 15.8178,
            "KWD": 0.00364,
            "KYD": 0.009933,
            "KZT": 5.7601,
            "LAK": 260.9335,
            "LBP": 1066.817,
            "LKR": 3.5878,
            "LRD": 2.3179,
            "LSL": 0.2113,
            "LYD": 0.05678,
            "MAD": 0.115,
            "MDL": 0.2073,
            "MGA": 54.2388,
            "MKD": 0.6592,
            "MMK": 32.9644,
            "MNT": 40.6005,
            "MOP": 0.09574,
            "MRU": 0.4742,
            "MUR": 0.5501,
            "MVR": 0.1835,
            "MWK": 20.772,
            "MXN": 0.2298,
            "MYR": 0.05183,
            "MZN": 0.7619,
            "NAD": 0.2113,
            "NGN": 18.9225,
            "NIO": 0.4376,
            "NOK": 0.1256,
            "NPR": 1.6,
            "NZD": 0.01921,
            "OMR": 0.004583,
            "PAB": 0.01192,
            "PEN": 0.04467,
            "PGK": 0.04642,
            "PHP": 0.6679,
            "PKR": 3.3234,
            "PLN": 0.04571,
            "PYG": 90.5578,
            "QAR": 0.04339,
            "RON": 0.05311,
            "RSD": 1.2493,
            "RUB": 1.0936,
            "RWF": 16.2824,
            "SAR": 0.0447,
            "SBD": 0.1006,
            "SCR": 0.1609,
            "SDG": 5.3284,
            "SEK": 0.1217,
            "SGD": 0.01554,
            "SHP": 0.00904,
            "SLE": 0.2672,
            "SLL": 267.1786,
            "SOS": 6.818,
            "SRD": 0.3478,
            "SSP": 33.3786,
            "STN": 0.2616,
            "SYP": 156.7895,
            "SZL": 0.2113,
            "THB": 0.4054,
            "TJS": 0.1264,
            "TMT": 0.04172,
            "TND": 0.03624,
            "TOP": 0.0278,
            "TRY": 0.4057,
            "TTD": 0.08065,
            "TVD": 0.0176,
            "TWD": 0.3785,
            "TZS": 32.3942,
            "UAH": 0.4929,
            "UGX": 44.2882,
            "USD": 0.01192,
            "UYU": 0.4799,
            "UZS": 150.5742,
            "VES": 0.4358,
            "VND": 300.3595,
            "VUV": 1.4092,
            "WST": 0.03221,
            "XAF": 7.0028,
            "XCD": 0.03218,
            "XDR": 0.00883,
            "XOF": 7.0028,
            "XPF": 1.274,
            "YER": 2.9858,
            "ZAR": 0.2114,
            "ZMW": 0.3139,
            "ZWL": 0.1647
        }
    }


    try{
        const rate = response_document.conversion_rates[currency];
        const converted_amount = (amount * rate).toFixed(2);
        const result = `${amount} INR = ${converted_amount} ${currency}`;
        console.log(result);
        document.getElementById('result').innerHTML = result;
    }
    catch(error){
        console.error('Error fetching exchange rates :',error)
        alert('Failed to retrieve exchange rates.Please try again later')
    }
}