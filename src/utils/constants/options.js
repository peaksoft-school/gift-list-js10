const selectOptions = [
   {
      name: 'Праздник',
      placeholder: 'Выберите праздник',
      labelName: 'holiday',
      options: ['День матери', 'День ', 'Новый год', 'Нооруз'],
   },
]

const stateOptions = ['Все', 'Б/У', 'Новое']

const category = [
   'Электроника',
   'Одежда',
   'Школа',
   'Дом и сад',
   'Обувь',
   'Транспорт',
]

const subcategories = {
   Электроника: [
      'Смартфоны и телефоны',
      'Аудиотехника',
      'Фото и видеокамеры',
      'Автоэлектроника',
      'ТВ и видео',
      `Компьютеры, ноутбуки и
   планшеты`,
   ],
   Одежда: ['Мужская', 'Женская', 'Детская'],
   Школа: [
      'Точилка и ластик',
      'Обложки для тетрадей и учебников',
      'Альбом для рисования',
      'Дневник',
   ],

   Обувь: ['Мужская обувь', 'Женская обувь', 'Детская обувь'],
   Транспорт: ['Грузовой транспорт', 'Пассажирский транспорт'],
}

export { selectOptions, stateOptions, category, subcategories }
