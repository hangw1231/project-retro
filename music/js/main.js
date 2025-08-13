$(function(){
    const chart = {
        y1970 : [
            {title:'가을비 우산속', artist:'최헌'},
            {title:'감수광', artist:'혜은이'},
            {title:'개구장이', artist:'산울림'},
            {title:'개 여울', artist:'정미조'},
            {title:'고귀한 선물', artist:'장은아'},
            {title:'고래사냥', artist:'송창식'},
            {title:'고별', artist:'홍민'},
            {title:'고향초', artist:'홍민'},
            {title:'곡예사의 첫사랑', artist:'박경애'},
            {title:'그 사람 이름은 잊었지만', artist:'박건'},
        ],
        y1980 : [
            {title:'가까이 하기엔 너무 먼 당신', artist:'이광조'},
            {title:'가나다라', artist:'송착식'},
            {title:'가슴앓이', artist:'한마음'},
            {title:'가시나무', artist:'시인과 촌장'},
            {title:'가을을 남기고 간 사랑', artist:'패티킴'},
            {title:'개똥벌레', artist:'신형원'},
            {title:'갯바위', artist:'한마음'},
            {title:'거리에서', artist:'김광석'},
            {title:'겨울 비는 내리고', artist:'김범룡'},
            {title:'겨울아이', artist:'이종용'},
        ],
        y1990 : [
            {title:'내사랑 내곁에', artist:'김현식'},
            {title:'너를 사랑해', artist:'한동준'},
            {title:'다시만난 너에게', artist:'피노키오'},
            {title:'나의 노래', artist:'김광석'},
            {title:'아주 오래된 연인들', artist:'015B'},
            {title:'이별의 그늘', artist:'윤상'},
            {title:'10년전의 일기를 꺼내어', artist:'봄여름가을겨울'},
            {title:'Poison', artist:'엄정화'},
            {title:'내가 만일', artist:'안치환'},
            {title:'도시인', artist:'넥스트 '},
        ],
        y2000 : [
            {title:'GEE', artist:'소녀시대'},
            {title:'점점', artist:'브라운아이즈'},
            {title:'사랑했나봐', artist:'윤도현'},
            {title:'마지막인사', artist:'BIGBANG(빅뱅)'},
            {title:'사랑의 時(시)', artist:'엠씨 더 맥스(M.C. the MAX)'},
            {title:'벌써일년', artist:'브라운아이즈'},
            {title:'NO.1', artist:'보아'},
            {title:'하루하루', artist:'BIGBANG(빅뱅)'},
            {title:'I Love You', artist:'포지션'},
            {title:'So Hot', artist:'원더걸스'},
            {title:'거짓말', artist:'god'},
            {title:'Tell me', artist:'원더걸스'},
            {title:'아시나요', artist:'조성모'},
            {title:'우린 제법 잘 어울려요', artist:'성시경'},
            {title:'거짓말', artist:'BIGBANG(빅뱅)'},
            {title:'Never Ending Story', artist:'부활'},
            {title:'With Me', artist:'휘성'},
            {title:'미안해요', artist:'김건모'},
            {title:'제자리 걸음', artist:'김종국'},
            {title:'열정', artist:'SE7EN'}
        ],
        y2010 : [
            {title:'벚꽃 엔딩', artist:'버스커버스커'},
            {title:'밤편지', artist:'아이유'},
            {title:'야생화', artist:'박효신'},
            {title:'봄날', artist:'방탄소년단'},
            {title:'금요일에 만나요', artist:'아이유'},
            {title:'첫눈처럼 너에게 가겠다', artist:'에일리'},
            {title:'봄 사랑 벚꽃 말고', artist:'HIGH4, 아이유'},
            {title:'모든 날, 모든 순간', artist:'폴킴'},
            {title:'어디에도', artist:'엠씨 더 맥스(M.C. the MAX)'},
            {title:'바람기억', artist:'나얼'},
        ]
    }

    const $wrap = $('.rank-wrap');

    Object.keys(chart).forEach(yearKey => {
    const year = yearKey.replace('y',''); // 숫자만
    const $ul = $(`<ul class="rank ${yearKey}"></ul>`);
    // 위치/크기 등 기존 .rank 스타일 유지하려면 클래스만 'rank' 유지하면 됨
    $ul.css({
      width:'650px',
      height:'530px',
      position:'absolute',
      top:'255px',
      right:'465px',
      overflow:'scroll'
    });

    // 4) 곡 LI 생성
    chart[yearKey].forEach((song, idx) => {
      const num = String(idx+1).padStart(2,'0');
      const $li = $(`
        <li>
          <a href="#">
            <p>${num}</p>
            <figure><img alt=""></figure>
            <button class="play"></button>
            <strong>${song.title}</strong>
            <span>${song.artist}</span>
          </a>
        </li>
      `);
      $ul.append($li);
    });

    $wrap.append($ul);

    // 5) 이미지 경로 자동 주입
    $ul.find('li a figure').each(function(index){
      const imgNum = (index+1).toString().padStart(2,'0');
      $(this).find('img').attr('src', `img/${year}/${year}rank_${imgNum}.jpg`);
    });
  });

  // 6) 초기 on (2000년대부터 보이도록)
  $('.rank').removeClass('on');
  $('.rank.y2000').addClass('on');

  // 7) 탭 클릭 처리
  $('.list-header a').on('click', function(e){
    e.preventDefault();
    const yearKey = $(this).data('year'); // 예: 'y1990'
    const year = yearKey.replace('y','');

    $('.list-header li').removeClass('on');
    $(this).parent().addClass('on');

    $('.rank').removeClass('on');
    $('.rank.' + yearKey).addClass('on');

    $('.goto p').text(`${year}년대 음악 자세히 알아보기`)
  });


})