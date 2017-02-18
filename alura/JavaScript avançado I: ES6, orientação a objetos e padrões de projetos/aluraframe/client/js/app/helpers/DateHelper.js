class DateHelper {

  constructor(){
    throw new Error('Date Helper is not be instanced')
  }

  static textToDate(value){
    if(!/\d{4}-\d{2}-\d{2}/.test(value)){
      throw new Error('Use the pattern pt-br');
    }
    return new Date(...value.split('-').map( (el, index) => el - index % 2));
  }

  static dateToText(value){
    return `${value.getDate()}/${(value.getMonth() + 1)}/${value.getFullYear()}`;
  }
}
