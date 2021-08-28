import moment from 'moment';

export function convertDate(date: Date) {
  const currentDate = new Date();
  if (moment(date).format('DD/MM/yyyy') !== 'Invalid date') {
    if (moment(date).isBefore(currentDate) === false) {
      return {
        convertedDate: moment(date).format('DD/MM/yyyy'),
        expiredDate: false,
      };
    }
    return {
      convertedDate: moment(date).format('DD/MM/yyyy'),
      expiredDate: true,
    };
  }
  return {
    convertedDate: '',
    expiredDate: '',
  };
}
