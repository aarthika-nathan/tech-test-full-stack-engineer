import dateFormat from 'dateformat';

function getDateTimeString(date) {
    var dateObject = new Date(date);
    return dateFormat(dateObject, "mmmm d @ h:MM tt");
  }

export default getDateTimeString;
