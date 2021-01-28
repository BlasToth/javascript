let setUpToolTip = function() {
    let tooltip = "",
        toolTipDiv = document.querySelector('.div-tooltip'),
        toolTipElements = Array.from(document.querySelectorAll('.tooltip-js'));

    let displayToolTip = function(e, obj) {
        tooltip = obj.dataset.tooltip;
        toolTipDiv.innerHTML = tooltip;
        toolTipDiv.style.top = e.pageY + "px";
        toolTipDiv.style.left = e.pageX + "px";
        toolTipDiv.style.opacity = 1;
    };

    toolTipElements.forEach(function(elem) {
        elem.addEventListener("mouseenter", function(e) {
            displayToolTip(e, this);
        })
    })
};

setUpToolTip();