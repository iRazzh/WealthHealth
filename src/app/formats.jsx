// Formats for date
export const dateFormat = (date) => {
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getUTCFullYear();

    if (day < 10) { 
        day = `0${day}`;
    }
    if (month < 10) { 
        month = `0${month}`;
    }

    return `${day}/${month}/${year}`.toString();
};