import BN from 'bn.js';

export const calcAPY = (b1, b2, b3, dec) => {
    if (!b1) return null;
    if (!b2) b2 = 10000000000;
    if (!b3) b3 = 48;
    if (!dec) dec = 2;

    const b4 = new BN(b2 + b1);
    const b5 = new BN(b2);
    const b6 = new BN(b3);

    return b4.pow(b6).mul(new BN(Math.pow(10, dec + 3))).div(b5.pow(b6)).sub(new BN(Math.pow(10, dec + 3)));
}

export function formatFloatFixed(val, dec) {
    if (!dec) dec = 2;
    if (Math.log10(val) > 4 && dec > 4) dec = 4;
    if (Math.log10(val) > 6 && dec > 2) dec = 2;
    const str = val.toFixed(dec).replace(/\.0+$/, '');
    const str1 = str.split(".")[0];
    const str2 = str.split(".")[1] ? "." + str.split(".")[1] : '';
    return str1.split("").reverse().reduce(function (acc, num, i, orig) { return num + (num !== "-" && i && !(i % 3) ? "," : "") + acc; }, "") + str2;
}

export function formatFloatFixedUnsigned(val, dec) {
    return val >= 0 ? formatFloatFixed(val, dec) : 0;
}


export function numberWithCommas(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
