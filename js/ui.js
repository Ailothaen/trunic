// Initialisation of runes in buttons
document.getElementById("rune-a").innerHTML = getRuneSVG(1920);
document.getElementById("rune-ar").innerHTML = getRuneSVG(6528);
document.getElementById("rune-o").innerHTML = getRuneSVG(1792);
document.getElementById("rune-ei").innerHTML = getRuneSVG(256);
document.getElementById("rune-e").innerHTML = getRuneSVG(7680);
document.getElementById("rune-ee").innerHTML = getRuneSVG(7936);
document.getElementById("rune-eer").innerHTML = getRuneSVG(5888);
document.getElementById("rune-oh").innerHTML = getRuneSVG(8064);
document.getElementById("rune-u").innerHTML = getRuneSVG(384);
document.getElementById("rune-i").innerHTML = getRuneSVG(6144);
document.getElementById("rune-ai").innerHTML = getRuneSVG(128);
document.getElementById("rune-oi").innerHTML = getRuneSVG(2048);
document.getElementById("rune-ir").innerHTML = getRuneSVG(7808);
document.getElementById("rune-oo").innerHTML = getRuneSVG(3968);
document.getElementById("rune-ou").innerHTML = getRuneSVG(3584);
document.getElementById("rune-ow").innerHTML = getRuneSVG(4096);
document.getElementById("rune-er").innerHTML = getRuneSVG(5632);
document.getElementById("rune-or").innerHTML = getRuneSVG(6016);

document.getElementById("rune-B").innerHTML = getRuneSVG(74);
document.getElementById("rune-CH").innerHTML = getRuneSVG(41);
document.getElementById("rune-D").innerHTML = getRuneSVG(90);
document.getElementById("rune-DH").innerHTML = getRuneSVG(122);
document.getElementById("rune-F").innerHTML = getRuneSVG(60);
document.getElementById("rune-G").innerHTML = getRuneSVG(108);
document.getElementById("rune-H").innerHTML = getRuneSVG(106);
document.getElementById("rune-J").innerHTML = getRuneSVG(26);
document.getElementById("rune-K").innerHTML = getRuneSVG(78);
document.getElementById("rune-L").innerHTML = getRuneSVG(42);
document.getElementById("rune-M").innerHTML = getRuneSVG(80);
document.getElementById("rune-N").innerHTML = getRuneSVG(81);
document.getElementById("rune-NG").innerHTML = getRuneSVG(127);
document.getElementById("rune-P").innerHTML = getRuneSVG(44);
document.getElementById("rune-R").innerHTML = getRuneSVG(46);
document.getElementById("rune-S").innerHTML = getRuneSVG(62);
document.getElementById("rune-SH").innerHTML = getRuneSVG(125);
document.getElementById("rune-T").innerHTML = getRuneSVG(45);
document.getElementById("rune-TH").innerHTML = getRuneSVG(47);
document.getElementById("rune-V").innerHTML = getRuneSVG(75);
document.getElementById("rune-W").innerHTML = getRuneSVG(5);
document.getElementById("rune-Y").innerHTML = getRuneSVG(43);
document.getElementById("rune-Z").innerHTML = getRuneSVG(107);
document.getElementById("rune-ZH").innerHTML = getRuneSVG(95);


stored = [null, null];

// Button input management
function btInput(value)
{
    add_highlight(value);

    if(stored[0] == null)
    {
        stored[0] = value;
    }
    else
    {
        stored[1] = value;
        if(stored[0] == stored[1]) // Same rune was clicked twice
        {
            document.getElementById("input").value += addDashIfNecessary()+stored[0];
            remove_highlights(stored);
            stored = [null, null];
        }
        else
        {
            if((isUppercase(stored[0][0]) && !isUppercase(stored[1][0])) || !isUppercase(stored[0][0]) && isUppercase(stored[1][0])) // Two different phonemes, one is vowel and other is consonant
            {
                document.getElementById("input").value += addDashIfNecessary()+stored[0]+stored[1];
                remove_highlights(stored);
                stored = [null, null];
            }
            else // Two different phonemes but they are both vowel/consonant. This is wrong! Well we can still add the first one...
            {
                document.getElementById("input").value += addDashIfNecessary()+stored[0];
                remove_highlight(stored[0]);
                stored[0] = stored[1];
                stored[1] = null;
            }
        }
    }
}

// Add a dash between button inputs if necessary (see btInput())
function addDashIfNecessary()
{
    var lastCharacter = document.getElementById("input").value.slice(-1);
    if(lastCharacter == "")
    {
        return "";
    }
    else
    {
        if(getCharacterType(lastCharacter) == 0)
        {
            return "-";
        }
        else
        {
            return "";
        }
    }
}

// Special button input management (much easier!)
function btSpecialInput(value)
{
    document.getElementById("input").value += value;
}

// Add highlight on button
function add_highlight(character)
{
    document.getElementById("bt-trunic-"+character).classList.add("hl");
}

// Remove highlight on button
function remove_highlight(character)
{
    document.getElementById("bt-trunic-"+character).classList.remove("hl");
}

// Remove all highlights on buttons
function remove_highlights(stored)
{
    document.getElementById("bt-trunic-"+stored[0]).classList.remove("hl");
    document.getElementById("bt-trunic-"+stored[1]).classList.remove("hl");
}

// Change foreground color
function change_foreground(color)
{
    document.documentElement.style.setProperty('--svg-fg', color);
}

// Change background color
function change_background(color)
{
    document.getElementById("section-trunic").style.backgroundColor = color;
}

// Toggle transparent background
function toggle_background(checked)
{
    if(checked == true)
    {
        document.getElementById("section-trunic").style.backgroundColor = "transparent";
    }
    else
    {
        document.getElementById("section-trunic").style.backgroundColor = document.getElementById("bt-color-bg").value;
    }
}
