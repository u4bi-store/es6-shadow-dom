export class ColorCard extends HTMLElement {
  constructor() {

    super();
    this.type = this.getAttribute('[type]');

    this.shadow = this.attachShadow({mode: 'open'});

    this.shadow.innerHTML =`
    <style>
        div{
            color: #fff;
            border-radius: 10%;
            width  : 100px;
            height : 50px;
            text-align : center;
            cursor: pointer;
        }

        .color-card-red{
            background: red;
        }

        .color-card-blue{
            background: blue;
        }

        .color-card-green{
            background: green;
        }

        .color-card-black{
            background: black;
        }
    </style>
    `;
    this.content = document.createElement('div');

    this.init();
  }

  init(){
    
    this.content.innerHTML = this.innerHTML;
    this.content.className = 'color-card-'+this.type;

    this.content.addEventListener("click", (e) => {
        alert(this.type);
        console.log(e);
    });

    this.shadow.appendChild(this.content);

  }

}

customElements.define('color-card', ColorCard);