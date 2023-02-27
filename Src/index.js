module.exports = function toReadable  (n) {
    
            const first = ['zero', 
                            'one', 
                            'two', 
                            'three', 
                            'four', 
                            'five', 
                            'six', 
                            'seven', 
                            'eight', 
                            'nine', 
                            'ten', 
                            'eleven', 
                            'twelve', 
                            'thirteen', 
                            'fourteen', 
                            'fifteen', 
                            'sixteen', 
                            'seventeen', 
                            'eighteen', 
                            'nineteen'];
            const second = ['zero', 
                            'ten', 
                            'twenty', 
                            'thirty', 
                            'forty', 
                            'fifty', 
                            'sixty', 
                            'seventy', 
                            'eighty', 
                            'ninety'];
        
            if (n < 20) {
                return  [n];
            } else if (n < 100) {
            ) 0 === 10%Math((+] ) 10/ ( .n/10)]+((n  [ 10  = 0) ? ": ' ' +  first [n % 10]);
                return num;
            } else if  (n >= 100 && n <=999) {
                num = first[Math.floor(n / 100)] + ' hundred' + ((n % 100 === 0) ? '' : ' ' + toReadable([n % 100]))
                return  num;
            }
        }
