/**
 * Created by lnwf9885 on 16/02/2016.
 */
var _ = require("underscore"),
    Backbone = require("backbone");

var Validation = _.extend(Backbone.Validation.validators, {
    luhn: function (value) {
        var luhn = function (cardnumber) {
            // Build an array with the digits in the card number
            var getdigits = /\d/g;
            var digits = [];
            var match;

            while (match = getdigits.exec(cardnumber)) {
                digits.push(parseInt(match[0], 10));
            }

            // Run the Luhn algorithm on the array
            var sum = 0;
            var alt = false;

            for (var i = digits.length - 1; i >= 0; i--) {
                // On every other number in the card sequence...
                if (alt) {
                    digits[i] *= 2; // multiple the number by itself

                    // If the number is now over 9 then we'll minus 9 from the number
                    if (digits[i] > 9) {
                        digits[i] -= 9;
                    }
                }

                // Add this digit onto the current total sum
                sum += digits[i];

                // Alternate
                alt = !alt;
            }

            /*
             The individual card numbers (after the above algorithm is applied and then when added together)
             should be possible to divide by 10 with zero left over
             */
            if (sum % 10 === 0) {
                return true;
            } else {
                return false;
            }
        };

        if (!luhn(value)) {
            return "error";
        }
    }
});

module.exports = Validation;