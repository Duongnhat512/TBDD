(function () {
    const header = document.querySelector('h1'); // Chọn thẻ h1
    document.body.addEventListener('click', function () {
        header.style.color = 'blue';
    }); // Khi click vào bất kỳ đâu trên trang thì màu của thẻ h1 sẽ chuyển sang màu xanh
})();

