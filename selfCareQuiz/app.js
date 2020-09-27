const correctAnswers = ['A', 'A', 'A', 'A'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');

form.addEventListener('submit', e => {
  e.preventDefault();
  // stops the refresh of page

  let score = 0;
  const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

  // check the answers
  // answer = A/B 
  // index = Q1/2/3/4
  // 4 question 100 is 25%
  userAnswers.forEach((answer, index) => {
    if (answer === correctAnswers[index]){
      score += 25;
    }
  });

  // log the score to console
  //console.log(score);

  // show the result
  scrollTo(0, 0);
  result.querySelector('span').textContent = `${score}%`;
  result.classList.remove('d-none');

  // similar to setTimeoOut performs only once
  // ssetInterval carries for period of time specified
  let output = 0;
  const timer = setInterval(() => {
    result.querySelector('span').textContent = `${output}%`;
    if(output === score){
      clearInterval(timer);
    } else {
      output++;
    }
  }, 10);

});

// window object (the global object)

// open console type window see all elements
// window.outerWidth = gives width element
// outerWidth = shortcut

// console.log('hello'); = hello 
// is stored on the window console



// console.log(document.querySelector('form'));
// = form class=''
// console.log(window.document.querySelector('form'));
// same as above so no need to write window


// alert('hello');
// window.alert('hello again');
// creates a popup


// setTimeout(() => {
//   alert('hello, ninjas');
// }, 3000); = waits 3sec to show alert



















