const dass = (input) => {
    //Input Error Checking, control flow starts with some helpful messages to user as what could be wrong with their input rather than unhelpful generic message
    const length = input.length;
    const lastChar = input.charAt(input.length - 1)
    const firstChar = input.charAt(0)
    const inputValid = input.match(/1\. I found myself getting upset by quite trivial things\s(0 Not at all|1 Some of the time|2 A good part of the time|3 Most of the time)\s2\. I was aware of dryness of my mouth\s(0 Not at all|1 Some of the time|2 A good part of the time|3 Most of the time)\s3\. I couldn\'t seem to experience any positive feeling at all\s(0 Not at all|1 Some of the time|2 A good part of the time|3 Most of the time)\s4\. I experienced breathing difficulty \(eg\, excessively rapid breathing\, breathlessness in the absence of physical exertion\)\s(0 Not at all|1 Some of the time|2 A good part of the time|3 Most of the time)\s5\. I just couldn\'t seem to get going\s(0 Not at all|1 Some of the time|2 A good part of the time|3 Most of the time)\s6\. I tended to over-react to situations\s(0 Not at all|1 Some of the time|2 A good part of the time|3 Most of the time)\s7\. I had a feeling of shakiness \(eg\, legs going to give way\)\s(0 Not at all|1 Some of the time|2 A good part of the time|3 Most of the time)\s8\. I found it difficult to relax\s(0 Not at all|1 Some of the time|2 A good part of the time|3 Most of the time)\s9\. I found myself in situations that made me so anxious I was most relieved when they ended\s(0 Not at all|1 Some of the time|2 A good part of the time|3 Most of the time)\s10\. I felt that I had nothing to look forward to\s(0 Not at all|1 Some of the time|2 A good part of the time|3 Most of the time)\s11\. I found myself getting upset rather easily\s(0 Not at all|1 Some of the time|2 A good part of the time|3 Most of the time)\s12\. I felt that I was using a lot of nervous energy\s(0 Not at all|1 Some of the time|2 A good part of the time|3 Most of the time)\s13\. I felt sad and depressed\s(0 Not at all|1 Some of the time|2 A good part of the time|3 Most of the time)\s14\. I found myself getting impatient when I was delayed in any way \(eg\, lifts\, traffic lights\, being kept waiting\)\s(0 Not at all|1 Some of the time|2 A good part of the time|3 Most of the time)\s15\. I had a feeling of faintness\s(0 Not at all|1 Some of the time|2 A good part of the time|3 Most of the time)\s16\. I felt that I had lost interest in just about everything\s(0 Not at all|1 Some of the time|2 A good part of the time|3 Most of the time)\s17\. I felt I wasn\'t worth much as a person\s(0 Not at all|1 Some of the time|2 A good part of the time|3 Most of the time)\s18\. I felt that I was rather touchy\s(0 Not at all|1 Some of the time|2 A good part of the time|3 Most of the time)\s19\. I perspired noticeably \(eg\, hands sweaty\) in the absence of high temperatures or physical exertion\s(0 Not at all|1 Some of the time|2 A good part of the time|3 Most of the time)\s20\. I felt scared without any good reason\s(0 Not at all|1 Some of the time|2 A good part of the time|3 Most of the time)\s21\. I felt that life wasn\'t worthwhile\s(0 Not at all|1 Some of the time|2 A good part of the time|3 Most of the time)\s22\. I found it hard to wind down\s(0 Not at all|1 Some of the time|2 A good part of the time|3 Most of the time)\s23\. I had difficulty in swallowing\s(0 Not at all|1 Some of the time|2 A good part of the time|3 Most of the time)\s24\. I couldn\'t seem to get any enjoyment out of the things I did\s(0 Not at all|1 Some of the time|2 A good part of the time|3 Most of the time)\s25\. I was aware of the action of my heart in the absence of physical exertion \(eg\, sense of heart rate increase\, heart missing a beat\)\s(0 Not at all|1 Some of the time|2 A good part of the time|3 Most of the time)\s26\. I felt down-hearted and blue\s(0 Not at all|1 Some of the time|2 A good part of the time|3 Most of the time)\s27\. I found that I was very irritable\s(0 Not at all|1 Some of the time|2 A good part of the time|3 Most of the time)\s28\. I felt I was close to panic\s(0 Not at all|1 Some of the time|2 A good part of the time|3 Most of the time)\s29\. I found it hard to calm down after something upset me\s(0 Not at all|1 Some of the time|2 A good part of the time|3 Most of the time)\s30\. I feared that I would be "thrown" by some trivial but unfamiliar task\s(0 Not at all|1 Some of the time|2 A good part of the time|3 Most of the time)\s31\. I was unable to become enthusiastic about anything\s(0 Not at all|1 Some of the time|2 A good part of the time|3 Most of the time)\s32\. I found it difficult to tolerate interruptions to what I was doing\s(0 Not at all|1 Some of the time|2 A good part of the time|3 Most of the time)\s33\. I was in a state of nervous tension\s(0 Not at all|1 Some of the time|2 A good part of the time|3 Most of the time)\s34\. I felt I was pretty worthless\s(0 Not at all|1 Some of the time|2 A good part of the time|3 Most of the time)\s35\. I was intolerant of anything that kept me from getting on with what I was doing\s(0 Not at all|1 Some of the time|2 A good part of the time|3 Most of the time)\s36\. I felt terrified\s(0 Not at all|1 Some of the time|2 A good part of the time|3 Most of the time)\s37\. I could see nothing in the future to be hopeful about\s(0 Not at all|1 Some of the time|2 A good part of the time|3 Most of the time)\s38\. I felt that life was meaningless\s(0 Not at all|1 Some of the time|2 A good part of the time|3 Most of the time)\s39\. I found myself getting agitated\s(0 Not at all|1 Some of the time|2 A good part of the time|3 Most of the time)\s40\. I was worried about situations in which I might panic and make a fool of myself\s(0 Not at all|1 Some of the time|2 A good part of the time|3 Most of the time)\s41\. I experienced trembling \(eg\, in the hands\)\s(0 Not at all|1 Some of the time|2 A good part of the time|3 Most of the time)\s42\. I found it difficult to work up the initiative to do things\s(0 Not at all|1 Some of the time|2 A good part of the time|3 Most of the time)/) ? true : false;

    if (length === 0) {
        document.getElementById("displayResult").innerHTML = `Enter Response`;
        return
    } else if (firstChar != 1) {
        document.getElementById("displayResult").innerHTML = `Input starts with ${firstChar} instead of 1`;
        return
    } else if (input.length < 2787) {
        document.getElementById("displayResult").innerHTML = `Input too short, has ${length} characters`;
        return
    } else if (input.length > 3416) {
        document.getElementById("displayResult").innerHTML = `Input too long, has ${length} characters`;
        return
    } else if (lastChar != 'l' && lastChar != 'e') {
        document.getElementById("displayResult").innerHTML = `Input ends with ${lastChar} instead of l or e`;
        return
    } else if (!inputValid) {
        console.log(inputValid)
        document.getElementById("displayResult").innerHTML = `Invalid Input`
        return

    //Input accepted, ready to begin calculation
    } else {

        input = input.replaceAll("Most of the time", "#");
        input = input.replaceAll("Some of the time", "#");
        input = input.replaceAll("A good part of the time", "#");
        input = input.replaceAll("Not at all", "#");
        let number = [];
        for (let k = 0; k < input.length; k++) {
            if (input[k] === "#") {
                number.push(Number(input[k - 2]));
            }
        }

        let depArr = [];
        let anxArr = [];
        let strArr = [];

        let depQs = [2, 4, 9, 12, 15, 16, 20, 23, 25, 30, 33, 36, 37, 41];
        let anxQs = [1, 3, 6, 8, 14, 18, 19, 22, 24, 27, 29, 35, 39, 40];
        let strQs = [0, 5, 7, 10, 11, 13, 17, 21, 26, 28, 31, 32, 34, 38]

        for (let j = 0; j < number.length; j++) {
            if (depQs.includes(j)) {
                depArr.push(number[j])
            } else if (anxQs.includes(j)) {
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

        if (depScore >= 0 && depScore <= 9) {
            depLevel = 'Normal'
        } else if (depScore >= 10 && depScore <= 13) {
            depLevel = 'Mild'
        } else if (depScore >= 14 && depScore <= 20) {
            depLevel = 'Moderate'
        } else if (depScore >= 21 && depScore <= 27) {
            depLevel = 'Severe'
        } else if (depScore >= 28) {
            depLevel = 'Extremely Severe'
        }

        if (anxScore >= 0 && anxScore <= 7) {
            anxLevel = 'Normal'
        } else if (anxScore >= 8 && anxScore <= 9) {
            anxLevel = 'Mild'
        } else if (anxScore >= 10 && anxScore <= 14) {
            anxLevel = 'Moderate'
        } else if (anxScore >= 15 && anxScore <= 19) {
            anxLevel = 'Severe'
        } else if (anxScore >= 20) {
            anxLevel = 'Extremely Severe'
        }

        if (strScore >= 0 && strScore <= 14) {
            strLevel = 'Normal'
        } else if (strScore >= 15 && strScore <= 18) {
            strLevel = 'Mild'
        } else if (strScore >= 19 && strScore <= 25) {
            strLevel = 'Moderate'
        } else if (strScore >= 26 && strScore <= 33) {
            strLevel = 'Severe'
        } else if (strScore >= 34) {
            strLevel = 'Extremely Severe'
        }

        document.getElementById("displayResult").innerHTML = `Depression Score = ${depLevel} (${depScore})<br>Anxiety Score = ${anxLevel} (${anxScore})<br>Stress Score = ${strLevel} (${strScore})<br>`
    }
}