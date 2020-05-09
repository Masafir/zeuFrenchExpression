module.exports = () => {
  const expressionArray = require('./expression');
  let expressionChanged = '';
  let random1 = Math.floor(Math.random() * Math.floor(expressionArray.length));
  let random2 = Math.floor(Math.random() * Math.floor(expressionArray.length));
  while(random1 == random2)
  {
    random2 = Math.floor(Math.random() * Math.floor(expressionArray.length));
  }
  expressionChanged = expressionArray[random1].action + expressionArray[random2].target;
  return expressionChanged;
}