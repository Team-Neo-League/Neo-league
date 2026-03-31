// pagination.js
document.addEventListener("DOMContentLoaded", function () {
    const teams = document.querySelectorAll("#teams .team-card");
    console.log("Équipes détectées:", teams.length); // debug

    const perPage = 5;
    let currentPage = 1;

    function changePage(page) {
        currentPage = page;

        const start = (page - 1) * perPage;
        const end = start + perPage;

        teams.forEach((team, index) => {
            team.style.display = (index >= start && index < end) ? "" : "none";
        });
    }

    window.changePage = changePage;

    changePage(1); // page 1 au chargement
});