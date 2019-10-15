var substationsynoptic = new scadavis({
    iframeparams: 'frameborder="0" height="390" width="680"',
    svgurl: "https://raw.githubusercontent.com/riclolsen/displayfiles/master/kor1.svg"
});
substationsynoptic.zoomTo(0.42);
substationsynoptic.enableTools(true);
substationsynoptic.storeValue("KOR1TR1--YTAP", Math.round(8 + Math.random()), false, false);
substationsynoptic.storeValue("KOR1XSWI1", false);
substationsynoptic.storeValue("KOR1XSWI2", true);
substationsynoptic.storeValue("KOR1XSWI4", true);
substationsynoptic.storeValue("KOR1XSWI6", true);
substationsynoptic.storeValue("KOR1XSWI8", true);
substationsynoptic.storeValue("KOR1XSWI10", false);
substationsynoptic.storeValue("KOR1XSWI12", true);
substationsynoptic.storeValue("KOR1XSWI14", true);
substationsynoptic.storeValue("KOR1XSWI16", false);
substationsynoptic.storeValue("KOR1XSWI18", true);
substationsynoptic.storeValue("KOR1XSWI20", true);
substationsynoptic.storeValue("KOR1XSWI22", false);
substationsynoptic.storeValue("KOR1XSWI48", true);
substationsynoptic.storeValue("KOR1XSWI50", true);
substationsynoptic.storeValue("KOR1XSWI46", false);
substationsynoptic.storeValue("KOR1XSWI24", true);
substationsynoptic.storeValue("KOR1XSWI26", true);
substationsynoptic.storeValue("KOR1XSWI28", false);
substationsynoptic.storeValue("KOR1XSWI30", true);
substationsynoptic.storeValue("KOR1XSWI32", true);
substationsynoptic.storeValue("KOR1XSWI34", true);
substationsynoptic.storeValue("KOR1XSWI36", true);
substationsynoptic.storeValue("KOR1XSWI38", false);
substationsynoptic.storeValue("KOR1XSWI40", true);
substationsynoptic.storeValue("KOR1XSWI42", true);
substationsynoptic.storeValue("KOR1XSWI44", false);
substationsynoptic.storeValue("KOR1XCBR2", true);
substationsynoptic.storeValue("KOR1XCBR3", true);
substationsynoptic.storeValue("KOR1XCBR4", true);
substationsynoptic.storeValue("KOR1XCBR8", true);
substationsynoptic.storeValue("KOR1XCBR5", true);
substationsynoptic.storeValue("KOR1XCBR2401", false);
substationsynoptic.storeValue("KOR1XCBR6", true);
substationsynoptic.storeValue("KOR1AL11TC", true, false, false);
substationsynoptic.storeValue("KOR1AL11RREC", true, false, false);
substationsynoptic.storeValue("KOR1AL11PSTI", true, false, false);
substationsynoptic.storeValue("KOR1AL12TC", true, false, false);
substationsynoptic.storeValue("KOR1AL12RREC", true, false, false);
substationsynoptic.storeValue("KOR1AL12PSTI", true, false, false);
substationsynoptic.storeValue("KOR1AL13TC", true, false, false);
substationsynoptic.storeValue("KOR1AL13RREC", true, false, false);
substationsynoptic.storeValue("KOR1AL13PSTI", true, false, false);
substationsynoptic.storeValue("KOR1AL14RREC", true, false, false);
substationsynoptic.storeValue("KOR1AL14PSTI", true, false, false);
substationsynoptic.storeValue("KOR1AL15TC", true, false, false);
substationsynoptic.storeValue("KOR1AL15PSTI", true, false, false);
substationsynoptic.storeValue("KOR1AL16TC", true, false, false);
substationsynoptic.storeValue("KOR1AL16PSTI", true, false, false);
substationsynoptic.storeValue("KOR1AL17TC", true, false, false);
substationsynoptic.storeValue("KOR1AL17RREC", true, false, false);
substationsynoptic.storeValue("KOR1ALTFTC", true, false, false);
substationsynoptic.storeValue("KOR1ALTFRREC", true, false, false);
substationsynoptic.storeValue("KOR1ALTFPSTI", true, false, false);
substationsynoptic.storeValue("KOR1AL11MW", 0 , false, false);
substationsynoptic.storeValue("KOR1AL12MW", 0 , false, false);
substationsynoptic.storeValue("KOR1AL13MW", 0 , false, false);
substationsynoptic.storeValue("KOR1AL14MW", 0 , false, false);
substationsynoptic.storeValue("KOR1AL15MW", 0 , false, false);
substationsynoptic.storeValue("KOR1AL16MW", 0 , false, false);
substationsynoptic.storeValue("KOR1AL17MW", 0 , false, false);

function updateSubstation() {

    var xcbr1 = (Math.random() > 0.2) ? true : false;
    substationsynoptic.storeValue("KOR1TR1-2XCBR5201", xcbr1, false, !xcbr1);
    var kv230 = 220 + Math.random() * 20;
    var kv23 = (kv230 / 10.3) * xcbr1 * Math.sqrt(substationsynoptic.getValue("KOR1TR1--YTAP") / 7);
    substationsynoptic.storeValue("KOR1KV230", kv230, false, kv230 > 239 || kv230 < 221);
    substationsynoptic.storeValue("KOR1KV23", kv23, false, (kv23) > 23.9 || kv23 < 22.1);

    var xcbr7 = (Math.random() > 0.15) ? true : false;
    substationsynoptic.storeValue("KOR1XCBR7", xcbr7, false, !xcbr7);
    substationsynoptic.storeValue("KOR1AL14TC", (Math.random() > 0.15) ? true : false, false, false);
    substationsynoptic.storeValue("KOR1AL15RREC", (Math.random() > 0.15) ? true : false, false, false);
    substationsynoptic.storeValue("KOR1AL16RREC", true, (Math.random() > 0.15) ? true : false, false);
    substationsynoptic.storeValue("KOR1AL17PSTI", true, false, (Math.random() > 0.15) ? true : false);

    var MW = 0, tMW = 0;
    var MVAR = 0, tMVAR = 0;
    tMW += MW = (5 + Math.random() * 2) * xcbr1 * xcbr7;
    tMVAR += MVAR = (.5 - Math.random() * 1) * xcbr1 * xcbr7;
    substationsynoptic.storeValue("KOR1AL11MW", MW, false, false);
    substationsynoptic.storeValue("KOR1AL11MVAR", MVAR, false, false);
    tMW += MW = (3 + Math.random() * 2) * xcbr1;
    tMVAR += MVAR = (.5 - Math.random() * 1) * xcbr1;
    substationsynoptic.storeValue("KOR1AL12MW", MW, false, false);
    substationsynoptic.storeValue("KOR1AL12MVAR", MVAR, false, false);
    tMW += MW = (6 + Math.random() * 2) * xcbr1;
    tMVAR += MVAR = (.5 - Math.random() * 1) * xcbr1;
    substationsynoptic.storeValue("KOR1AL13MW", MW, false, false);
    substationsynoptic.storeValue("KOR1AL13MVAR", MVAR, false, false);
    tMW += MW = (4 + Math.random() * 2) * xcbr1;
    tMVAR += MVAR = (.5 - Math.random() * 1) * xcbr1;
    substationsynoptic.storeValue("KOR1AL14MW", MW, false, false);
    substationsynoptic.storeValue("KOR1AL14MVAR", MVAR, false, false);
    tMW += MW = (5 + Math.random() * 2) * xcbr1;
    tMVAR += MVAR = (.5 - Math.random() * 1) * xcbr1;
    substationsynoptic.storeValue("KOR1AL15MW", MW, false, false);
    substationsynoptic.storeValue("KOR1AL15MVAR", MVAR, false, false);
    tMW += MW = (3 + Math.random() * 2) * xcbr1;
    tMVAR += MVAR = (.5 - Math.random() * 1) * xcbr1;
    substationsynoptic.storeValue("KOR1AL16MW", MW, false, false);
    substationsynoptic.storeValue("KOR1AL16MVAR", MVAR, false, false);
    tMW += MW = (5 + Math.random() * 2) * xcbr1;
    tMVAR += MVAR = (.5 - Math.random() * 1) * xcbr1;
    substationsynoptic.storeValue("KOR1AL17MW", MW, false, false);
    substationsynoptic.storeValue("KOR1AL17MVAR", MVAR, false, false);
    tMW += MW = (4 + Math.random() * 2) * xcbr1;
    tMVAR += MVAR = (.5 - Math.random() * 1) * xcbr1;
    substationsynoptic.storeValue("KOR1ALTFMW", 0, false, false);
    substationsynoptic.storeValue("KOR1ALTFMVAR", 0, false, false);

    substationsynoptic.storeValue("KOR1TR1MW", tMW, false, false);
    substationsynoptic.storeValue("KOR1TR1MVAR", tMVAR, false, false);

    substationsynoptic.updateValues();
}
updateSubstation();
setInterval(updateSubstation, 7000);

substationsynoptic.on("click", function (event, tag) {
    var v = substationsynoptic.getValue(tag);

    if (event.currentTarget.id === "TAPUP")
        substationsynoptic.setValue(tag, v + 1, false, false);
    else
        if (event.currentTarget.id === "TAPDOWN")
            substationsynoptic.setValue(tag, v - 1, false, false);

    if (event.currentTarget.id === "XCBROPEN")
        substationsynoptic.setValue(tag, false, false, false);
    else
        if (event.currentTarget.id === "XCBRCLOSE")
            substationsynoptic.setValue(tag, true, false, false);

    if (v === true)
        substationsynoptic.setValue(tag, false, false, false);
    else
        if (v === false)
            substationsynoptic.setValue(tag, true, false, false);
});
