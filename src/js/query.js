function getScreenSize() {
  const queries = [
    { size: 'sm', query: '(max-width: 600px)' },
    { size: 'md', query: '(min-width: 601px) and (max-width: 1024px)' },
    { size: 'lg', query: '(min-width: 1025px) and (max-width: 1440px)' },
    { size: 'xl', query: '(min-width: 1441px)' }
  ];

  const match = queries.find(query => window.matchMedia(query.query).matches);
  return match ? match.size : 'unknown';
}

function getSuffixIfStartsWith(str, prefix) {
  if (str.startsWith(prefix)) {
    return str.slice(prefix.length);
  }
  return null;
}


function getQueries(element) {
  let queries = {
    sm: [],
    xl: [],
    lg: [],
    md: []
  }

  for (let className of Array.from(element.classList.values())) {
    let suffix = getSuffixIfStartsWith(className, "sm:")
    if (suffix) queries.sm.push(suffix)
    suffix = getSuffixIfStartsWith(className, "md:")
    if (suffix) queries.md.push(suffix)
    suffix = getSuffixIfStartsWith(className, "lg:")
    if (suffix) queries.lg.push(suffix)
     suffix = getSuffixIfStartsWith(className, "xl:")
    if (suffix) queries.xl.push(suffix)
  }
  
  return queries
}

function removeClasses(element, classNames) {
  classNames.forEach(className => {
    element.classList.remove(className);
  });
}

function addClasses(element, classNames) {
  classNames.forEach(className => {
    element.classList.add(className);
  });
}

async function matcheQuery(element, queries){
  let screenSize = getScreenSize()
  for (let size in queries) {
    
    if(size != screenSize) removeClasses(element,queries[size])
    if(size == screenSize) addClasses(element,queries[size])
  }
}

function scanElement() {
  let elements = document.querySelectorAll(`[class*="sm:"],[class*="lg"],[class*="md:"],[class*="xl"]`)
  for (let element of elements) {
   let queries = getQueries(element)
   requestAnimationFrame(()=>matcheQuery(element,queries))
  }
}

window.addEventListener("resize",scanElement)

scanElement()