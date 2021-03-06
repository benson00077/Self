import profile from "../assets/bensontuan.png"; //webpack5
import kosub from "../assets/kosub.png";
import github from "../assets/Github-Mark-32px.png";

export class PortfolioFetchService {
  constructor() {
    this.ctnSwitchBtn = document.querySelector("#resume-switcher");
    this.state = "eng";
    this.srcs = {
      eng: "https://benson00077.github.io/Self_api/json/resumeData0428.json",
      zh: "https://benson00077.github.io/Self_api/json/resumeData0428_2.json",
    };
  }

  init() {
    this.jsonImporter(this.srcs.eng);
  }

  onClick(cb) {
    this.ctnSwitchBtn.addEventListener("click", cb);
  }

  jsonImporter(jsonUrl) {
    fetch(jsonUrl)
      .then((res) => res.json())
      .then((data) => {
        this.renderCtn(data);
      })
      .catch((err) => console.log(err));
  }

  src_handler(href, img_path, alt) {
    return `
      <a href=${href} target="_blank">
          <img class="reference-column-img" src=${img_path} alt=${alt}>
      </a>
      `;
  }

  renderCtn(data) {
    const about = document.querySelector("#about");
    const skills = document.querySelector("#skills");
    const experience = document.querySelector(
      "div.container > div.right-side-fixed > div#experience"
    );
    const education = document.querySelector(
      "div.container > div.right-side-fixed > div#education"
    );
    const portfolio = document.querySelector(
      "div.container > div.right-side-fixed > div#portfolio"
    );
    const reference = document.querySelector(
      "div.container > div.right-side-fixed > div#reference"
    );

    // <img src="./assets/bensontuan.png" alt="bensonTuan">
    about.innerHTML = `
    <!-- <h2>About me</h2> -->
    <div class="about-container">
        <img src="${profile}" alt="bensonTuan">
        <div class="about-column">
            <div>
                <h3>${data.about.name.title}</h3>
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
    </div>`;

    // skills.innerHTML = `
    // <h2>${data.skills.title}</h2>
    // <div class="skills-column">
    //     <ul>
    //         <h3>${data.skills.content[0].catagory}</h3>
    //         <li>${data.skills.content[0].list[0]}</li>
    //         <li>${data.skills.content[0].list[1]}</li>
    //         <li>${data.skills.content[0].list[2]}</li>
    //     </ul>
    //     <ul>
    //         <h3>${data.skills.content[1].catagory}</h3>
    //         <li>${data.skills.content[1].list[0]}</li>
    //         <li>${data.skills.content[1].list[1]}</li>
    //         <li>${data.skills.content[1].list[2]}</li>
    //         <li>${data.skills.content[1].list[3]}</li>
    //     </ul>
    //     <ul>
    //         <h3>${data.skills.content[2].catagory}</h3>
    //         <li>${data.skills.content[2].list[0]}</li>
    //         <li>${data.skills.content[2].list[1]}</li>
    //         <li>${data.skills.content[2].list[2]}</li>
    //         <li>${data.skills.content[2].list[3]}</li>
    //     </ul>
    // </div>
    // `

    experience.innerHTML = `
    <h2>${data.experience.title}</h2>
    <div class="experience-column">
        <div class="experience-timeline">
            <h3>${data.experience.content[0].job}<span>${data.experience.content[0].job_time}</span></h3>
            <div class="experience-timeline-body">
                <div>
                    <p>${data.experience.content[0].job_description}</p>
                </div>
                <div>
                    <ul>
                        <li>${data.experience.content[0].job_detail_list[0]}</li>
                        <li>${data.experience.content[0].job_detail_list[1]}</li>
                        <li>${data.experience.content[0].job_detail_list[2]}</li>
                        <li>${data.experience.content[0].job_detail_list[3]}</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="experience-timeline">
            <h3>${data.experience.content[1].job}<span>${data.experience.content[1].job_time}</span></h3>
            <div class="experience-timeline-body">
                <div>
                    <p>${data.experience.content[1].job_description}</p>
                </div>
                <div>
                    <ul>
                        <li>${data.experience.content[1].job_detail_list[0]}</li>
                        <li>${data.experience.content[1].job_detail_list[1]}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    `;

    education.innerHTML = `
    <h2>${data.education.title}</h2>
    <div class="education-column">
        <div class="education-timeline">
            <h3>${data.education.content[0].school}<span>${data.education.content[0].school_time}</span></h3>
            <div class="education-timeline-body">
                <div>
                    <p>${data.education.content[0].school_description}</p>
                </div>
                <div>
                    <ul>
                        <li>${data.education.content[0].school_detail_list[0]}</li>
                        <li>${data.education.content[0].school_detail_list[1]}</li>
                        <li>${data.education.content[0].school_detail_list[2]}</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="education-timeline">
            <h3>${data.education.content[1].school}<span>${data.education.content[1].school_time}</span></h3>
            <div class="education-timeline-body">
                <div>
                    <p>${data.education.content[1].school_description}</p>
                </div>
                <div>
                    <ul>
                        <li>${data.education.content[1].school_detail_list[0]}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>`;

    portfolio.innerHTML = `
      <h2>${data.portfolio.title}</h2>
      <div>Conetnet TBD</div>
      `;

    reference.innerHTML = `
    <h2>${data.reference.title}</h2>
    <div class="reference-columns">
        <div class="reference-column">
            <div class="reference-column-img-section" id="img-section">
                ${this.src_handler(
                  "https://benson00077.github.io/kosub_react/",
                  kosub,
                  "kosub"
                )}
            </div>
            <div class="reference-column-body">
                <h3>${data.reference.content[0].item}</h3>
                <div class="text-muted">
                    <p>${data.reference.content[0].item_note}</p>
                </div>
                <div>
                    <p>${data.reference.content[0].item_description}</p>
                </div>
            </div>
        </div>
    
        <div class="reference-column">
            <div class="reference-column-img-section">
                ${this.src_handler(
                  "https://github.com/benson00077/Self/blob/main/asset/nccu.png",
                  ".src/assets/nccu.png",
                  "nccu"
                )}
            </div>
            <div class="reference-column-body">
                <h3>${data.reference.content[1].item}</h3>
                <div class="text-muted">
                    <p>${data.reference.content[1].item_note}</p>
                </div>
                <div>
                    <p>${data.reference.content[1].item_description}</p>
                </div>
                
            </div>
        </div>
    
        <div class="reference-column" id="reference-topik">
            <div class="reference-column-img-section">
                ${this.src_handler(
                  "https://github.com/benson00077/Self/blob/main/asset/topik2019.png",
                  ".src/asset/topik2019.png",
                  "topik2019"
                )}
            </div>
            <div class="reference-column-body">
                <h3>${data.reference.content[2].item}</h3>
                <div class="text-muted">
                    <p>${data.reference.content[2].item_note}</p>
                </div>
                <div>
                    <p>${data.reference.content[2].item_description}</p>
                </div>
                
            </div>
        </div>

        <div class="reference-column">
          <div class="reference-column-img-section"> </div>
          <div class="reference-column-body">
              <h3>About this Resume </h3>
              <div class="text-muted">
                  <p>For more information, <br> Building logs & Trouble-shooting notes were uploaded on Github README</p>
              </div>
              <div class="github-img">
                  <a href="https://github.com/benson00077/Me_AppWorkS" target="_blank">
                      <img src=${github} alt="github">
                  </a>
              </div>
              <div>
                  <p><br></p>
              </div>
          </div>
        </div>  
    </div>
    `;
  }
}
