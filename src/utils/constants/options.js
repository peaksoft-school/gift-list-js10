const holidayOptions = [
   {
      name: 'Праздник',
      placeholder: 'Выберите праздник',
      labelName: 'holiday',
      options: ['День матери', 'День рождения ', 'Новый год', 'Нооруз'],
   },
]

const stateOptions = ['Б/У', 'Новое']

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
      'Носимая электроника (умные часы, браслеты)',
      'Аксессуары для смартфонов (чехлы, защитные пленки)',
      'Игровые консоли и аксессуары',
      'Умные домашние устройства (умные лампы, термостаты)',
   ],
   Одежда: ['Мужская', 'Женская', 'Детская'],
   Школа: [
      'Рюкзаки с разными дизайнами',
      'Учебные пособия и учебники',
      'Школьные принадлежности (ручки, карандаши)',
      'Канцелярские товары для творчества (кисти, краски)',
   ],
   'Дом и сад': [
      'Декоративные элементы интерьера',
      'Садовые инструменты и оборудование',
      'Постельные принадлежности',
      'Стройматериалы (кирпич, брусчатка)',
   ],
   Обувь: ['Мужская обувь', 'Женская обувь', 'Детская обувь', 'Кроссовки'],
   Транспорт: [
      'Велосипеды и аксессуары',
      'Запчасти и оборудование для автомобилей',
      'Оборудование для мотоциклов',
   ],
}

const categoriesWithEnglishPropertiesName = {
   ELECTRONIC: 'Электроника',
   CLOTHING: 'Одежда',
   SCHOOL: 'Школьные',
   HOUSE_AND_GARDEN: 'Дом и сад',
   SHOE: 'Обувь',
   TRANSPORT: 'Транспорт',
}

const subCategoriesWithEnglishPropertiesName = {
   SMARTPHONE: 'Смартфоны и телефоны',
   PHOTO_AND_VIDEO_CAMERA: 'Фото и видеокамеры',
   AUTO_ELECTRONICS: 'Автоэлектроника',
   COMPUTERS_AND_LAPTOP_TABLETS: 'Компьютеры, ноутбуки и планшеты',
   LAPTOP: 'Ноутбук',
   CAR: 'Машина',
   SMARTPHONES_AND_PHONES: 'Смартфоны и телефоны',
   AUDIO_EQUIPMENT: 'Аудиотехника',
   CAMERAS_AND_CAMCORDERS: 'Фото и видеокамеры',
   CAR_ELECTRONICS: 'Автоэлектроника',
   TV_AND_VIDEO: 'ТВ и видео',
   COMPUTERS_LAPTOPS_AND_TABLETS: 'Компьютеры, ноутбуки и планшеты',
   WEARABLE_ELECTRONICS_SMARTWATCHES_BRACELETS:
      'Носимая электроника (умные часы, браслеты)',
   SMARTPHONE_ACCESSORIES_CASES_SCREEN_PROTECTORS:
      'Аксессуары для смартфонов (чехлы, защитные пленки)',
   GAMING_CONSOLES_AND_ACCESSORIES: 'Игровые консоли и аксессуары',
   SMART_HOME_DEVICES_SMART_BULBS_THERMOSTATS:
      'Умные домашние устройства (умные лампы, термостаты)',
   MEN: 'Мужская',
   WOMEN: 'Женская',
   KIDS: 'Детская',
   BACKPACKS_WITH_DIFFERENT_DESIGNS: 'Рюкзаки с разными дизайнами',
   TEXTBOOKS_AND_GUIDES: 'Учебные пособия и учебники',
   SCHOOL_SUPPLIES_PENS_PENCILS: 'Школьные принадлежности (ручки, карандаши)',
   ART_SUPPLIES_BRUSHES_PAINTS:
      'Канцелярские товары для творчества (кисти, краски)',
   DECORATIVE_INTERIOR_ELEMENTS: 'Декоративные элементы интерьера',
   GARDEN_TOOLS_AND_EQUIPMENT: 'Садовые инструменты и оборудование',
   BEDDING: 'Постельные принадлежности',
   BUILDING_MATERIALS_BRICK_PAVING_STONE: 'Стройматериалы (кирпич, брусчатка)',
   MEN_S_SHOES: 'Мужская обувь',
   WOMEN_S_SHOES: 'Женская обувь',
   KIDS_SHOES: 'Детская обувь',
   BICYCLES_AND_ACCESSORIES: 'Велосипеды и аксессуары',
   CAR_PARTS_AND_EQUIPMENT: 'Запчасти и оборудование для автомобилей',
   MOTORCYCLE_EQUIPMENT: 'Оборудование для мотоциклов',
   CROSS: 'Кроссовки',
}

const complaintsWithEnglishPropertiesName = {
   CRUELTY_AND_SHOCKING_CONTENT: 'Жестокость и шокирующий контент',
   MANIFESTATION_OF_HATRED: 'Проявление ненависти',
   ILLEGAL_ACTIVITIES_OR_REGULATED_PRODUCTS:
      'Нелегальные действия или регламентированные товары',
   SPAM: 'Спам',
   CALLS_TO_VIOLENCE_DANGEROUS_ACTIONS: 'Призывы к насилию, опасные действия',
   SCENES_OF_A_PORNOGRAPHIC_NATURE: 'Сцены порнографического характера',
   OTHER: 'Прочее',
}

export {
   holidayOptions,
   stateOptions,
   category,
   subcategories,
   categoriesWithEnglishPropertiesName,
   subCategoriesWithEnglishPropertiesName,
   complaintsWithEnglishPropertiesName,
}
