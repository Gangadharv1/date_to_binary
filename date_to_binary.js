function convertDateToBinary(date) {
    let [year, month, day] = date.split('-');
    return `${parseInt(year, 10).toString(2)}-${parseInt(month, 10).toString(2)}-${parseInt(day, 10).toString(2)}`;
}