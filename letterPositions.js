const letterPositions = function(sentence) {
  const results = {};
  let newSentence = sentence.split(' ').join('');
  for (let i = 0; i < newSentence.length; i++) {
    if (newSentence[i]) {
      if (results[newSentence[i]]) {
        results[newSentence[i]].push(i);
      } else {
        results[newSentence[i]] = [i];
      }
    }
  }
  return results;
};

