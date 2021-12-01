const add = (a, b) => {
    return a + b;
};
const sub = (a, b) => {
    return a - b;
};
const multi = (a, b) => {
    return a * b;
};

const name = "kaushal";

// module.exports = name;
// module.exports.add = add;
// module.exports.sub = sub;
// module.exports.multi = multi;

//sort module exports:-
module.exports = { add, sub, multi, name };