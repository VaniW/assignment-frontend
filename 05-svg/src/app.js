import router from './router'
import homeTpl from './templates/home.hbs'
import simpleTpl from './templates/simple.hbs'
import styleTpl from './templates/style.hbs'
import animationTpl from './templates/animation.hbs'
import textTpl from './templates/text.hbs'
import interactionTpl from './templates/interaction.hbs'
import notFoundTpl from './templates/not-found.hbs'

const app = document.getElementById('app')

function index() {
  app.innerHTML = homeTpl()
}

function simple() {
  app.innerHTML = simpleTpl()
}

function style() {
  app.innerHTML = styleTpl()
}

function animation() {
  app.innerHTML = animationTpl()
}

function text() {
  app.innerHTML = textTpl()
}

function interaction() {
  app.innerHTML = interactionTpl()
  addInteraction();
}

function notFound() {
  app.innerHTML = notFoundTpl()
}
router('/', index)
router('/simple', simple)
router('/style', style)
router('/animation', animation)
router('/text', text)
router('/interaction', interaction)
router('*', notFound)
router()

function addInteraction() {

  function SVGMenu( el, options ) {
    this.el = el;
    this.init();
    console.log("init");
  }

  SVGMenu.prototype.init = function() {
    this.trigger = this.el.querySelector( '#topLayer' );
    this.initEvents();
  };

  SVGMenu.prototype.initEvents = function() {
    this.trigger.addEventListener( 'mousedown', clicked );
    this.trigger.addEventListener( 'mouseup', clickedend );
    this.trigger.addEventListener( 'mouseenter', over );
    this.trigger.addEventListener( 'mouseleave', clickedend );
  };

  if(document.getElementById( 'button' ) != null )
    new SVGMenu(document.getElementById( 'button' ));

  function over(e) {
    console.log("over");
    this.addEventListener('mousedown', clicked )
  }

  function leave(e) {
    console.log("leave");
    this.removeEventListener('mousemove', drag )
    this.removeEventListener('mousedown', clicked )
  }

  function clickedend(e) {
    console.log("clickedend");
    this.removeEventListener('mousemove', drag )
  }

  let start;

  function clicked(e) {

    console.log("clicked");

    var currentTransform = this.getAttribute('transform');
    var regex  = /translate\(\s*([^\s,)]+)[ ,]([^\s,)]+)/.exec(currentTransform);
    var currentPositionX = regex[1];

    if(currentPositionX < 0){
      start = e.clientX;
      this.addEventListener('mousemove', drag);
    }
  };

  function drag(e) {
    console.log("dragged");
    var currentTransform = this.getAttribute('transform');
    var regex  = /translate\(\s*([^\s,)]+)[ ,]([^\s,)]+)/.exec(currentTransform);
    var currentPositionX = regex[1];

    let currentValue = parseInt(currentPositionX)
    let newValue = currentValue+(e.clientX - start)


    if(newValue > -285)
      this.setAttribute("transform", 'translate('+newValue+',0)')

    start = e.clientX;

    if(newValue >= 1){
      this.removeEventListener('mousemove', drag )
      this.setAttribute("transform", 'translate(0,0)')
      alert("committed");
      location.reload();
    }
  }


};
