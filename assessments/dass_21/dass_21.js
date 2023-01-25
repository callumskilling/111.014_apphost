const dass = (input) => {
    //Input Error Checking, control flow starts with some helpful messages to user as what could be wrong with their input rather than unhelpful generic message
    const length = input.length;
    const lastChar = input.charAt(input.length - 1)
    const firstChar = input.charAt(0)
    const inputValid = input.match(/1\. I found it hard to wind down\s(0 NEVER|1 SOMETIMES|2 OFTEN|3 ALMOST ALWAYS)\s2\. I was aware of dryness of my mouth\s(0 NEVER|1 SOMETIMES|2 OFTEN|3 ALMOST ALWAYS)\s3\. I couldn't seem to experience any positive feeling at all\s(0 NEVER|1 SOMETIMES|2 OFTEN|3 ALMOST ALWAYS)\s4\. I experienced breathing difficulty \(eg\, excessively rapid breathing\, breathlessness in the absence of physical exertion\)\s(0 NEVER|1 SOMETIMES|2 OFTEN|3 ALMOST ALWAYS)\s5\. I found it difficult to work up the initiative to do things\s(0 NEVER|1 SOMETIMES|2 OFTEN|3 ALMOST ALWAYS)\s6\. I tended to over-react to situations\s(0 NEVER|1 SOMETIMES|2 OFTEN|3 ALMOST ALWAYS)\s7\. I experienced trembling \(e\.g\, in the hands\)\s(0 NEVER|1 SOMETIMES|2 OFTEN|3 ALMOST ALWAYS)\s8\. I felt that I was using a lot of nervous energy\s(0 NEVER|1 SOMETIMES|2 OFTEN|3 ALMOST ALWAYS)\s9\. I was worried about situations in which I might panic and make a fool of myself\s(0 NEVER|1 SOMETIMES|2 OFTEN|3 ALMOST ALWAYS)\s10\. I felt that I had nothing to look forward to\s(0 NEVER|1 SOMETIMES|2 OFTEN|3 ALMOST ALWAYS)\s11\. I found myself getting agitated\s(0 NEVER|1 SOMETIMES|2 OFTEN|3 ALMOST ALWAYS)\s12\. I found it difficult to relax\s(0 NEVER|1 SOMETIMES|2 OFTEN|3 ALMOST ALWAYS)\s13\. I felt downhearted and blue\s(0 NEVER|1 SOMETIMES|2 OFTEN|3 ALMOST ALWAYS)\s14\. I was intolerant of anything that kept me from getting on with what I was doing\s(0 NEVER|1 SOMETIMES|2 OFTEN|3 ALMOST ALWAYS)\s15\. I felt like I was close to panic\s(0 NEVER|1 SOMETIMES|2 OFTEN|3 ALMOST ALWAYS)\s16\. I was unable to become enthusiastic about anything\s(0 NEVER|1 SOMETIMES|2 OFTEN|3 ALMOST ALWAYS)\s17\. I felt I wasn't worth much as a person\s(0 NEVER|1 SOMETIMES|2 OFTEN|3 ALMOST ALWAYS)\s18\. I felt that I was rather touchy\s(0 NEVER|1 SOMETIMES|2 OFTEN|3 ALMOST ALWAYS)\s19\. I was aware of the action of my heart in the absence of physical exertion \(e\.g\, sense of heart rate increase\, heart missing a beat\)\s(0 NEVER|1 SOMETIMES|2 OFTEN|3 ALMOST ALWAYS)\s20\. I felt scared without any good reason\s(0 NEVER|1 SOMETIMES|2 OFTEN|3 ALMOST ALWAYS)\s21\. I felt that life was meaningless\s(0 NEVER|1 SOMETIMES|2 OFTEN|3 ALMOST ALWAYS)/) ? true : false;

    if (length === 0) {
        document.getElementById("displayResult").innerHTML = `Enter Response`;
        return
    } else if (firstChar != 1) {
        document.getElementById("displayResult").innerHTML = `Input starts with ${firstChar} instead of 1`;
        return
    } else if (input.length < 1286) {
        document.getElementById("displayResult").innerHTML = `Input too short, has ${length} characters`;
        return
    } else if (input.length > 1495) {
        document.getElementById("displayResult").innerHTML = `Input too long, has ${length} characters`;
        return
    } else if (lastChar != 'R' && lastChar != 'S' && lastChar != 'N') {
        document.getElementById("displayResult").innerHTML = `Input ends with ${lastChar} instead of R, N, or S`;
        return
    } else if (!inputValid) {
        console.log(inputValid)
        document.getElementById("displayResult").innerHTML = `Invalid Input`
        return

    //Input accepted, ready to begin calculation
    } else {

        input = input.replaceAll("ALMOST ALWAYS", "#");
        input = input.replaceAll("SOMETIMES", "#");
        input = input.replaceAll("OFTEN", "#");
        input = input.replaceAll("NEVER", "#");
        let number = [];
        for (let k = 0; k < input.length; k++) {
            if (input[k] === "#") {
                number.push(Number(input[k - 2]));
            }
        }

        let depArr = [];
        let anxArr = [];
        let strArr = [];

        for (let j = 0; j < number.length; j++) {
            if (j === 2 || j === 4 || j === 9 || j === 12 || j === 15 || j === 16 || j === 20) {
                depArr.push(number[j])
            } else if (j === 1 || j === 3 || j === 6 || j === 8 || j === 14 || j === 18 || j === 19) {
                anxArr.push(number[j])
            } else {
                strArr.push(number[j])
            }
        }

        let depScore = depArr.reduce((previousValue, currentValue) => previousValue + currentValue)
        let anxScore = anxArr.reduce((previousValue, currentValue) => previousValue + currentValue)
        let strScore = strArr.reduce((previousValue, currentValue) => previousValue + currentValue)

        let depLevel = ''
        let anxLevel = ''
        let strLevel = ''

        if (depScore >= 0 && depScore <= 4) {
            depLevel = 'Normal'
        } else if (depScore >= 5 && depScore <= 6) {
            depLevel = 'Mild'
        } else if (depScore >= 7 && depScore <= 10) {
            depLevel = 'Moderate'
        } else if (depScore >= 11 && depScore <= 13) {
            depLevel = 'Severe'
        } else if (depScore >= 14) {
            depLevel = 'Extremely Severe'
        }

        if (anxScore >= 0 && anxScore <= 3) {
            anxLevel = 'Normal'
        } else if (anxScore >= 4 && anxScore <= 5) {
            anxLevel = 'Mild'
        } else if (anxScore >= 6 && anxScore <= 7) {
            anxLevel = 'Moderate'
        } else if (anxScore >= 8 && anxScore <= 9) {
            anxLevel = 'Severe'
        } else if (anxScore >= 10) {
            anxLevel = 'Extremely Severe'
        }

        if (strScore >= 0 && strScore <= 7) {
            strLevel = 'Normal'
        } else if (strScore >= 8 && strScore <= 9) {
            strLevel = 'Mild'
        } else if (strScore >= 10 && strScore <= 12) {
            strLevel = 'Moderate'
        } else if (strScore >= 13 && strScore <= 16) {
            strLevel = 'Severe'
        } else if (strScore >= 17) {
            strLevel = 'Extremely Severe'
        }

        document.getElementById("displayResult").innerHTML = `Depression Score = ${depLevel} (${depScore})<br>Anxiety Score = ${anxLevel} (${anxScore})<br>Stress Score = ${strLevel} (${strScore})<br>`
    }
}