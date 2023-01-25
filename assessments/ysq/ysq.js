const copyTable = () => {
    const table = document.querySelector('#resultsTable')
    const range = document.createRange();
    range.selectNode(table);
    window.getSelection().addRange(range);
    navigator.clipboard.writeText(range)
}

const ysq = (input) => {
    if (input.length < 8500) {
        document.getElementById("displayResult").innerHTML = "";
    }
    input = input.replaceAll("Completely untrue of me", "#");
    input = input.replaceAll("Mostly untrue of me", "#");
    input = input.replaceAll("Slightly more true than untrue", "#");
    input = input.replaceAll("Moderately true of me", "#");
    input = input.replaceAll("Mostly true of me", "#");
    input = input.replaceAll("Describes me perfectly", "#");
    let number = [];
    for (let k = 0; k < input.length; k++) {
        if (input[k] === "#") {
            number.push(Number(input[k - 2]));
        }
    }

    let edArr = [];
    let abArr = [];
    let miArr = [];
    let siArr = [];
    let dsArr = [];
    let faArr = [];
    let incArr = [];
    let vhArr = [];
    let enmArr = [];
    let sbjArr = [];
    let ssArr = [];
    let eiArr = [];
    let urArr = [];
    let entArr = [];
    let iscArr = [];
    let asArr = [];
    let pwArr = [];
    let spArr = [];

    for (let j = 0; j < number.length; j++) {
        if (j === 0 || j === 18 || j === 36 || j === 54 || j === 72) {
            edArr.push(number[j])
        } else if (j === 1 || j === 19 || j === 37 || j === 55 || j === 73) {
            abArr.push(number[j])
        } else if (j === 2 || j === 20 || j === 38 || j === 56 || j === 74) {
            miArr.push(number[j])
        } else if (j === 3 || j === 21 || j === 39 || j === 57 || j === 75) {
            siArr.push(number[j])
        } else if (j === 4 || j === 22 || j === 40 || j === 58 || j === 76) {
            dsArr.push(number[j])
        } else if (j === 5 || j === 23 || j === 41 || j === 59 || j === 77) {
            faArr.push(number[j])
        } else if (j === 6 || j === 24 || j === 42 || j === 60 || j === 78) {
            incArr.push(number[j])
        } else if (j === 7 || j === 25 || j === 43 || j === 61 || j === 79) {
            vhArr.push(number[j])
        } else if (j === 8 || j === 26 || j === 44 || j === 62 || j === 80) {
            enmArr.push(number[j])
        } else if (j === 9 || j === 27 || j === 45 || j === 63 || j === 81) {
            sbjArr.push(number[j])
        } else if (j === 10 || j === 28 || j === 46 || j === 64 || j === 82) {
            ssArr.push(number[j])
        } else if (j === 11 || j === 29 || j === 47 || j === 65 || j === 83) {
            eiArr.push(number[j])
        } else if (j === 12 || j === 30 || j === 48 || j === 66 || j === 84) {
            urArr.push(number[j])
        } else if (j === 13 || j === 31 || j === 49 || j === 67 || j === 85) {
            entArr.push(number[j])
        } else if (j === 14 || j === 32 || j === 50 || j === 68 || j === 86) {
            iscArr.push(number[j])
        } else if (j === 15 || j === 33 || j === 51 || j === 69 || j === 87) {
            asArr.push(number[j])
        } else if (j === 16 || j === 34 || j === 52 || j === 70 || j === 88) {
            pwArr.push(number[j])
        } else {
            spArr.push(number[j])
        }
    }

    let edScore = edArr.reduce((previousValue, currentValue) => previousValue + currentValue)
    let abScore = abArr.reduce((previousValue, currentValue) => previousValue + currentValue)
    let miScore = miArr.reduce((previousValue, currentValue) => previousValue + currentValue)
    let siScore = siArr.reduce((previousValue, currentValue) => previousValue + currentValue)
    let dsScore = dsArr.reduce((previousValue, currentValue) => previousValue + currentValue)
    let faScore = faArr.reduce((previousValue, currentValue) => previousValue + currentValue)
    let incScore = incArr.reduce((previousValue, currentValue) => previousValue + currentValue)
    let vhScore = vhArr.reduce((previousValue, currentValue) => previousValue + currentValue)
    let enmScore = enmArr.reduce((previousValue, currentValue) => previousValue + currentValue)
    let sbjScore = sbjArr.reduce((previousValue, currentValue) => previousValue + currentValue)
    let ssScore = ssArr.reduce((previousValue, currentValue) => previousValue + currentValue)
    let eiScore = eiArr.reduce((previousValue, currentValue) => previousValue + currentValue)
    let urScore = urArr.reduce((previousValue, currentValue) => previousValue + currentValue)
    let entScore = entArr.reduce((previousValue, currentValue) => previousValue + currentValue)
    let iscScore = iscArr.reduce((previousValue, currentValue) => previousValue + currentValue)
    let asScore = asArr.reduce((previousValue, currentValue) => previousValue + currentValue)
    let pwScore = pwArr.reduce((previousValue, currentValue) => previousValue + currentValue)
    let spScore = spArr.reduce((previousValue, currentValue) => previousValue + currentValue)

    document.getElementById("edTd").innerHTML = `${edScore} / 30 (${Math.round((edScore/30*100))}%)`;
    document.getElementById("abTd").innerHTML = `${abScore} / 30 (${Math.round((abScore/30*100))}%)`;
    document.getElementById("miTd").innerHTML = `${miScore} / 30 (${Math.round((miScore/30*100))}%)`;
    document.getElementById("siTd").innerHTML = `${siScore} / 30 (${Math.round((siScore/30*100))}%)`;
    document.getElementById("dsTd").innerHTML = `${dsScore} / 30 (${Math.round((dsScore/30*100))}%)`;
    document.getElementById("faTd").innerHTML = `${faScore} / 30 (${Math.round((faScore/30*100))}%)`;
    document.getElementById("incTd").innerHTML = `${incScore} / 30 (${Math.round((incScore/30*100))}%)`;
    document.getElementById("vhTd").innerHTML = `${vhScore} / 30 (${Math.round((vhScore/30*100))}%)`;
    document.getElementById("enmTd").innerHTML = `${enmScore} / 30 (${Math.round((enmScore/30*100))}%)`;
    document.getElementById("sbjTd").innerHTML = `${sbjScore} / 30 (${Math.round((sbjScore/30*100))}%)`;
    document.getElementById("ssTd").innerHTML = `${ssScore} / 30 (${Math.round((ssScore/30*100))}%)`;
    document.getElementById("eiTd").innerHTML = `${eiScore} / 30 (${Math.round((eiScore/30*100))}%)`;
    document.getElementById("urTd").innerHTML = `${urScore} / 30 (${Math.round((urScore/30*100))}%)`;
    document.getElementById("entTd").innerHTML = `${entScore} / 30 (${Math.round((entScore/30*100))}%)`;
    document.getElementById("iscTd").innerHTML = `${iscScore} / 30 (${Math.round((iscScore/30*100))}%)`;
    document.getElementById("asTd").innerHTML = `${asScore} / 30 (${Math.round((asScore/30*100))}%)`;
    document.getElementById("pwTd").innerHTML = `${pwScore} / 30 (${Math.round((pwScore/30*100))}%)`;
    document.getElementById("spTd").innerHTML = `${spScore} / 30 (${Math.round((spScore/30*100))}%)`;

    const schemaLabels = [
        "Emotional Deprivation",
        "Abandonment",
        "Mistrust/Abuse",
        "Social Isolation",
        "Defectiveness/Shame",
        "Failure",
        "Incompetence/Dependence",
        "Vulnerability To Harm",
        "Enmeshment",
        "Subjugation",
        "Self-Sacrifice",
        "Emotional Inhibition",
        "Unrelenting Standards",
        "Entitlement",
        "Insufficient Self-Control",
        "Admiration Seeking",
        "Pessimism",
        "Self-Punitiveness"
    ];

    const schemaScores = [
        edScore,
        abScore,
        miScore,
        siScore,
        dsScore,
        faScore,
        incScore,
        vhScore,
        enmScore,
        sbjScore,
        ssScore,
        eiScore,
        urScore,
        entScore,
        iscScore,
        asScore,
        pwScore,
        spScore
    ]

    const labelColors = [
        "hsla(0,0%,12%,0.6)",
        "hsla(0,0%,12%,0.6)",
        "hsla(0,0%,12%,0.6)",
        "hsla(0,0%,12%,0.6)",
        "hsla(0,0%,12%,0.6)",
        "hsla(0,0%,12%,0.6)",
        "hsla(0,0%,12%,0.6)",
        "hsla(0,0%,12%,0.6)",
        "hsla(0,0%,12%,0.6)",
        "hsla(0,0%,12%,0.6)",
        "hsla(0,0%,12%,0.6)",
        "hsla(0,0%,12%,0.6)",
        "hsla(0,0%,12%,0.6)",
        "hsla(0,0%,12%,0.6)",
        "hsla(0,0%,12%,0.6)",
        "hsla(0,0%,12%,0.6)",
        "hsla(0,0%,12%,0.6)",
        "hsla(0,0%,12%,0.6)"
    ];

    const labelBorderColors = [
        "hsla(0,0%,12%,0.6)",
        "hsla(0,0%,12%,0.6)",
        "hsla(0,0%,12%,0.6)",
        "hsla(0,0%,12%,0.6)",
        "hsla(0,0%,12%,0.6)",
        "hsla(0,0%,12%,0.6)",
        "hsla(0,0%,12%,0.6)",
        "hsla(0,0%,12%,0.6)",
        "hsla(0,0%,12%,0.6)",
        "hsla(0,0%,12%,0.6)",
        "hsla(0,0%,12%,0.6)",
        "hsla(0,0%,12%,0.6)",
        "hsla(0,0%,12%,0.6)",
        "hsla(0,0%,12%,0.6)",
        "hsla(0,0%,12%,0.6)",
        "hsla(0,0%,12%,0.6)",
        "hsla(0,0%,12%,0.6)",
        "hsla(0,0%,12%,0.6)"
    ];

    const barData = {
        labels: schemaLabels,
        datasets: [{
            label: 'YSQ-3 Total Scores On Each EMS',
            backgroundColor: labelColors,
            borderColor: labelBorderColors,
            data: schemaScores,
        }]
    };

    const barConfig = {
        type: 'bar',
        data: barData,
        options: {
            scales: {
                y: {
                    min: 0,
                    max: 30
                }
            }
        }
    }

    const radarData = {
        labels: schemaLabels,
        datasets: [{
            label: 'YSQ-3 Total Scores On Each EMS',
            backgroundColor: labelColors,
            borderColor: labelBorderColors,
            borderWidth: 1,
            data: schemaScores,
            pointRadius: 5
        }]
    };

    const radarConfig = {
        type: 'radar',
        data: radarData,
        options: {
            scales: {
                r: {
                    beginAtZero: true,
                    max: 30
                }
            }
        }
    };

    const barChart = new Chart(
        document.getElementById('barChart'),
        barConfig
    );

    const radarChart = new Chart(
        document.getElementById('radarChart'),
        radarConfig
    );
}