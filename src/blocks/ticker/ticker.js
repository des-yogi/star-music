(function(){
  const ticker = document.querySelector('.ticker');
  const list = document.querySelector('.ticker__list');
  if (!list) return;
  const clone = list.cloneNode(true);
  ticker.append(clone);
}());
