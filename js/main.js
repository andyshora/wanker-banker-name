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
  'Simmons',
  'Mackenzie',
  'Morgan',
  'Schwuff',
  'Schwaff',
  'Schwiff',
  'Bergsson',
  'Jeffries',
  'Fitzgerald',
  'Miller',
  'Buckington',
  'Goldberg',
  'Brownberg',
  'Thalmann',
  'Pierce',
  'Hutchinson',
  'Bucklesworth',
  'Shippington',
  'Stanlake',
  'Montgomery',
  'Phillipsworth',
  'Hornberg',
  'Babcock',
  'Welks',
  'Hornblower',
  'Schwaffberg',
  'Schwiffberg',
  'Schwabb',
  'Swiveldick',
  'Percy',
  'Meadows',
  'Morecock',
  'Dickberg',
  'Cockberg',
  'Jeffcock',
  'Heinberg',
  'Smallcock',
  'Limpcock',
  'Thincock',
  'Cockworth',
  'Hawksworth',
  'Smytheberg',
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
  'Shagworth',
];
var divisions = [
  'Mergers and Aquisitions',
  'FX Trading',
  'Pensions',
  'Derivatives',
  'Commodites Trading',
  'Merchant Brokers',
  'Forex',
  'Futures',
  'Options'
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