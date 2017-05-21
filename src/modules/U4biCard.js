import '../scss/U4biCard.scss'

export class U4biCard extends HTMLElement {
  constructor() {

    super(); /* HTMLElement 상속 */

    
    let 
        shadow = this.attachShadow({mode: 'open'}); /* 쉐도우 돔 생성 */

    let 
        img = document.createElement('img'); /* 표준 이미지 태그 생성 */
    
    img.src = this.att('[img]');
    img.width = 150;
    img.height = 150;
    img.className = 'u4bi-card-img';

    shadow.appendChild(img); /* 이미지를 쉐도우돔내 주입 */
    
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

    shadow.appendChild(content); /* 콘텐츠 디비전을 쉐도우돔내 주입 */

  }

  att(key){
    return this.getAttribute(key);
  }

}

customElements.define('u4bi-card', U4biCard);