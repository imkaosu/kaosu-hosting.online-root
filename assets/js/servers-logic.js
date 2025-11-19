//      made with ❤️ by
//          __                              _____
//         / /______ _____  _______  __   _|__  /
//        / //_/ __ `/ __ \/ ___/ / / /  (_)/_ < 
//       / ,< / /_/ / /_/ (__  ) /_/ /  _ ___/ / 
//      /_/|_|\__,_/\____/____/\__,_/  (_)____/  

//      note..
//          - this code/file is protected by basic intellectual property rights, if found duplicated/reproduced without permission, legal action may occur.
//          - this was made for "CHAOS (kaosu) Hosting", only authorized for use on any subdomain/path associated with "kaosu.xyz" and "kaosu-hosting.online"

if (location.pathname.includes('servers.html')) {
    document.body.innerHTML = `
    <div class="stars"></div>
    <div class="shooting-star"></div><div class="shooting-star"></div>
    <div class="shooting-star"></div><div class="shooting-star"></div>
    <div class="shooting-star"></div>

    <nav id="navbar" class="scrolled">
        <div class="logo">カオス</div>
        <div class="nav-links"><a href="index.html">← Home</a></div>
    </nav>

    <section style="padding-top:180px;min-height:100vh">
        <div id="server-content"></div>
    </section>`;

    const params = new URLSearchParams(location.search);
    const type = params.get('type');
    const id = params.get('id');

    const servers = {
    beammp: [
        { id:1, name:"#1 ~ East Coast USA", players:"12 player cap", location:"New Jersey, USA", cars:"2", active:"Yes", ip:"69.164.249.87", port:"40000", img:"https://kaosu-hosting.online/assets/img/beammp-cover.png" },
    ],

    };

    const content = document.getElementById('server-content');

    if (type && id && servers[type] && servers[type][id-1]) {
    const s = servers[type][id-1];
    content.innerHTML = `
        <div style="max-width:800px;margin:0 auto;text-align:center" data-aos="fade-up">
        <h2>${s.name}</h2>
        <img src="${s.img}" style="width:140px;height:140px;border-radius:20px;margin:2rem 0;object-fit:cover;">
        <p><strong>Game:</strong> BeamMP</p>
        <p><strong>Players:</strong> ${s.players}</p>
        <p><strong>Location:</strong> ${s.location}</p>
        <p><strong>Car Limit (per player):</strong> ${s.cars}</p>
        <p><strong>Active:</strong> ${s.active}</p>
        <p><strong>IP (direct connect):</strong> ${s.ip}</p>
        <p><strong>Port (direct connect):</strong> ${s.port}</p>
        <br><a href="servers.html"><button class="btn"><span>Back to List</span></button></a>
        </div>`;
    } else {
    let html = `<h2 data-aos="fade-up">Active Servers</h2><div class="server-list">`;
    Object.keys(servers).forEach(game => {
        servers[game].forEach(s => {
        html += `<div class="server-card" onclick="location.href='servers.html?type=${game}&id=${s.id}'">
            <h3>${s.name}</h3>
            <p>${s.players} • ${s.location}</p>
        </div>`;
        });
    });
    html += `</div>`;
    content.innerHTML = html;
    }
}