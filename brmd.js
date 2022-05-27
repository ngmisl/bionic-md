/* Function forked from  https://github.com/ansh/bionic-reading/blob/master/src/ContentScript/index.js */

function inputText() {
    var input = document.getElementById("input").value;
    return input.replace(/\p{L}+/gu, (word) => {
        const { length } = word;
        let midPoint = 1;
        if (length > 3) midPoint = Math.round(length / 2);
        const firstHalf = word.slice(0, midPoint);
        const secondHalf = word.slice(midPoint);
        const htmlWord = `**${firstHalf}**${secondHalf}`;
        return document.getElementById("output1").value=htmlWord;;
    });
}