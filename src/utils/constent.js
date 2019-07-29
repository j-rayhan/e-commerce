export default {
    formatCurrency: (number) => {
        return `Tk : ${Number(number.toFixed(2)).toLocaleString()} `;
    }
}