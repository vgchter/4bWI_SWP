loadDataFromAPI();

document.getElementById("btnLoad").addEventListener("click", function () {
    loadDataFromAPI();
})

function loadDataFromAPI() {
    fetch('https://67b89061699a8a7baef48561.mockapi.io/todos')
        .then(response => response.json())
        .then(json => {
            console.log(json);
            let hmtl = [];

            json.forEach((todo) => {
                hmtl.push("<div>" + todo.title + "</div><img width='100px' src='" + todo.image + "?id=" + Math.random() + "'/><div>-------------------</div></div>");
            });

            document.getElementById("content").innerHTML = hmtl.join("");
        })

}
