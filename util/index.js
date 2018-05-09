export function Noofmonths(date1, date2) {
    var Nomonths;
    Nomonths= (date2.getFullYear() - date1.getFullYear()) * 12;
    Nomonths-= date1.getMonth() + 1;
    Nomonths+= date2.getMonth() +1; // we should add + 1 to get correct month number
    return Nomonths <= 0 ? 1 : Nomonths + 1;
}

export function customTileStyle(date, view, currentMonth) {
    if (date.getMonth() !== currentMonth) {
        return 'invalidDate';
    }
    if (date.getDay() === 0 || date.getDay() === 6) {
        return 'weekendClass';
    }

    return 'weekClass';
}