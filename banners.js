const banners = [

    { image: "Banner01.png", series: "Isekai Tensei: Recruited to Another World" },
    
];


// 🔥 ORDEN ALFABÉTICO: primero serie, luego imagen
banners.sort((a, b) => {

    if (a.series !== b.series) {
        return a.series.localeCompare(b.series);
    }

    return a.image.localeCompare(b.image);

});


// 📦 RENDER EN PÁGINA
const gallery = document.querySelector(".banner-gallery");

banners.forEach(banner => {

    const item = document.createElement("div");
    item.classList.add("banner-item");

    item.innerHTML = `
        <img src="Assets/Banners/${banner.image}" alt="${banner.series}">
    `;

    gallery.appendChild(item);

});
