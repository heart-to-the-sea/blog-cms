"use strict";
exports.__esModule = true;
var moment_1 = require("moment");
var react_1 = require("react");
function DateBar() {
    var _a = react_1.useState(), dateStr = _a[0], setDateStr = _a[1];
    react_1.useEffect(function () {
        setInterval(function () {
            var str = moment_1["default"]().format("YYYY年MM月DD日 HH:mm:ss");
            setDateStr(str);
        }, 100);
    }, []);
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { id: "date" }, dateStr)));
}
exports["default"] = DateBar;
