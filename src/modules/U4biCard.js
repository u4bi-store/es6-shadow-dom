export class U4biCard extends HTMLElement {
  constructor() {

    super(); /* HTMLElement 상속 */

    
    this.shadow = this.attachShadow({mode: 'open'}); /* 쉐도우 돔 생성 */

    this.shadow.innerHTML =`
      <style>
          div {
            display: inline-block;
            float: left;
            margin: 0.5em;
            border-radius: 3px;
            background: #FFF;
            box-shadow: 0 1px 3px rgba(0,0,0,0.25);
            font-family: Helvetica, arial, sans-serif;
            -webkit-font-smoothing: antialiased;
          }

          .u4bi-card-img{
            cursor: pointer;
            background: #FFF;
            margin : 0.5em;
          }

          .u4bi-card-content{
            display: block;
            text-align: center;
            text-decoration: none;
            color: #08C;
            border-top: 1px solid #EEE;
            font-weight: bold;
            padding: 0.75em 0;
          }
      </style>
    `;

    let 
        img = document.createElement('img'); /* 표준 이미지 태그 생성 */
    
    img.src = this.att('[img]');
    img.width = 150;
    img.height = 150;
    img.className = 'u4bi-card-img';

    this.shadow.appendChild(img); /* 이미지를 쉐도우돔내 주입 */
    
    /* 클릭 이벤트 리스너 이미지내 주입 */
    img.addEventListener('click', () => {
      window.location = this.att('[url]');

    });

    let 
        content = document.createElement('div'), /* 표준 디비전 태그 생성 */
        data = {
          name  : this.att('[name]'),
          age   : this.att('[age]'),
          level : this.att('[level]'),
          exp   : this.att('[exp]'),
          team  : this.att('[team]')
        };

    content.innerHTML = ''+
     '<p>이름 : '+data.name+'</p>'+
     '<p>나이 : '+data.age+'세</p>'+
     '<p>레벨 : Lv.'+data.level+'</p>'+
     '<p>경험 : '+data.exp+'/100</p>'+
     '<p>소속 : '+data.team+'</p>';
     
    content.className = 'u4bi-card-content';

    this.shadow.appendChild(content); /* 콘텐츠 디비전을 쉐도우돔내 주입 */

  }

  att(key){
    return this.getAttribute(key);
  }

}

customElements.define('u4bi-card', U4biCard);