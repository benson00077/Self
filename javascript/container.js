// TODO: tempalte content to be revised


let json_source_state = { state: 'json_source' }
let json_source = '../json/resumeData.json' // 設定按鈕改變 source?
let json_source2 = '../json/resumeData2.json'


// ---Resume json switcher---///
const resume_switcher = document.querySelector("#resume-switcher");
resume_switcher.addEventListener("click", () => {
    switch (json_source_state.state) {
        case 'json_source':
            json_source_state.state = 'json_source2'
            jsonImporter(json_source2)
            break
        case 'json_source2':
            json_source_state.state = 'json_source'
            jsonImporter(json_source)
            break 
        default:
            console.log('err')
    }
})


// init fetch json
jsonImporter(json_source);



// fetch json data
function jsonImporter(json_src) {
    fetch(json_src)
        .then(response => response.json())
        .then(data => {
            render_container(data)
        })
        .catch(err => console.log(error));
}


// render UI & main content template according to json data input
const render_container = (data) => {
    document.querySelector(".container").innerHTML= 
    `
    <div class="about" id="about">
<!-- <h2>About me</h2> -->
<div class="about-container">
    <img src="./asset/bensontuan.png" alt="bensonTuan">
    <div class="about-column">
        <div>
            <h3>${data.about.name.title}段秉燊 Benson Tuan</h3>
            <ul>
                <li>${data.about.name.description1}</li>
                <li>${data.about.name.description2}</li>
                <li>${data.about.name.description3}</li>
            </ul>
        </div>

        <div>
            <h3>${data.about.bio.title}</h3>
            <ul>
                <li>${data.about.bio.birth}</li>
                <li>${data.about.bio.email}</li>
                <li>${data.about.bio.phone}</li>
            </ul>
        </div>
    </div>
</div>
</div>

<div class="skills" id="skills">
<h2>${data.skills.title}</h2>
<div class="skills-column">
    <ul>
        <h3>${data.skills.content[0].catagory}</h3>
        <li>${data.skills.content[0].list[0]}</li>
        <li>${data.skills.content[0].list[1]}</li>
        <li>${data.skills.content[0].list[2]}</li>
    </ul>
    <ul>
        <h3>${data.skills.content[1].catagory}</h3>
        <li>${data.skills.content[1].list[0]}</li>
        <li>${data.skills.content[1].list[1]}</li>
        <li>${data.skills.content[1].list[2]}</li>
        <li>${data.skills.content[1].list[3]}</li>
    </ul>
    <ul>
        <h3>${data.skills.content[2].catagory}</h3>
        <li>${data.skills.content[2].list[0]}</li>
        <li>${data.skills.content[2].list[1]}</li>
        <li>${data.skills.content[2].list[2]}</li>
        <li>${data.skills.content[2].list[3]}</li>
    </ul>
</div>
</div>

<div class="experience" id="experience">
<h2>경력사항</h2>
<div class="experience-column">
    <div class="experience-timeline">
        <h3>해외영업 (PM) <span>2019.08 - 2020.08</span></h3>
        <div class="experience-timeline-body">
            <div>
                <p>@ Pioneer Elastomer (타이페이) <br>
                    탄성체와 이종재료간 결합된 부품이 시장점유율 1위인 부품공급자.</p>
            </div>
            <div>
                <ul>
                    <li>협업부서 커뮤니케이션: <br>개발팀, 생산팀, QA팀과 조달팀</li>
                    <li>거래처에게 보유제품 소개와 기술 설명 </li>
                    <li>FATP 컴플레인 처리 및 협조.</li>
                </ul>
            </div>
        </div>
    </div>
    <div class="experience-timeline">
        <h3>통·번역 / 업무보조 <span>2018.09 - 2019.01</span></h3>
        <div class="experience-timeline-body">
            <div>
                <p>@ (주)유알지 (양재역 알바)</p>
            </div>
            <div>
                <ul>
                    <li>마케팅 등 문서 번역</li>
                    <li>중국 거래처 미팅 통역</li>
                </ul>
            </div>
        </div>
    </div>
</div>
</div>

<div class="education" id="education">
<h2>학력사항</h2>
<div class="education-column">
    <div class="education-timeline">
        <h3>국립 정치대학교 한국어과<span>2014-2019</span></h3>
        <div class="education-timeline-body">
            <div>
                <p>통·번역 알바 경험</p>
            </div>
            <div>
                <ul>
                    <li>동안동 농협 마케팅 행사 담당 통역·창구</li>
                    <li>대만 관광국 설문조사 알바</li>
                    <li>K-beauty 박람회 통역</li>
                </ul>
            </div>
        </div>
    </div>
    <div class="education-timeline">
        <h3>서울 건국대학교 교환학생 <span>2018-2019</span></h3>
        <div class="education-timeline-body">
            <div>
                <p>서울 양재역 인근 화장품 회사 알바</p>
            </div>
        </div>
    </div>
</div>
</div>
<div class="portfolio" id="portfolio">
<h2>지원동기</h2>
<div class="portfolio-column">
    <p>&ensp;&ensp;저는 段秉燊(벤슨)이라고 합니다. 대만 국립정치대학교 한국어과를 졸업했습니다.
        대만인으로서 번체자가 원어민 수준이며 번체자-한국어 통·번역 경험도 많습니다. </p>
    <p>&ensp;&ensp;제가 지원한 직무(韓文專員)를 해낼 수 있다고 생각한 이유는 다음과 같이 네 가지로 설명할 수 있습니다.</p>
    <h4> 1. 한국생활·문화 경험 </h4>
    <ul>
        <li>한국어 국문학과 출신. 토픽 (한국어능력시험) 6급을 가지고 있습니다.<br><span class="highlight">(듣기, 읽기 각 100점 만점에
                98점)</span> <a href="#reference-topik">[→ 참고]</a></li>
        <li>서울 건국대학교 교환학생으로 1년 동안 지냈습니다. </li>
        <li>교환학생 시절 5개월간 화장품 회사에서 알바로 통·번역 업무를 수행했습니다.</li>
        <li>기타 통/번역 알바 경험 : K-beauty 박람회 통역, 대만 관광국 설문, 동안동 농협 마케팅 행사 담당자, 등 다양한 업무를 통해서 통·번역 경험을 쌓았습니다.
    </ul>

    <h4>2. 한국 관련 업무 경험 </h4>
    <p>&ensp;&ensp;B2B 해외영업 (PM) 1년 정규직 경험이 있고 아래와 같은 업무를 수행하였습니다.</p>
    <ul>
        <li><span class="highlight">해외사업장(@중국), 브랜드사(@한국)와의 소통 창구 담당.</span></li>
        <li>FATP (제품 조립 사업장)(@베트남) 컴플레인 처리 및 협조.</li>
        <li>한국 고객의 신제품 개발 프로젝트 관리업무를 담당.</li>
    </ul>

    <h4>3. 컴퓨터·코딩 기술에 관심 </h4>
    <p> &ensp;&ensp;담당업무 내용은 기술 도큐멘테이션 통·번역으로 나왔는데 통·번역할 영역에 따라 어려울 수도 있으니 연관 경험과 전문지식을 어느정도 갖춰야 잘할수있다고
        생각합니다.</p>
    <p> &ensp;&ensp;저는 컴퓨터·코딩에 관심을 갖고 독학으로 front-end 기술과 python을 배워서 직접 써봤습니다. API 도큐멘테이션도 읽어봤고 접속도 해봤습니다.
        <a href="#reference">[→ 프로젝트 참고]</a>
        <br>
        게임회사 이용하는 프로그래밍 언어는 다를 수도 있겠지만 기본적인 <span class="highlight">프로그래밍 경험 있으니 통·번역에 필요한 지식을 금방 숙지할 자신
            있습니다.</span>
    </p>
    <h4>4. 마지막으로는 게임 애호자입니다 </h4>
    <p>
        <span class="text-muted">&ensp;&ensp;크레이지 아케이드, 메이플스토리(대만 서버, 한국 서버), 란 온라인, 하스스톤</span>, 등의 경험이 있고,
        현재는
        <span class="text-muted">리그 오브 레전드, 패스 오브 엑자일, 시드 마이어의 문명VI, 스위치(동물의 숲, 젤다의 전설)</span>를 즐겨하고 있습니다.
        제가 게임을 할 때 커뮤니티의 글을 챙겨보는 스타일이어서 게임 META, 밸런스, 유저들의 불만 사항까지 빨리 파악하는 편입니다.
    </p>

    <p>&ensp;&ensp;초등학교 시절부터 <span class="text-muted">디아블로 2, 메이플스토리</span> 등 사냥 게임에 빠진 기억이 있습니다. 저는 <span
            class="highlight">리니지, 아이온</span> 등을 직접 해 본 적은 없지만, 아시아에 영향력이 큰 명작이라는 것을 익히
        들었습니다.</p>

    <p><br></p>
    <p>&ensp;&ensp;이러한 저의 업무 특성과 귀사의 업무가 잘 맞는다고 판단했습니다.<br>
        &ensp;&ensp;또한 저는 통·번역 절대로 문자 그대로 옮기는 기술만이 아니라 당사자 심정까지 알고 챙기는 직무라고 생각합니다. 창구도 상황 잘 파악해야 일이 잘 된다고
        생가합니다. <br>
        &ensp;&ensp;본 업무를 통해서 <span class="highlight">제가 가진 한국어 통·번역/창구/프로그래밍 지식과 경험을 활용하여 개발자/경영자의 심정을 대변하고
            싶다는 생각</span>으로 귀사에 입사지원을 하게 되엇습니다. 감사합니다.
    </p>
</div>
</div>

<div class="reference" id="reference">
<h2>참고자료</h2>
<div class="reference-columns">
    <div class="reference-column">
        <div class="reference-column-img-section">
            <a href="https://kosub.herokuapp.com/" target="_blank">
                <img class="reference-column-img" src="./asset/kosub.png" alt="kosub">
            </a>
        </div>
        <div class="reference-column-body">
            <h3>개인 project<br>
                한국드라마 대사로 한국어 배우는 곳</h3>
            <div class="text-muted">
                <p>Python + PostgreSQL API 접속하여 React.js로 만든 SPA.</p>
            </div>
            <div>
                <p>한국어 동사·형용사 단어 검색어로 나온 한·중·영어 드라마대사 검색결과.<br>
                    한국어 공부 / 번역 연구.</p>
            </div>
        </div>
    </div>

    <div class="reference-column">
        <div class="reference-column-img-section">
            <a href="https://github.com/benson00077/Self/blob/main/asset/nccu.png" target="_blank">
                <img class="reference-column-img" src="./asset/nccu.png" alt="nccu">
            </a>
        </div>
        <div class="reference-column-body">
            <h3>정치대하교 졸업증명서</h3>
            
        </div>
    </div>

    <div class="reference-column" id="reference-topik">
        <div class="reference-column-img-section">
            <a href="https://github.com/benson00077/Self/blob/main/asset/topik2019.png" target="_blank">
                <img class="reference-column-img" src="./asset/topik2019.png" alt="topik2019">
            </a>
        </div>
        <div class="reference-column-body">
            <h3>토픽 성적표</h3>
            
        </div>
    </div>
</div>
</div>

    ` 
}