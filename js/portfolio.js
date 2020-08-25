let constructProject = (p) => {
    let buttons_html = "";
    p.buttons.forEach(b => {
        buttons_html += `<a target="_blank" href="${b.link}" class="btn portfolio-button">${b.title}</a>`
    })

    // <div class="col-sm-3 project-image" style="background-image: url('${p.image}'); background-size: 100%; background-repeat: no-repeat" />
    let tech_html = "";
    if(p.tech) p.tech.forEach(t => {
        tech_html += `<img src="resources/tech_logos/${t}.png" />`
    })
    return `<div class="project-container col-sm-6">
                <div class="project">
                    <div class="img-container" id="${p.id}">
                        <div class="row">
                            <img class="col-sm-3 project-image" src="${p.image}" />
                            <div class="col-sm project-title">${p.title}</div>
                        </div>
                    </div>
                    <div class="text-container">
                        ${p.text}
                    </div>
                    <div class="button-container">
                        ${buttons_html}
                    </div>
                    ${tech_html ? `<div class="tech-container">
                        ${tech_html}
                    </div>` : ""}
                </div>
            </div>`
}

let constructPortfolioSection = (s) => {
    let projects_html = "";
    s.projects.forEach(p => {
        projects_html += constructProject(p)
    })
    return `<div class="portfolio-section">
                <div class="title">
                    <h3>${s.sectionName}</h3>
                </div>
                <div class="row display-flex">
                ${projects_html}
                </div>
            </div>`

}

let constructPortfolio = (sections) => {
    let html = "";
    sections.forEach(s => {
        html += constructPortfolioSection(s);
    })
    return html;
}

$(document).ready(function() {

    $.getJSON("/data/portfolio.json", function(json){
        console.log(json);
        console.log(constructPortfolio(json))
        $("#portfolio-placeholder").html(constructPortfolio(json));
    })
})
