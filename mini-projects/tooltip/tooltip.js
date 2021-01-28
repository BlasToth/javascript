let setUpToolTip = function() {
    let tooltip = "",
        toolTipDiv = document.querySelector('.div-tooltip'),
        toolTipElements = Array.from(document.querySelectorAll('.tooltip-js'));

    let displayToolTip = function(e, obj) {
        tooltip = obj.dataset.tooltip;
        toolTipDiv.innerHTML = tooltip;
        toolTipDiv.style.top = e.pageY + "px";
        toolTipDiv.style.left = e.pageX + "px";
        //toolTipDiv.style.opacity = 1;
        fadeIn(toolTipDiv);
    };

    let fadeOut = function(element) {
        let op = 1;
        let timer = setInterval(function() {
            if (op <= 0.1) {
                clearInterval(timer);
                element.style.opacity = 0;
                element.style.display = "none";
            }
            element.style.opacity = op;
            op -= op * 0.1;
        }, 20);
    };

    let fadeIn = function(element) {
        let op = 0.1;
        element.style.display = "block";
        let timer = setInterval(function() {
            if (op = 1) {
                clearInterval(timer);
            }
            element.style.opacity = op;
            op += op * 0.1;
        }, 20);
    };

    toolTipElements.forEach(function(elem) {
        elem.addEventListener("mouseenter", function(e) {
            displayToolTip(e, this);
        });
        elem.addEventListener("mouseleave", function(e) {
            // toolTipDiv.style.opacity = 0;
            fadeOut(toolTipDiv);
        });
    });
};

setUpToolTip();