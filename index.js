function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function deepestChild() {
  var divs = document.querySelector('#grand-node').querySelectorAll('div')
  return divs[divs.length - 1]
}

function increaseRankBy(n) {
  var ranks = document.querySelectorAll('.ranked-list')
  ranks.forEach((rank, index) => {
    rank.innerHTML = parseInt(rank.innerHTML) + n;
  });
}
