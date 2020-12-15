const myInp = document.getElementById('myInput');
const btnCopy = document.getElementById('copy');

btnCopy.onclick = function() {
    //Step 1 - Select the text
    myInp.select();

    //Step 2 - Copy the text
    document.execCommand('Copy');

    //textarea
    // story.select();
    // document.execCommand('Copy');

    // További érdekesség: 
    // <h1 style="user-select: all">Copying to clipboard</h1>
}