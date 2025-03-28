document.querySelectorAll('.page-content').forEach(page => {
    page.addEventListener('click', (e) => {
        // الحصول على موقع الضغط على الصورة
        const pageRect = page.getBoundingClientRect();
        const clickX = e.clientX;

        // إذا تم الضغط على الجهة اليمنى، تقلب الصفحة للأمام
        if (clickX > pageRect.left + pageRect.width / 2) {
            page.parentElement.classList.add('flipped'); // اقلب الصفحة للأمام
        } else {
            page.parentElement.classList.remove('flipped'); // ارجع الصفحة للخلف
        }
    });
});






document.addEventListener("DOMContentLoaded", function() {
    // الكود الخاص بإخفاء الدخلة
    setTimeout(() => {
        document.querySelector(".overlay").style.display = "none"; // ⛔ إخفاء الدخلة

        let bookContainer = document.querySelector(".container");
        bookContainer.style.display = "flex"; // ✅ إظهار الكتاب
        setTimeout(() => {
            bookContainer.style.opacity = "1"; // ✅ جعله يظهر تدريجيًا
        }, 50); // تأخير بسيط عشان تأثير الفيد إن يشتغل
    }, 2500); // مدة الأنيميشن بتاع الفيد أوت

    // إنشاء القلوب المتحركة
    setInterval(createHeart, 200); // يولد قلب جديد كل 200 ملي ثانية

    function createHeart() {
        let heart = document.createElement('div');
        heart.classList.add('heart');
        heart.innerText = '💖'; // إضافة شكل القلب

        // توليد موقع عشوائي لظهور القلب
        let x = Math.random() * window.innerWidth;
        let y = Math.random() * window.innerHeight;

        heart.style.left = `${x}px`;
        heart.style.top = `${y}px`;

        document.querySelector('.hearts-container').appendChild(heart);

        // إزالة القلب بعد الانتهاء من الحركة
        setTimeout(() => {
            heart.remove();
        }, 5000); // القلب يختفي بعد 5 ثواني
    }
});


