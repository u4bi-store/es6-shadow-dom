export class Tabs extends HTMLElement {
  constructor() {

    super();
    this.type = this.getAttribute('[type]');

    this.shadow = this.attachShadow({mode: 'open'});
    this.shadow.innerHTML = `
    <style>

    </style>

    <div id="tabs">
        <slot id="tabsSlot" name="title"></slot>
    </div>

    <div id="panels">
        <slot id="panelsSlot"></slot>
    </div>
    `;

    this.connected();
  }

  connected(){
      console.log(this.type);
      console.log(this.shadow.querySelector('#tabsSlot'));
      console.log(this.shadow.querySelector('#panelsSlot'));

      console.log('name prop ', this.shadow.querySelector('#tabsSlot').getAttribute('name'));

  }

}

customElements.define('basic-tabs', Tabs);