const lang = prompt('Укажите ваш язык: en, ru или de');

switch (lang) {
  case 'en':
    console.log('Hello!');
    break;
  case 'de':
    console.log('Gutten tag!');
    break;
  case 'ru':
  default:
    console.log('Привет!');
}