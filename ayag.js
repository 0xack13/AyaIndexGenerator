// ayaj.js
var ayag = {

    hexc: function(colorval) {
    	var parts = colorval.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
        delete(parts[0]);
        for (var i = 1; i <= 3; ++i) {
            parts[i] = parseInt(parts[i]).toString(16);
            if (parts[i].length == 1) parts[i] = '0' + parts[i];
        }
        color = '#' + parts.join('');
        console.log(color);
    },
    
    convertDigitIn: function(enDigit){
    	var newValue="";
        for (var i=0;i<enDigit.length;i++)
        	{
            	var ch=enDigit.charCodeAt(i);
                if (ch>=48 && ch<=57)
                    {
                        var newChar=ch+1584;
                        newValue=newValue+String.fromCharCode(newChar);
                    }
                    else
                        newValue=newValue+String.fromCharCode(ch);
            }
        return '﴿' + newValue + '﴾';
    },
}