document.addEventListener("DOMContentLoaded", function () {
    const slider = document.getElementById("slider");

    // قائمة الصور
    const images = [
        "img/-uzbo4p.jpg",
        "img/٢٠٢٥٠٣١٠_٢٣٢٣١٧.jpg",
        "img/7f7665d9-225f-43be-a090-afef30668ee1.png",
        "img/Picsart_25-03-09_23-27-54-819.jpg",
        "img/hloh.jpg",
        "img/ei_1741543415357-removebg-preview (2).png",
        "img/Kkk.jpg",
        "img/Picsart_25-03-09_19-18-25-263.jpg",
        "img/Screenshot_٢٠٢٥٠٣٠٩_٢١١٢٠١_Video Player.jpg",
    ];

    // تكرار الصور مرتين لتجنب الفراغ
    images.concat(images).forEach(src => {
        let img = document.createElement("img");
        img.src = src;
        slider.appendChild(img);
    });

    // تحريك الشريط تلقائيًا
    let scrollAmount = 0;
    function moveSlider() {
        scrollAmount += 1; // تحديد سرعة الحركة
        if (scrollAmount >= slider.scrollWidth / 2) {
            scrollAmount = 0; // إعادة الحركة من البداية
        }
        slider.style.transform = `translateX(-${scrollAmount}px)`;
        requestAnimationFrame(moveSlider);
    }

    moveSlider(); // تشغيل التحريك عند تحميل الصفحة
});

