"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const formatValue = (value) => {
    if (typeof value === "string") {
        return value.toUpperCase();
    }
    else if (typeof value === "number") {
        return value * 10;
    }
    else {
        return !value;
    }
};
console.log(formatValue("Hello"));
console.log(formatValue(5));
console.log(formatValue(false));
//# sourceMappingURL=solution.js.map