const DIVIDER = '-';

function isDate(str) {
    const divider = getDivider(str);
    if (!divider) return false;

    const parts = str.split(divider);
    if (parts.length !== 3) return false;

    const [day, month, year] = [...parts];
    if (isNaN(day) || isNaN(month) || isNaN(year)) return false;

    if (Number(day) > 31) return false;
    if (Number(month) > 12) return false;

    return true;
}

function getDate(str) {
    const divider = getDivider(str);
    const parts = str.split(divider);
    return parts.join('-');
}

function getDivider(str) {
    if (str.includes('-')) {
        return '-';
    } else if (str.includes('/')) {
        return '/';
    }
    return null;
}

const arr= ['10-02-2022', 'тест', '11/12/2023', '00/13/2022', '41/12/2023'];
const dates = arr.filter(el => isDate(el)).map(el => getDate(el));
console.log(dates);