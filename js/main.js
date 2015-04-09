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

  var generatedName = getRandomName();
  $('#bank-name').html(generatedName);

  var generatedDivision = getRandomDivision();
  $('#bank-division').html(generatedDivision);

  var generatedTitle = getRandomTitle();
  $('#job-title').html(generatedTitle);

  $('#person-name').html(wanker);

  $('.card,.twitter-share-button').show();



  $('#twitter-share-button').attr('href', 'https://twitter.com/share?text=' + encodeURIComponent(wanker + '. ' + generatedTitle + ', ' + generatedDivision + ' at ' + generatedName + '. What\'s your wanker banker name?'));

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
];
var titles = [
  'Vice President',
  'Senior Adviser',
  'Team Leader',
  'Legal Adviser',
  'Senior Contracts Administrator',
  'Compliance Coordinator',
  'Junior Paralegal',
  'Compliance Director',
  'Contracts Manager',
  'Chief Learning Officer',
  'Risk Officer',
  'Wealth Manager',
  'High Wealth Manager',
  'Contracts Specialist',
  'Equations Manager',
  'Life Trader',
  'Filing Treasurer',
  'Facilities Planner',
  'Cock Smoother'
];
function getRandomTitle() {
  var i = Math.floor(Math.random() * titles.length);
  return titles[i];
}
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