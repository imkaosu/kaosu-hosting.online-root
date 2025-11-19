//      made with ❤️ by
//          __                              _____
//         / /______ _____  _______  __   _|__  /
//        / //_/ __ `/ __ \/ ___/ / / /  (_)/_ < 
//       / ,< / /_/ / /_/ (__  ) /_/ /  _ ___/ / 
//      /_/|_|\__,_/\____/____/\__,_/  (_)____/  

//      note..
//          - this code/file is protected by basic intellectual property rights, if found duplicated/reproduced without permission, legal action may occur.
//          - this was made for "CHAOS (kaosu) Hosting", only authorized for use on any subdomain/path associated with "kaosu.xyz" and "kaosu-hosting.online"

window.addEventListener('scroll', () => {
    document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 60);
});

document.querySelectorAll('.tile').forEach(tile => {
tile.addEventListener('mousemove', e => {
    const rect = tile.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    tile.style.setProperty('--mx', x + 'px');
    tile.style.setProperty('--my', y + 'px');
  });
});