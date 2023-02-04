// Values of each rune for each phoneme
components = {
    "a": 1920,
    "ar": 6528,
    "o": 1792,
    "ei": 256,
    "e": 7680,
    "ee": 7936,
    "eer": 5888,
    "er": 5632,
    "u": 384,
    "ir": 7808,
    "i": 6144,
    "ai": 128,
    "oh": 8064,
    "oi": 2048,
    "oo": 3968,
    "ou": 3584,
    "ow": 4096,
    "or": 6016,
    "B": 74,
    "CH": 41,
    "D": 90,
    "DH": 122,
    "F": 60,
    "G": 108,
    "H": 106,
    "J": 26,
    "K": 78,
    "L": 42,
    "M": 80,
    "N": 81,
    "NG": 127,
    "P": 44,
    "R": 46,
    "S": 62,
    "SH": 125,
    "T": 45,
    "TH": 47,
    "V": 75,
    "W": 5,
    "Y": 43,
    "Z": 107,
    "ZH": 95,
    '': 0
}

// Returns SVG for special characters
function getSpecialSVG(char, i)
{
    switch(char)
    {
        case "!": return '<svg id="rune'+i+'" viewBox="0 0 200 400" height="100" width="50"><style></style><path d="M 94.83697,215.71153 92.82227,74.681874 V 50.841147 h 15.4461 l -0.33578,23.840727 -2.01471,141.029656 z m 5.70835,64.13492 q -5.37257,0 -9.90566,-4.02943 -4.53309,-4.02942 -4.53309,-11.08089 0,-7.38727 4.53309,-11.41668 4.53309,-4.02943 9.90566,-4.02943 5.70834,0 9.90566,4.02943 4.1973,4.02941 4.1973,11.41668 0,7.05147 -4.1973,11.08089 -4.19732,4.02943 -9.90566,4.02943 z" /></svg>';
        case "?": return '<svg id="rune'+i+'" viewBox="0 0 200 400" height="100" width="50"><style></style><path d="m 92.561222,215.71153 q -2.337415,-16.69582 1.83654,-29.5516 4.173956,-12.85578 11.687078,-23.37415 7.51311,-10.51836 15.36014,-20.36891 7.84704,-9.85053 13.35666,-20.03498 5.50962,-10.18445 5.50962,-22.53936 0,-15.694069 -9.01573,-27.381144 -9.01575,-11.687075 -28.71682,-11.687075 -25.711558,0 -43.075213,21.370652 l -9.015744,-8.347912 q 9.683576,-11.019242 22.873276,-18.532361 13.189697,-7.51312 30.553351,-7.51312 24.37589,0 38.06646,14.692323 13.69058,14.692323 13.69058,36.396887 0,13.69058 -5.67658,24.87678 -5.67657,11.18619 -13.69056,21.20369 -8.01401,10.0175 -15.69407,20.53586 -7.68008,10.51836 -12.18796,22.70632 -4.50787,12.18795 -2.50437,27.5481 z m 7.680078,63.77804 q -5.342662,0 -9.683577,-4.00699 -4.340913,-4.007 -4.340913,-11.01925 0,-7.34615 4.340913,-11.35316 4.340915,-4.00699 9.683577,-4.00699 5.67658,0 10.01749,4.00699 4.34091,4.00701 4.34091,11.35316 0,7.01225 -4.34091,11.01925 -4.34091,4.00699 -10.01749,4.00699 z" /></svg>';
        case ":": return '<svg id="rune'+i+'" viewBox="0 0 200 400" height="100" width="50"><style></style><path d="m 100,118.82696 q -5.51528,0 -10.1688,-4.13647 -4.65353,-4.13646 -4.65353,-11.37527 0,-7.583523 4.65353,-11.719993 4.65352,-4.13646 10.1688,-4.13646 5.85999,0 10.16882,4.13646 4.30881,4.13647 4.30881,11.719993 0,7.23881 -4.30881,11.37527 -4.30883,4.13647 -10.16882,4.13647 z" /><path d="m 100,242.75272 q -5.51528,0 -10.1688,-4.13647 -4.65353,-4.13646 -4.65353,-11.37527 0,-7.58352 4.65353,-11.71999 4.65352,-4.13646 10.1688,-4.13646 5.85999,0 10.16882,4.13646 4.30881,4.13647 4.30881,11.71999 0,7.23881 -4.30881,11.37527 -4.30883,4.13647 -10.16882,4.13647 z" /></svg>';
        case ".": return '<svg id="rune'+i+'" viewBox="0 0 200 400" height="100" width="50"><style></style><path d="m 100,242.75272 q -5.51528,0 -10.1688,-4.13647 -4.65353,-4.13646 -4.65353,-11.37527 0,-7.58352 4.65353,-11.71999 4.65352,-4.13646 10.1688,-4.13646 5.85999,0 10.16882,4.13646 4.30881,4.13647 4.30881,11.71999 0,7.23881 -4.30881,11.37527 -4.30883,4.13647 -10.16882,4.13647 z" /></svg>';
        case ";": return '<svg id="rune'+i+'" viewBox="0 0 200 400" height="100" width="50"><style></style><path d="m 100,118.82696 q -5.51528,0 -10.1688,-4.13647 -4.65353,-4.13646 -4.65353,-11.37527 0,-7.583523 4.65353,-11.719993 4.65352,-4.13646 10.1688,-4.13646 5.85999,0 10.16882,4.13646 4.30881,4.13647 4.30881,11.719993 0,7.23881 -4.30881,11.37527 -4.30883,4.13647 -10.16882,4.13647 z" /><path d="m 83.384511,288.74781 -4.549724,-9.74938 q 11.374293,-5.84964 18.19887,-16.0865 6.824563,-10.23686 6.824563,-23.23604 -0.97494,0.32497 -1.94987,0.32497 h -1.949876 q -5.524663,0 -9.586902,-3.57477 -4.06224,-3.57477 -4.06224,-10.07437 0,-6.4996 4.387215,-10.07438 4.387232,-3.57477 9.586903,-3.57477 7.47453,0 12.02425,6.17462 4.54972,6.17461 4.54972,16.89893 0,17.8739 -9.42442,31.52304 -9.4244,13.64915 -24.048489,21.44865 z" /></svg>';
        case ",": return '<svg id="rune'+i+'" viewBox="0 0 200 400" height="100" width="50"><style></style><path d="m 83.384511,288.74781 -4.549724,-9.74938 q 11.374293,-5.84964 18.19887,-16.0865 6.824563,-10.23686 6.824563,-23.23604 -0.97494,0.32497 -1.94987,0.32497 h -1.949876 q -5.524663,0 -9.586902,-3.57477 -4.06224,-3.57477 -4.06224,-10.07437 0,-6.4996 4.387215,-10.07438 4.387232,-3.57477 9.586903,-3.57477 7.47453,0 12.02425,6.17462 4.54972,6.17461 4.54972,16.89893 0,17.8739 -9.42442,31.52304 -9.4244,13.64915 -24.048489,21.44865 z" /></svg>';
        case "(": return '<svg id="rune'+i+'" viewBox="0 0 200 400" height="100" width="50"><style></style><path d="M 113.78781,280.60763 Q 97.893493,254.55136 88.643514,225.75918 79.393536,196.967 79.393536,162.57273 q 0,-34.39428 9.249978,-63.186455 9.249979,-28.792185 25.144296,-54.848452 l 7.03519,4.169001 q -15.37319,24.492891 -23.320358,53.675916 -7.947161,29.18303 -7.947161,60.18999 0,30.74639 7.947161,59.92942 7.947168,29.18302 23.320358,53.93647 z" /></svg>';
        case ")": return '<svg id="rune'+i+'" viewBox="0 0 200 400" height="100" width="50"><style></style><path d="m 86.2413,281.48957 -7.05908,-4.18315 q 15.42541,-24.83753 23.39955,-54.11965 7.97415,-29.28212 7.97415,-60.13293 0,-31.11225 -7.97415,-60.39438 Q 94.60763,73.37734 79.18222,48.801271 l 7.05908,-4.183159 q 16.20976,26.144757 25.36041,55.034701 9.15068,28.889957 9.15068,63.401027 0,34.51107 -9.15068,63.40104 -9.15065,28.88993 -25.36041,55.03469 z" /></svg>';
        case " ": return '<svg id="rune'+i+'" viewBox="0 0 200 400" height="100" width="40"></svg>';
    }
}

// Is a character uppercase or not?
function isUppercase(char)
{
    return (char == char.toUpperCase());
}

// Returns "character type".
// 0 = normal character
// 1 = separating dash
// 2 = special character
function getCharacterType(char)
{
    if(char.match(/[a-z]/i))
    {
        return 0;
    }
    else if(char == '-')
    {
        return 1;
    }
    else
    {
        return 2;
    }
}

// Reads input and converts it to value table to generate runes later
function convertInputToTable(input)
{
    var currentRune = ['', '', null]; // Consonant, Vowel, IsNormalOrder
    var first = true; // Is the component the first one in a rune?
    var table = [];

    for(const char of input)
    {
        var type = getCharacterType(char);
        if(type == 0)
        {
            if(isUppercase(char))
            {
                currentRune[0] += char;
                if(first)
                {
                    currentRune[2] = true;
                }
            }
            else
            {
                currentRune[1] += char;
                if(first)
                {
                    currentRune[2] = false;
                }
            }
            first = false;
        }
        else if(type == 1)
        {
            table.push(calculate(currentRune));
            currentRune = ['', '', null];
            first = true;
        }
        else
        {
            if(!areArraysEqual(currentRune, ['', '', null])) // Not appending an empty rune if several non-0-type characters are followed
            {
                table.push(calculate(currentRune));
            }
            currentRune = ['', '', null];
            table.push(char);
            first = true;
        }
    }

    if(!areArraysEqual(currentRune, ['', '', null])) // Pushing last rune
    {
        table.push(calculate(currentRune));
    }
    return table;
}

// Returns the numeric value for a rune
function calculate(rune)
{
    var value = components[rune[0]]+components[rune[1]];
    if(!rune[2] && rune[0] != '')
    {
        // dotted rune
        value += 8192;
    }
    return value;
}

// Are two arrays equal? (Why JS does not have a builtin for this??)
// https://stackoverflow.com/a/16436975/5418422
function areArraysEqual(a, b)
{
    if (a === b) return true;
    if (a == null || b == null) return false;
    if (a.length !== b.length) return false;

    for (var i = 0; i < a.length; ++i)
    {
        if (a[i] !== b[i]) return false;
    }
    return true;
}

// This is where the magic happens.
// Each branch is a binary digit, that makes 16384 possible runes.
// Depending on the number, the SVG for the rune is generated here...
function getRuneSVG(value, i)
{
    svg = '<svg id="rune'+i+'" viewBox="0 0 200 400" height="100" width="50" xmlns="http://www.w3.org/2000/svg"><style></style><line x1="0" y1="166" x2="200" y2="166" stroke="black" stroke-linecap="butt" />';
    if(bit(value, 1)) // 1
    {
        svg += '<line x1="10" y1="70" x2="100" y2="130" />';
    }
    if(bit(value, 2)) // 2
    {
        svg += '<line x1="100" y1="10" x2="100" y2="130" />';
    }
    if(bit(value, 3)) // 4
    {
        svg += '<line x1="190" y1="70" x2="100" y2="130" />';
    }
    if(bit(value, 4)) // 8
    {
        svg += '<line x1="100" y1="130" x2="100" y2="166" />';
    }
    if(bit(value, 5)) // 16
    {
        svg += '<line x1="100" y1="233" x2="10" y2="293" />';
    }
    if(bit(value, 6)) // 32
    {
        svg += '<line x1="100" y1="233" x2="100" y2="353" />';
    }
    if(bit(value, 7)) // 64
    {
        svg += '<line x1="100" y1="233" x2="190" y2="293" />';
    }
    if(bit(value, 8)) // 128
    {
        svg += '<line x1="100" y1="10" x2="190" y2="70" />';
    }
    if(bit(value, 9)) // 256
    {
        svg += '<line x1="100" y1="10" x2="10" y2="70" />';
    }
    if(bit(value, 10)) // 512
    {
        svg += '<line x1="10" y1="70" x2="10" y2="166" />';
    }
    if(bit(value, 11)) // 1024
    {
        svg += '<line x1="10" y1="233" x2="10" y2="293" />';
    }
    if(bit(value, 12)) // 2048
    {
        svg += '<line x1="10" y1="293" x2="100" y2="353" />';
    }
    if(bit(value, 13)) // 4096
    {
        svg += '<line x1="190" y1="293" x2="100" y2="353" />';
    }
    if(bit(value, 14)) // 8192
    {
        svg += '<circle cx="100" cy="371" r="18" fill="none" />';
    }
    svg += "</svg>";
    return svg;
}

// Returns the kth binary digit in the n number
function bit(n, k)
{
    return (n & (1 << (k - 1))) != 0;
}

// Main generation function
function draw()
{
    var input = document.getElementById("input").value;
    var table = convertInputToTable(input);

    // Check if there is a NaN in the table;
    // if yes, it means there was an error in the input.
    for(i=0; i < table.length; i++)
    {
        if(table[i] === false || Number.isNaN(table[i]))
        {
            document.getElementById("section-trunic").innerHTML = "You made a mistake in your input; please check you entered the components correctly.<br>Remember that all consonants are supposed to be uppercase (and vowels lowercase) and that dashes delimit runes.";
            return null;
        }
    }
    console.log(table);

    // displaying
    document.getElementById("section-trunic").innerHTML = '';
    i = 0
    for(element of table)
    {
        i += 1;
        if(Number.isInteger(element))
        {
            var svg = getRuneSVG(element, i);
            document.getElementById("section-trunic").innerHTML += svg;
        }
        else
        {
            document.getElementById("section-trunic").innerHTML += getSpecialSVG(element, i);
        }
    }
}

// Generates a PNG and makes the browser download it
function downloadPNG()
{
    var section_trunic = document.getElementById('section-trunic');
    section_trunic.style.border = "none";

    html2canvas(section_trunic, {backgroundColor: null}).then(function(canvas) {
        section_trunic.style.border = "2px dashed black";
        saveAs(canvas.toDataURL(), 'trunic.png');
    });
}

// Generates a SVG and makes the browser download it
function downloadSVG()
{
    var svg = '<svg xmlns="http://www.w3.org/2000/svg"><style>line, circle{stroke-linecap: round;stroke-width: 20;}path{stroke-linecap: round;stroke-width: 10;}line, circle, path{stroke: black;fill: black;}</style>';
    var base_x = document.getElementById("section-trunic").getBoundingClientRect().x;
    var base_y = document.getElementById("section-trunic").getBoundingClientRect().y;

    var runes = document.getElementById("section-trunic");
    for(const rune of runes.getElementsByTagName("svg"))
    {
        var x = rune.getBoundingClientRect().x;
        var y = rune.getBoundingClientRect().y;
        rune.setAttribute("x", x-base_x);
        rune.setAttribute("y", y-base_y);
    }
    svg += document.getElementById("section-trunic").innerHTML+"</svg>";

    var content = new Blob([svg], { type: 'text/plain' });
    saveAs(content, 'trunic.svg');
}
