'use strict';

const body = document.querySelector('body');

const DomElement = function (string) {
  this.selector = string;
  this.height = '';
  this.width = '';
  this.background = '';
  this.fontSize = '';

  this.newTag = function (string) {
    if (string[0] === '.') {
      let div = document.createElement('div');
      const nameClass = string.slice(1);

      div.classList.add(`${nameClass}`);
      div.style.cssText = `
        height: 200px;
        width: 200px;      
        background: grey;      
        fontSize: 15px;
        text-align: center;
        margin: 0 auto;     
      `;

      div.innerText = 'hello block';
      body.prepend(div);
    } else if (string[0] === '#') {
      let paragraph = document.createElement('p');
      const nameClass = string.slice(1);

      paragraph.setAttribute('id', `${nameClass}`);

      paragraph.style.cssText = `
        height: 200px;
        width: 200px;      
        background: red;      
        fontSize: 15px;
        text-align: center;
        margin: 0 auto;      
      `;

      paragraph.innerText = 'Hello paragraph';
      body.prepend(paragraph);
    } else {
      alert('Что то не то');
    }
  };
};

// const newElement = new DomElement('hai');
// newElement.newTag('#blok');
class First {
  hello() {
    console.log('Привет я метод родителя!');
  }
}

class Second extends First {
  secondHello() {
    console.log('А я наследуемый метод!');
  }
}

const second = new Second();

second.hello();
second.secondHello();


