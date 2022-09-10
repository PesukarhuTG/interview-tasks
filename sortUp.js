
const btn = document.getElementById('sort-asc');
btn.addEventListener('click', mysort);

function mysort() {
  let nav = document.querySelector('.nav');

  for (let i = 0; i < nav.children.length; i++) {
    for (let j = i; j < nav.children.length; j++) {
                if (+nav.children[i].getAttribute('data-price') > +nav.children[j].getAttribute('data-price')) {
                    //let replacedNode = nav.replaceChild(nav.children[j], nav.children[i]);
                    insertAfter(nav.replaceChild(nav.children[j], nav.children[i]), nav.children[i]);
                }
            }
        }
}

function insertAfter(elem, refElem) {
  return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
}
