const cb = document.getElementById('cb');
const async = document.getElementById('async');

cb.addEventListener('click', doCbSetTimeout);
async.addEventListener('click', doAsyncSetTimeout);

function doCbSetTimeout() {
    setTimeout(function() {
        console.log("setTimeout - callback");
    }, 1000)
}

function doAsyncSetTimeout() {
    setTimeoutAsync(1000)
        .then(() => console.log("setTimeout - async"));
}

function setTimeoutAsync(time) {
    return new Promise(function(resolve, reject) {
        setTimeout(resolve, time);
    });
}