loadFootballTable();

function loadFootballTable() {
    fetch('https://api.openligadb.de/getbltable/bl1/2024')
        .then(response => response.json())
        .then(json => {
            console.log(json);
            let html = "<div id='table' class='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2'>";

            for (let i = 0; i < json.length; i++) {
                html += `<div class="border border-gray-400 rounded-md p-2 m-4 h-15 hover:cursor-pointer hover:bg-gray-200 flex shadow-lg items-center place-content-between" data-teamId="${json[i].teamInfoId}">${json[i].teamName}<img width="30px" src="${json[i].teamIconUrl}"/></div>`;
            }
            html += "</div>";
            document.getElementById("table").innerHTML = html;
        })

}

document.getElementById("table").addEventListener("click", (event) => {
    let selectedTeamId = event.target.getAttribute("data-teamId");
    console.log("selectedTeamId", selectedTeamId);
    getNextMatchForTeam(selectedTeamId);
})

function getNextMatchForTeam(teamId) {
    fetch(`https://api.openligadb.de/getnextmatchbyleagueteam/4741/${teamId}`)
        .then((response) => response.json())
        .then((json) => {
            console.log(json);
            let html = "<div id='nextMatch'>";
            html += `<div>${json.matchDateTime}<div>`
            html += `<div class="border border-gray-400 rounded-md"><img width="30px" src="${json.team1.teamIconUrl}"/>${json.team1.teamName} vs. ${json.team2.teamName}<img width="30px" src="${json.team2.teamIconUrl}"/><div>`;
            html += "</ div>";
            document.getElementById("nextMatch").innerHTML = html;
        });
}