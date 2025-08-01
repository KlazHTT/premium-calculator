const shortRate = {
  1: 0.05,
  2: 0.06,
  3: 0.07,
  4: 0.07,
  5: 0.08,
  6: 0.08,
  7: 0.09,
  8: 0.09,
  9: 0.10,
  10: 0.10,
  11: 0.11,
  12: 0.11,
  13: 0.12,
  14: 0.12,
  15: 0.13,
  16: 0.13,
  17: 0.14,
  18: 0.14,
  19: 0.15,
  20: 0.15,
  21: 0.16,
  22: 0.16,
  23: 0.17,
  24: 0.17,
  25: 0.17,
  26: 0.18,
  27: 0.18,
  28: 0.18,
  29: 0.18,
  30: 0.19,
  31: 0.19,
  32: 0.19,
  33: 0.20,
  34: 0.20,
  35: 0.20,
  36: 0.20,
  37: 0.21,
  38: 0.21,
  39: 0.21,
  40: 0.21,
  41: 0.22,
  42: 0.22,
  43: 0.22,
  44: 0.23,
  45: 0.23,
  46: 0.23,
  47: 0.23,
  48: 0.24,
  49: 0.24,
  50: 0.24,
  51: 0.24,
  52: 0.25,
  53: 0.25,
  54: 0.25,
  55: 0.26,
  56: 0.26,
  57: 0.26,
  58: 0.26,
  59: 0.27,
  60: 0.27,
  61: 0.27,
  62: 0.27,
  63: 0.28,
  64: 0.28,
  65: 0.28,
  66: 0.29,
  67: 0.29,
  68: 0.29,
  69: 0.29,
  70: 0.30,
  71: 0.30,
  72: 0.30,
  73: 0.30,
  74: 0.31,
  75: 0.31,
  76: 0.31,
  77: 0.32,
  78: 0.32,
  79: 0.32,
  80: 0.32,
  81: 0.33,
  82: 0.33,
  83: 0.33,
  84: 0.34,
  85: 0.34,
  86: 0.34,
  87: 0.34,
  88: 0.35,
  89: 0.35,
  90: 0.35,
  91: 0.35,
  92: 0.36,
  93: 0.36,
  94: 0.36,
  95: 0.37,
  96: 0.37,
  97: 0.37,
  98: 0.37,
  99: 0.38,
  100: 0.38,
  101: 0.38,
  102: 0.38,
  103: 0.39,
  104: 0.39,
  105: 0.39,
  106: 0.40,
  107: 0.40,
  108: 0.40,
  109: 0.40,
  110: 0.41,
  111: 0.41,
  112: 0.41,
  113: 0.41,
  114: 0.42,
  115: 0.42,
  116: 0.42,
  117: 0.43,
  118: 0.43,
  119: 0.43,
  120: 0.43,
  121: 0.44,
  122: 0.44,
  123: 0.44,
  124: 0.44,
  125: 0.45,
  126: 0.45,
  127: 0.45,
  128: 0.46,
  129: 0.46,
  130: 0.46,
  131: 0.46,
  132: 0.47,
  133: 0.47,
  134: 0.47,
  135: 0.47,
  136: 0.48,
  137: 0.48,
  138: 0.48,
  139: 0.49,
  140: 0.49,
  141: 0.49,
  142: 0.49,
  143: 0.50,
  144: 0.50,
  145: 0.50,
  146: 0.50,
  147: 0.51,
  148: 0.51,
  149: 0.51,
  150: 0.52,
  151: 0.52,
  152: 0.52,
  153: 0.52,
  154: 0.53,
  155: 0.53,
  156: 0.53,
  157: 0.53,
  158: 0.54,
  159: 0.54,
  160: 0.54,
  161: 0.55,
  162: 0.55,
  163: 0.55,
  164: 0.55,
  165: 0.56,
  166: 0.56,
  167: 0.56,
  168: 0.57,
  169: 0.57,
  170: 0.57,
  171: 0.57,
  172: 0.58,
  173: 0.58,
  174: 0.58,
  175: 0.58,
  176: 0.59,
  177: 0.59,
  178: 0.59,
  179: 0.60,
  180: 0.60,
  181: 0.60,
  182: 0.60,
  183: 0.61,
  184: 0.61,
  185: 0.61,
  186: 0.61,
  187: 0.61,
  188: 0.62,
  189: 0.62,
  190: 0.62,
  191: 0.62,
  192: 0.63,
  193: 0.63,
  194: 0.63,
  195: 0.63,
  196: 0.63,
  197: 0.64,
  198: 0.64,
  199: 0.64,
  200: 0.64,
  201: 0.65,
  202: 0.65,
  203: 0.65,
  204: 0.65,
  205: 0.65,
  206: 0.66,
  207: 0.66,
  208: 0.66,
  209: 0.66,
  210: 0.67,
  211: 0.67,
  212: 0.67,
  213: 0.67,
  214: 0.67,
  215: 0.68,
  216: 0.68,
  217: 0.68,
  218: 0.68,
  219: 0.69,
  220: 0.69,
  221: 0.69,
  222: 0.69,
  223: 0.69,
  224: 0.70,
  225: 0.70,
  226: 0.70,
  227: 0.70,
  228: 0.70,
  229: 0.71,
  230: 0.71,
  231: 0.71,
  232: 0.71,
  233: 0.72,
  234: 0.72,
  235: 0.72,
  236: 0.72,
  237: 0.72,
  238: 0.73,
  239: 0.73,
  240: 0.73,
  241: 0.73,
  242: 0.74,
  243: 0.74,
  244: 0.74,
  245: 0.74,
  246: 0.74,
  247: 0.75,
  248: 0.75,
  249: 0.75,
  250: 0.75,
  251: 0.76,
  252: 0.76,
  253: 0.76,
  254: 0.76,
  255: 0.76,
  256: 0.77,
  257: 0.77,
  258: 0.77,
  259: 0.77,
  260: 0.77,
  261: 0.78,
  262: 0.78,
  263: 0.78,
  264: 0.78,
  265: 0.79,
  266: 0.79,
  267: 0.79,
  268: 0.79,
  269: 0.79,
  270: 0.80,
  271: 0.80,
  272: 0.80,
  273: 0.80,
  274: 0.81,
  275: 0.81,
  276: 0.81,
  277: 0.81,
  278: 0.81,
  279: 0.82,
  280: 0.82,
  281: 0.82,
  282: 0.82,
  283: 0.83,
  284: 0.83,
  285: 0.83,
  286: 0.83,
  287: 0.83,
  288: 0.84,
  289: 0.84,
  290: 0.84,
  291: 0.84,
  292: 0.85,
  293: 0.85,
  294: 0.85,
  295: 0.85,
  296: 0.85,
  297: 0.86,
  298: 0.86,
  299: 0.86,
  300: 0.86,
  301: 0.86,
  302: 0.87,
  303: 0.87,
  304: 0.87,
  305: 0.87,
  306: 0.88,
  307: 0.88,
  308: 0.88,
  309: 0.88,
  310: 0.88,
  311: 0.89,
  312: 0.89,
  313: 0.89,
  314: 0.89,
  315: 0.90,
  316: 0.90,
  317: 0.90,
  318: 0.90,
  319: 0.90,
  320: 0.91,
  321: 0.91,
  322: 0.91,
  323: 0.91,
  324: 0.92,
  325: 0.92,
  326: 0.92,
  327: 0.92,
  328: 0.92,
  329: 0.93,
  330: 0.93,
  331: 0.93,
  332: 0.93,
  333: 0.94,
  334: 0.94,
  335: 0.94,
  336: 0.94,
  337: 0.94,
  338: 0.95,
  339: 0.95,
  340: 0.95,
  341: 0.95,
  342: 0.95,
  343: 0.96,
  344: 0.96,
  345: 0.96,
  346: 0.96,
  347: 0.97,
  348: 0.97,
  349: 0.97,
  350: 0.97,
  351: 0.97,
  352: 0.98,
  353: 0.98,
  354: 0.98,
  355: 0.98,
  356: 0.99,
  357: 0.99,
  358: 0.99,
  360: 0.99,
  359: 0.99,
  361: 1.00,
  362: 1.00,
  363: 1.00,
  364: 1.00,
  365: 1.00,
  366: 1.00,  
};

function calculator() {
  // pull from input fields
  var effectiveDate = document.getElementById("effectiveDate").value;
  var expiryDate = document.getElementById("expiryDate").value;
  var cancelDate = document.getElementById("cancelDate").value;
  var totalPremium = document.getElementById("totalPremium").value;
  var breakDO = document.getElementById("breakDO").value || 0;
  var breakEPL = document.getElementById("breakEPL").value || 0;
  var breakEO = document.getElementById("breakEO").value || 0;
  var breakCyber = document.getElementById("breakCyber").value || 0;
  var breakLEI = document.getElementById("breakLEI").value || 0;
  var breakCGL = document.getElementById("breakCGL").value || 0;
  var breakProperty = document.getElementById("breakProperty").value || 0;
  var breakEB = document.getElementById("breakEB").value || 0;

  // calculate dates in policy term
  var policyDays = new Date(expiryDate).getTime() - new Date(effectiveDate).getTime();
  var termDays = policyDays / (1000 * 60 * 60 * 24);

  // calculate dates involved with cancellation
  var cancelDays = new Date(cancelDate).getTime() - new Date(effectiveDate).getTime();
  var forceDays = cancelDays / (1000 * 60 * 60 * 24);
  var remainingDays = termDays - forceDays;

  // calculate pro rata
  if(document.getElementById('calcProRata').checked) {
    var earnedFactor = Math.round(((forceDays / termDays) + Number.EPSILON)*1000)/1000;
    var unearnedFactor = Math.round(((remainingDays / termDays) + Number.EPSILON)*1000)/1000;
    document.getElementById("earnedFactor").className = 'normal';
    document.getElementById("unearnedFactor").className = 'normal';
  // calculate short rate
  }else if(document.getElementById('calcShortRate').checked) {
    const searchDate = forceDays;
    const shortRateFactor = shortRate[searchDate];
    var earnedFactor =  shortRateFactor;
    var unearnedFactor = Math.round(((1 - shortRateFactor) + Number.EPSILON)*1000)/1000;
  }else {
    var earnedFactor = 'ERROR'
    var unearnedFactor = 'ERROR'
    document.getElementById("earnedFactor").className = 'red';
    document.getElementById("unearnedFactor").className = 'red';
  }
  // calculate premiums
  var earnedPremium = Math.round(((totalPremium * earnedFactor) + Number.EPSILON)*100)/100;
  var unearnedPremium = Math.round(((totalPremium * unearnedFactor) + Number.EPSILON)*100)/100;
  document.getElementById("earnedPremium").className = 'green';
  document.getElementById("unearnedPremium").className = 'red';

  // calculate breakdown
  var calcBreak = +breakDO + +breakEPL + +breakEO + +breakCyber + +breakLEI + +breakCGL + +breakProperty + +breakEB;
  // check if breakdown matches total premium
  var calcMatch = calcBreak-totalPremium;
  if(totalPremium<calcBreak && totalPremium > 1) {
    var checkMatch = "❌ Total breakdown does not match total premium. It is too high by " + calcMatch + ".";
    document.getElementById("checkMatch").className = 'red';
    var calculateBreakdown = false;
  }else if(totalPremium>calcBreak && totalPremium > 1) {
    var checkMatch = "❌ Total breakdown does not match total premium. It is too low by " + calcMatch + ".";
    document.getElementById("checkMatch").className = 'red';
    var calculateBreakdown = false;
  }else if(totalPremium > 1) {
    var checkMatch = "✅ Total breakdown matches total premium!";
    document.getElementById("checkMatch").className = 'green';
    var calculateBreakdown = true;
  }else {
    var checkMatch = "⚠️ More information is required to provide premium breakdown.";
    document.getElementById("checkMatch").className = 'orange';
    var calculateBreakdown = false;
  }

  // calculate breakdowns
  if(calculateBreakdown == true) {
    var percentDO = Math.round((((breakDO / totalPremium) * 100) + Number.EPSILON)*100)/100;
    var earnedDO = Math.round(((breakDO * earnedFactor) + Number.EPSILON)*100)/100;
    var unearnedDO = Math.round(((breakDO * unearnedFactor) + Number.EPSILON)*100)/100;
    var percentEPL = Math.round((((breakEPL / totalPremium) * 100) + Number.EPSILON)*100)/100;
    var earnedEPL = Math.round(((breakEPL * earnedFactor) + Number.EPSILON)*100)/100;
    var unearnedEPL = Math.round(((breakEPL * unearnedFactor) + Number.EPSILON)*100)/100;
    var percentEO = Math.round((((breakEO / totalPremium) * 100) + Number.EPSILON)*100)/100;
    var earnedEO = Math.round(((breakEO * earnedFactor) + Number.EPSILON)*100)/100;
    var unearnedEO = Math.round(((breakEO * unearnedFactor) + Number.EPSILON)*100)/100;
    var percentCyber = Math.round((((breakCyber / totalPremium) * 100)  + Number.EPSILON)*100)/100;
    var earnedCyber = Math.round(((breakCyber * earnedFactor) + Number.EPSILON)*100)/100;
    var unearnedCyber = Math.round(((breakCyber * unearnedFactor) + Number.EPSILON)*100)/100;
    var percentLEI = Math.round((((breakLEI / totalPremium) * 100)  + Number.EPSILON)*100)/100;
    var earnedLEI = Math.round(((breakLEI * earnedFactor) + Number.EPSILON)*100)/100;
    var unearnedLEI = Math.round(((breakLEI * unearnedFactor) + Number.EPSILON)*100)/100;
    var percentCGL = Math.round((((breakCGL / totalPremium) * 100)  + Number.EPSILON)*100)/100;
    var earnedCGL = Math.round(((breakCGL * earnedFactor) + Number.EPSILON)*100)/100;
    var unearnedCGL = Math.round(((breakCGL * unearnedFactor) + Number.EPSILON)*100)/100;
    var percentProperty = Math.round((((breakProperty / totalPremium) * 100)  + Number.EPSILON)*100)/100;
    var earnedProperty = Math.round(((breakProperty * earnedFactor) + Number.EPSILON)*100)/100;
    var unearnedProperty = Math.round(((breakProperty * unearnedFactor) + Number.EPSILON)*100)/100;
    var percentEB = Math.round((((breakEB / totalPremium) * 100)  + Number.EPSILON)*100)/100;
    var earnedEB = Math.round(((breakEB * earnedFactor) + Number.EPSILON)*100)/100;
    var unearnedEB = Math.round(((breakEB * unearnedFactor) + Number.EPSILON)*100)/100;
    document.getElementById("percentDO").className = 'normal';
    document.getElementById("earnedDO").className = 'green';
    document.getElementById("unearnedDO").className = 'red';
    document.getElementById("percentEPL").className = 'normal';
    document.getElementById("earnedEPL").className = 'green';
    document.getElementById("unearnedEPL").className = 'red';
    document.getElementById("percentEO").className = 'normal';
    document.getElementById("earnedEO").className = 'green';
    document.getElementById("unearnedEO").className = 'red';
    document.getElementById("percentCyber").className = 'normal';
    document.getElementById("earnedCyber").className = 'green';
    document.getElementById("unearnedCyber").className = 'red';
    document.getElementById("percentLEI").className = 'normal';
    document.getElementById("earnedLEI").className = 'green';
    document.getElementById("unearnedLEI").className = 'red';
    document.getElementById("percentCGL").className = 'normal';
    document.getElementById("earnedCGL").className = 'green';
    document.getElementById("unearnedCGL").className = 'red';
    document.getElementById("percentProperty").className = 'normal';
    document.getElementById("earnedProperty").className = 'green';
    document.getElementById("unearnedProperty").className = 'red';
    document.getElementById("percentEB").className = 'normal';
    document.getElementById("earnedEB").className = 'green';
    document.getElementById("unearnedEB").className = 'red';
  }else {
    var percentDO = '-'
    var earnedDO = '-'
    var unearnedDO = '-'
    var percentEPL = '-'
    var earnedEPL = '-'
    var unearnedEPL = '-'
    var percentEO = '-'
    var earnedEO = '-'
    var unearnedEO = '-'
    var percentCyber = '-'
    var earnedCyber = '-'
    var unearnedCyber = '-'
    var percentLEI = '-'
    var earnedLEI = '-'
    var unearnedLEI = '-'
    var percentCGL = '-'
    var earnedCGL = '-'
    var unearnedCGL = '-'
    var percentProperty = '-'
    var earnedProperty = '-'
    var unearnedProperty = '-'
    var percentEB = '-'
    var earnedEB = '-'
    var unearnedEB = '-'
    document.getElementById("percentDO").className = 'red';
    document.getElementById("earnedDO").className = 'red';
    document.getElementById("unearnedDO").className = 'red';
    document.getElementById("percentEPL").className = 'red';
    document.getElementById("earnedEPL").className = 'red';
    document.getElementById("unearnedEPL").className = 'red';
    document.getElementById("percentEO").className = 'red';
    document.getElementById("earnedEO").className = 'red';
    document.getElementById("unearnedEO").className = 'red';
    document.getElementById("percentCyber").className = 'red';
    document.getElementById("earnedCyber").className = 'red';
    document.getElementById("unearnedCyber").className = 'red';
    document.getElementById("percentLEI").className = 'red';
    document.getElementById("earnedLEI").className = 'red';
    document.getElementById("unearnedLEI").className = 'red';
    document.getElementById("percentCGL").className = 'red';
    document.getElementById("earnedCGL").className = 'red';
    document.getElementById("unearnedCGL").className = 'red';
    document.getElementById("percentProperty").className = 'red';
    document.getElementById("earnedProperty").className = 'red';
    document.getElementById("unearnedProperty").className = 'red';
    document.getElementById("percentEB").className = 'red';
    document.getElementById("earnedEB").className = 'red';
    document.getElementById("unearnedEB").className = 'red';
  }

  // display policy terms
  document.getElementById("termDays").innerHTML = termDays;
  document.getElementById("forceDays").innerHTML = forceDays;
  document.getElementById("remainingDays").innerHTML = remainingDays;
  document.getElementById("earnedFactor").innerHTML = earnedFactor;
  document.getElementById("unearnedFactor").innerHTML = unearnedFactor;
  document.getElementById("earnedPremium").innerHTML = earnedPremium;
  document.getElementById("unearnedPremium").innerHTML = unearnedPremium;
  // display breakdown
  document.getElementById("checkMatch").innerHTML = checkMatch;
  document.getElementById("percentDO").innerHTML = percentDO;
  document.getElementById("earnedDO").innerHTML = earnedDO;
  document.getElementById("unearnedDO").innerHTML = unearnedDO;
  document.getElementById("percentEPL").innerHTML = percentEPL;
  document.getElementById("earnedEPL").innerHTML = earnedEPL;
  document.getElementById("unearnedEPL").innerHTML = unearnedEPL;
  document.getElementById("percentEO").innerHTML = percentEO;
  document.getElementById("earnedEO").innerHTML = earnedEO;
  document.getElementById("unearnedEO").innerHTML = unearnedEO;
  document.getElementById("percentCyber").innerHTML = percentCyber;
  document.getElementById("earnedCyber").innerHTML = earnedCyber;
  document.getElementById("unearnedCyber").innerHTML = unearnedCyber;
  document.getElementById("percentLEI").innerHTML = percentLEI;
  document.getElementById("earnedLEI").innerHTML = earnedLEI;
  document.getElementById("unearnedLEI").innerHTML = unearnedLEI;
  document.getElementById("percentCGL").innerHTML = percentCGL;
  document.getElementById("earnedCGL").innerHTML = earnedCGL;
  document.getElementById("unearnedCGL").innerHTML = unearnedCGL;
  document.getElementById("percentProperty").innerHTML = percentProperty;
  document.getElementById("earnedProperty").innerHTML = earnedProperty;
  document.getElementById("unearnedProperty").innerHTML = unearnedProperty;
  document.getElementById("percentEB").innerHTML = percentEB;
  document.getElementById("earnedEB").innerHTML = earnedEB;
  document.getElementById("unearnedEB").innerHTML = unearnedEB;
}
