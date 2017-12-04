var GameData = {
  questions : [
    {
      text  : 'Who is older Father or Son?',
      opts  : [
        { text: 'Same age', correct: true },
        { text: 'Father'},
        { text: 'Son'}
      ],
      difficulty: 3 //1-5
    }
  ]
};
var GameSettings = {
  teams : [
    { name: 'Red',  color: 'red' },
    { name: 'Blue', color: 'blue'}
  ],
  playTo  : 100,
  pointsForRightAnswer: 10,
  pointsForReboundAnswer: 5,
  questionsInARow: 1, // How many questions to ask one team in a row
  helpLosingTeam: 0,   // 0=no, 1 help little => 5 help a lot
  bonusForQuickAnswer: false // false=no, integer for num seconds countdown
};


// Components
// Progress bar
Vue.component('progress-bar', {
  props     : ['pc'],
  template  : '<div class="progress-bar">0</div>'
});

Vue.component('question-title', {
  props     : ['player', 'text'],
  template  : '<h1>{{ player }}: {{ text }}</h1>'
});

Vue.component('question-options', {
  props     : ['text'],
  template  : '<li></li>'
});


var Game = new Vue({
  el: '#game',
  data: {
    message: 'Hello Vue!'
  }
})
