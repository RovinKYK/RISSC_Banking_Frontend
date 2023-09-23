export function currency(value) {
    const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'LKR'});
    return formatter.format(value).replace("LKR", "Rs.")
  };

export function date(date) {
const display = new Date(date)
return display.toLocaleDateString('en-GB');
}

export function sqlDate(date) {
  const year = date.getFullYear();
  const month = `0${date.getMonth() + 1}`.slice(-2);  // pad with leading zero
  const day = `0${date.getDate()}`.slice(-2);  // pad with leading zero
  return `${year}-${month}-${day}`;
}