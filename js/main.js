$(document).ready(function() {
      $('#generate-button').click(function() {
        var val = getRandomName();
        $('#bank-name').html(val);
        $('.card').show();
      });
    });
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
    function getRandomName() {
      var len = candidates.length;
      var i = Math.floor(Math.random() * len);
      var j = Math.floor(Math.random() * len);
      var joinStr = Math.random() > .8 ? ' & ' : ' ';

      var str = candidates[i] + joinStr +  candidates[j];
      return str;
    }