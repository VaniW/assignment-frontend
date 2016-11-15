import $ from 'jquery'

const routes = new Map();

export default function(route, fn) {
  if (route && fn) {
    routes.set(route, fn)
    return
  }

  //init if no params
  if (!route && !fn) {
    init()
    return
  }
}

function init(){
  eventHandler();
  const path = window.location.pathname; //gets uri of current page
  goto(path, true);
}

function eventHandler() {
  window.addEventListener('popstate', e => {
    if (history.state) {
      let path = e.state.pathname;
      goto(path);
    }
  });

  const link = $('nav a');

  for (var i = 0; i < link.length; i++) {
    link[i].addEventListener('click', e => {
      e.preventDefault();
      goto(e.target.pathname);
    });
  }

}

const regex = /(\/players\/)([a-z0-9]+)/gi;

function goto(route, init){
  let uri= '';
  let path = route;

  if (route.match(regex)) {
    const array = regex.exec(route);
    let p = array[2];
    uri = p;
    path = '/players/:player';
    route = '/players/'+uri;
  }

  if (!routes.has(path)) {
    path = '*';
  }

  if (history.state && !init) {
    let last = history.state.pathname;
    if (last!=route) {
      history.pushState({pathname: route}, '', route);
    }
  }
  if (init) {
    history.replaceState({pathname: route}, '', route);
  }

  return routes.get(path)(uri);
}
