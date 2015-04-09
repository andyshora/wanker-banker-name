var nameSet = false;
var wanker = '';
$(document).ready(function() {

  $('#generate-button').click(generate);




});
function generate() {

  if (!nameSet) {
    wanker = prompt('How would you like your name to appear?');
    if (wanker && wanker.length > 5) {
      nameSet = true;
    } else {
      alert('You\'ll need your name for your business card, you wanker');
      wanker = 'Unknown Wanker';
      nameSet = true;
    }
  }

  if (wanker.length > 30) {
    wanker = wanker.substring(0, 30);
  }

  console.log('generate');

  var val = getRandomName();
  $('#bank-name').html(val);

  var val = getRandomDivision();
  $('#bank-division').html(val);

  $('#person-name').html(wanker);

  $('.card').show();

}
var candidates = [
  'simmons',
  'mackenzie',
  'morgan',
  'schwuff',
  'schwaff',
  'schwiff',
  'bergsson',
  'jeffries',
  'fitzgerald',
  'miller',
  'buckington',
  'goldberg',
  'brownberg',
  'thalmann',
  'pierce',
  'hutchinson',
  'bucklesworth',
  'shippington',
  'stanlake',
  'montgomery',
  'phillipsworth',
  'hornberg',
  'babcock',
  'welks',
  'hornblower',
  'schwaffberg',
  'schwiffberg',
  'schwabb',
  'swiveldick',
  'percy',
  'meadows',
  'morecock',
  'dickberg',
  'cockberg',
  'jeffcock',
  'heinberg',
  'smallcock',
  'limpcock',
  'thincock',
  'cockworth',
  'hawksworth',
  'smytheberg',
  'Shufflebottom',
  'Rutherford',
  'Kingsley',
  'Hawthorn',
  'Fitzgerald',
  'Calloway',
  'Covington',
  'Wellington',
  'Pinckney ',
  'Yarborough',
  'Hollingsworth',
  'shagworth',
];
var divisions = [
  'Mergers and Aquisitions',
  'FX Trading',
  'Pensions',
  'derivatives',
  'commodites trading',
  'merchant brokers',
  'forex',
  'futures',
  'options'
]
function getRandomDivision() {
  var i = Math.floor(Math.random() * divisions.length);
  return divisions[i];
}
function getRandomName() {
  var len = candidates.length;
  var i = Math.floor(Math.random() * len);
  var j = Math.floor(Math.random() * len);
  var joinStr = Math.random() > .8 ? ' & ' : ' ';

  var str = candidates[i] + joinStr +  candidates[j];
  return str;
}