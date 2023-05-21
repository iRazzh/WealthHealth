/**
 * Allows you to have a precise and personalised date format
 * @param {*} date : Will allow to pass in parameters the "new Date()"
 * @returns  Custom date format | day/month/year
 */
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