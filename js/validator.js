const validator = {

    isValid: function (creditCardNumber) {
      let arrayCardNumber = creditCardNumber.split('');
      let sum = 0;
      arrayCardNumber.reverse();
      var i;
      if (arrayCardNumber.length > 16) {
        return false;
      }
      for (i = 0; i < arrayCardNumber.length; i++) {
        let cardDigit = parseInt(arrayCardNumber[i]);
        if ((i % 2) != 0) {
          cardDigit = cardDigit * 2;
          if (cardDigit > 9) {
            cardDigit = cardDigit - 9;
          } 
        }
        sum = sum + cardDigit;
      }
  
      if ((sum % 10) == 0) {
        return true;
      }
      else {
        return false;
      }
  
    },
  
    maskify: function (creditCardNumber) {
      const encryptDigits = creditCardNumber.slice(0, -4).replace(/./g, '#');
      const lastDigits = creditCardNumber.slice(-4);
      creditCardNumber = encryptDigits + lastDigits;
      return creditCardNumber;
  
    }
  
  };
  
  export default validator;