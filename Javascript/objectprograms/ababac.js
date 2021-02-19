var pattern = "ABABAC";
var dict = {}
for (let ch of pattern) {
    if (ch in dict) {
        console.log("Recursive is " + ch);
        break;
    }
    else {
        dict[ch] = 1
    }
}