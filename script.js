// Переключение вкладок
const tabLinks = document.querySelectorAll('.tab-link');
const tabContents = document.querySelectorAll('.tab-content');

tabLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();

    // Убираем активный класс у всех вкладок
    tabLinks.forEach(l => l.classList.remove('active'));
    tabContents.forEach(content => content.classList.remove('active'));

    // Добавляем активный класс текущей вкладке
    link.classList.add('active');
    const target = document.querySelector(link.getAttribute('href'));
    target.classList.add('active');
  });
});

// Изменение цвета фона при нажатии на кнопку
const button = document.getElementById('colorButton');
const body = document.body;
const colors = ['#FFA07A', '#e6f4f4', '#f4e6f4', '#e6e6f4'];


button.addEventListener('click', () => {
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  body.style.backgroundColor = randomColor;
});
