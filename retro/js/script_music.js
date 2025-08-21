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

    //연도별 ul 생성
    Object.keys(chart).forEach(yearKey => {
    const year = yearKey.replace('y',''); // 숫자만 정의
    const $ul = $(`<ul class="rank ${yearKey}"></ul>`);
    // 위치/크기 등 기존 .rank 스타일 유지하려면 클래스만 'rank' 유지하면 됨
    $ul.css({
      width:'49%',
      height:'55%',
      position:'absolute',
      top:'27%',
      right:'13%',
      overflow:'scroll'
    });

    // 곡 li 생성 
    chart[yearKey].forEach((song, idx) => {
      const num = String(idx+1).padStart(2,'0');
      const $li = $(`
        <li data-year="${yearKey}" data-index="${idx}">
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

    // 이미지 경로 자동 주입
    $ul.find('li a figure').each(function(index){
      const imgNum = (index+1).toString().padStart(2,'0');
      $(this).find('img').attr('src', `../img/${year}/${year}rank_${imgNum}.jpg`);
    });
  });

  // 초기 on (2000년대부터 보이도록)
  $('.rank').removeClass('on');
  $('.rank.y2000').addClass('on');

  // 탭 클릭 처리
  $('.list-header a').on('click', function(e){
    e.preventDefault();
    const yearKey = $(this).data('year'); // 예: 'y1990'
    const year = yearKey.replace('y','');  //yearkey값에서 y 빼고 숫자만 불러옴

    $('.list-header li').removeClass('on');
    $(this).parent().addClass('on');

    $('.rank').removeClass('on');
    $('.rank.' + yearKey).addClass('on');

    $('.goto p').text(`${year}년대 음악 자세히 알아보기`)

    state.currentYear = yearKey
  });


  /* 노래 삽입 */
 const scUrls ={
  y2000 : [
    'https://soundcloud.com/itsmekey/girls-generation-snsd-gee?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
    'https://soundcloud.com/danielle-cinderey/brown-eyes?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
    'https://soundcloud.com/is-627405077/ver?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
    'https://soundcloud.com/user-929157019/last-farewell-bigbang?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
    'https://soundcloud.com/jiehe-won/mc-the-max?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
    'https://soundcloud.com/uglkkt5jlnok/ecyxisnyc3gl?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
    'https://soundcloud.com/ryu-rekka/boa-no1?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
    'https://soundcloud.com/quantran227/haru-haru-2?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
    'https://soundcloud.com/hello1523/i-love-you?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
    'https://soundcloud.com/soohwan/so-hot?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
    'https://soundcloud.com/nguyentrinhhoangphuong/lies-god?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
    'https://soundcloud.com/handa-vempire-chanjuan/wonder-girls-tell-me-2012-korean-version?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
    'https://soundcloud.com/hoareyou/uj0fk1e5jbi6?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
    'https://soundcloud.com/0cean_addict/evxtlr1llcag?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
    'https://soundcloud.com/i6or7hubng2x/bigbang-mp3?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
    'https://soundcloud.com/user-221246477/never-ending-story?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
    'https://soundcloud.com/adaj2jluvhzc/with-me?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
    'https://soundcloud.com/chrisjoochun/jocjmfv87q57?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
    'https://soundcloud.com/naver81/af77xnc2ddki?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
    'https://soundcloud.com/heyimjulayy/se7en-2-must-listen-01?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing'
  ]};

  //상태
  const state = {
    currentYear : 'y2000',
    currentIndex : 0,
    isPlaying : false,
    durationMS : 0,
    tick : null
  };

  //요소
  const $cover = $('#cover'),
        $title = $('#music-title'),
        $artist = $('#music-artist'),
        $fill = $("#fill"), //재생바(재생된 정도에 따라 체워지는 부분)
        $cur = $('#time-cur'), //현재까지 진행된 시간
        $dur = $('#time-dur'), //노래의 총 시간
        $bar = $('#bar'),

        $btnPrev = $('.player-button .prev'),
        $btnPlay = $('.play'),
        $btnNext = $('.player-button .next')

  //위젯인스턴스??
  const widget = SC.Widget($('#sc-widget').get(0));

  //위젯 이벤트 바인딩??
  widget.bind(SC.Widget.Events.READY,()=>{
    widget.getDuration(ms => state.durationMS = ms || 0);

    widget.bind(SC.Widget.Events.PLAY, () => setPlayingUI(true));
    widget.bind(SC.Widget.Events.PAUSE, () => setPlayingUI(false));
    widget.bind(SC.Widget.Events.FINISH, () => nextTrack(true));
  });

  //차트 클릭하면 곡 로드되고 재생되기
  $wrap.on('click', 'ul.rank li a', function(e){
    e.preventDefault();
    const $li = $(this).closest('li');
    const yearKey = $li.data('year');
    const index = Number($li.data('index'));
    loadTrack(yearKey, index, true, true);
  });

  //버튼 설정
  function ensureCurrentHasUrl(){
    const url = getScUrl(state.currentYear, state.currentIndex)
    if (!url){
      alert ('이 곡의 SoundCloud URL을 다시 확인하여주십시오')
      return false;
    }
    return true
  }

  $btnPlay.on('click',function(){
    if (!state.isPlaying){
      const ok = ensureCurrentHasUrl();
      if(!ok) return;
      widget.play();
    } else{
      widget.pause();
    }
  });

  $btnPrev.on('click',function(){
    prevTrack(true)
  });

  $btnNext.on('click',function(){
    nextTrack(true)
  });


  //진행바 클릭 빠지고


  //트랙 url 가지고오기
  function getScUrl(yearKey, idx){
    const arr = scUrls[yearKey];
    if(!arr || typeof arr[idx] !== 'string') return '';
    return arr[idx].trim()
  }

  //트랙로드
  function loadTrack(yearKey, index, autoPlay=false, fromUser=false){
    const $list = $('.rank.'+ yearKey);
    const $li = $list.children('li').eq(index);
    if (!$li.length) return;

    const url = getScUrl(yearKey, index);
    if(!url){
      alert('이 곡의 soundCloud URL을 다시 확인해주세요.');
      return;
    }


  //상태업데이트
  state.currentYear = yearKey;
  state.currentIndex = index;

  //곡정보 표시
  const title = $li.find('strong').text().trim()
  const artist = $li.find('span').text().trim()
  const cover = $li.find('img').attr('src')

  $title.text(title);
  $artist.text(artist);
  if (cover) $cover.attr('src',cover);

  //선택 리스트 강조
  $('.rank li a').removeClass('on');
  $li.find('a').addClass('on')

  //바 초기화
  resetProgress();

  //위젯로드
  widget.load(url,{
    auto_play : !!autoPlay,
    visual : false,
    hide_related : true,
    show_comments : false,
    show_user : false,
    show_teaser : false
  });

  //duration 갱신
  setTimeout(()=>{
    widget.getDuration(ms => state.durationMS = ms || 0)
  }, 400);

  if (autoPlay && fromUser){
    setPlayingUI(true)
  }
 }

  //이전 다음 설정
  function getActiveLength(){
    return $('.rank.on').children('li').length;
  }

  function prevTrack(fromUser=false){
    const len = getActiveLength();
    if (!len) return;
    const idx = (state.currentIndex - 1 + len) % len
    loadTrack(state.currentYear, idx, true, fromUser);
  };
  function nextTrack(fromUser=false){
    const len = getActiveLength();
    if (!len) return;
    const idx = (state.currentIndex + 1) % len;
    loadTrack(state.currentYear, idx, true, fromUser);
  }

  //재생상태
  function setPlayingUI(playing){
    state.isPlaying = playing;
    $btnPlay.toggleClass('playing', playing);
    if (playing) startTick(); else stopTick();
  }

  function startTick(){
    stopTick();
    state.tick = setInterval(() => {
      widget.getPosition(pos => {
        if(!state.durationMS) return;
        const pct = Math.min(100, (pos / state.durationMS) * 100);
        $fill.css('width',pct + '%')
        $cur.text(toTime(pos))
        $dur.text(toTime(state.durationMS));;
      });;
    }, 200)
  }

  function stopTick(){
    if(state.tick){
      clearInterval(state.tick);
      state.tick = null
    }
  }

  function resetProgress(){
    $fill.css('width','0%');
    $cur.text('0:00');
    $dur.text('0:00');
  }

  function toTime(ms){
    const s = Math.floor(ms/1000)
    const m = Math.floor(s/60)
    const r = String(s%60).padStart(2,'0');
    return`${m}:${r}`
  }

  //mp4 초기 화면 채우기
  (function initInitialMeta(){
    const $first = $('.rank.y2000 li').eq(0);
    if($first.length){
      $first.find('a').addClass('on');
      $title.text($first.find('strong').text().trim());
      $artist.text($first.find('span').text().trim());
      const cover = $first.find('img').attr('src');
      if (cover) $cover.attr('src',cover)
        state.currentYear = 'y2000'
        state.currentIndex = 0
    }
  })();


})