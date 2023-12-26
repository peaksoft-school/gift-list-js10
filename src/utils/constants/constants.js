const countries = [
   'Кыргызстан',
   'Азербайджан',
   'Россия',
   'Казахстан',
   'Узбекистан',
   'Таджикистан',
]

const englishCountries = {
   KYRGYZSTAN: 'Кыргызстан',
   AZERBAIJAN: 'Азербайджан',
   RUSSIA: 'Россия',
   KAZAKHSTAN: 'Казахстан',
   UZBEKISTAN: 'Узбекистан',
   TAJIKISTAN: 'Таджикистан',
}

const russianCountries = {
   Азербайджан: 'AZERBAIJAN',
   Кыргызстан: 'KYRGYZSTAN',
   Россия: 'RUSSIA',
   Казахстан: 'KAZAKHSTAN',
   Узбекистан: 'UZBEKISTAN',
   Таджикистан: 'TAJIKISTAN',
}

const shoeSizes = [35, 36, 37, 38, 39, 40, 41, 42, 43, 44]

const clothingSizes = ['XXS', 'XS', 'S', 'M', 'L', 'XXL', 'XL', 'XXXL']

const categoriesWithEnglishPropertiesName = {
   ELECTRONIC: 'Электроника',
   CLOTHING: 'Одежда',
   SCHOOL: 'Школьные',
   HOUSE_AND_GARDEN: 'Дом и сад',
   SHOE: 'Обувь',
   TRANSPORT: 'Транспорт',
}

const categoriesWithRussianPropertiesName = {
   Электроника: 'ELECTRONIC',
   Одежда: 'CLOTHING',
   Школьные: 'SCHOOL',
   'Дом и сад': 'HOUSE_AND_GARDEN',
   Обувь: 'SHOE',
   Транспорт: 'TRANSPORT',
}

const subCategoriesWithEnglishPropertiesName = {
   SMARTPHONES_AND_PHONES: 'Смартфоны и телефоны',
   AUDIO_EQUIPMENT: 'Аудиотехника',
   PHOTO_AND_VIDEO_CAMERA: 'Фото и видеокамеры',
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

const subCategoriesWithRussianPropertiesName = {
   'Смартфоны и телефоны': 'SMARTPHONES_AND_PHONES',
   Аудиотехника: 'AUDIO_EQUIPMENT',
   'Фото и видеокамеры': 'CAMERAS_AND_CAMCORDERS',
   Автоэлектроника: 'CAR_ELECTRONICS',
   'ТВ и видео': 'TV_AND_VIDEO',
   'Компьютеры, ноутбуки и планшеты': 'COMPUTERS_LAPTOPS_AND_TABLETS',
   'Носимая электроника (умные часы, браслеты)':
      'WEARABLE_ELECTRONICS_SMARTWATCHES_BRACELETS',
   'Аксессуары для смартфонов (чехлы, защитные пленки)':
      'SMARTPHONE_ACCESSORIES_CASES_SCREEN_PROTECTORS',
   'Игровые консоли и аксессуары': 'GAMING_CONSOLES_AND_ACCESSORIES',
   'Умные домашние устройства (умные лампы, термостаты)':
      'SMART_HOME_DEVICES_SMART_BULBS_THERMOSTATS',
   Мужская: 'MEN',
   Женская: 'WOMEN',
   Детская: 'KIDS',
   'Рюкзаки с разными дизайнами': 'BACKPACKS_WITH_DIFFERENT_DESIGNS',
   'Учебные пособия и учебники': 'TEXTBOOKS_AND_GUIDES',
   'Школьные принадлежности (ручки, карандаши)': 'SCHOOL_SUPPLIES_PENS_PENCILS',
   'Канцелярские товары для творчества (кисти, краски)':
      'ART_SUPPLIES_BRUSHES_PAINTS',
   'Декоративные элементы интерьера': 'DECORATIVE_INTERIOR_ELEMENTS',
   'Садовые инструменты и оборудование': 'GARDEN_TOOLS_AND_EQUIPMENT',
   'Постельные принадлежности': 'BEDDING',
   'Стройматериалы (кирпич, брусчатка)':
      'BUILDING_MATERIALS_BRICK_PAVING_STONE',
   'Мужская обувь': 'MEN_S_SHOES',
   'Женская обувь': 'WOMEN_S_SHOES',
   'Детская обувь': 'KIDS_SHOES',
   'Велосипеды и аксессуары': 'BICYCLES_AND_ACCESSORIES',
   'Запчасти и оборудование для автомобилей': 'CAR_PARTS_AND_EQUIPMENT',
   'Оборудование для мотоциклов': 'MOTORCYCLE_EQUIPMENT',
}

const conditionWithRussianPropertiesName = {
   'Б/У': 'USED',
   Новое: 'NEW',
}
const conditionWithEnglishPropertiesName = {
   USED: 'Б/У',
   NEW: 'Новое',
}

const clothingSizeEnum = {}

const shoeSizeObject = {
   THIRTY_FIVE: 35,
   THIRTY_SIX: 36,
   THIRTY_SEVEN: 37,
   THIRTY_EIGHT: 38,
   THIRTY_NINE: 39,
   FORTY: 40,
   FORTY_ONE: 41,
   FORTY_TWO: 42,
   FORTY_THREE: 43,
   FORTY_FOUR: 44,
}

const shoeSizeEnum = {
   35: 'THIRTY_FIVE',
   36: 'THIRTY_SIX',
   37: 'THIRTY_SEVEN',
   38: 'THIRTY_EIGHT',
   39: 'THIRTY_NINE',
   40: 'FORTY',
   41: 'FORTY_ONE',
   42: 'FORTY_TWO',
   43: 'FORTY_THREE',
   44: 'FORTY_FOUR',
}

const descriptionOfNotificationByStatus = {
   RESERVED: 'было забронировано',
   RESERVED_ANONYMOUSLY: 'было забронировано анонимно',
   REQUEST: 'отправил(-а) запрос к вам в друзья',
   BOOKED_CHARITY_ANONYMOUSLY: 'забронированная благотворительность анонимно',
   BOOKED_CHARITY: 'забронированная благотворительность',
   UNBOOKED_CHARITY: 'незабронированная благотворительность',
   BOOKED_WISH_ANONYMOUSLY: 'забронированное желание анонимно',
   BOOKED_WISH: 'забронированное желание',
   UNBOOKED_WISH: 'незабронированное желание',
   UNBOOKED: 'незабронировано',
   PENDING: 'ожидание',
   ADDED_CHARITY: 'добавленная благотворительность',
   ADDED_WISH: 'добавленное желание',
   COMPLAINT_CHARITY: 'жалоба благотворительности',
   COMPLAINT_WISH: 'жалоба желания',
}

export {
   countries,
   shoeSizes,
   clothingSizes,
   conditionWithEnglishPropertiesName,
   conditionWithRussianPropertiesName,
   categoriesWithEnglishPropertiesName,
   categoriesWithRussianPropertiesName,
   subCategoriesWithEnglishPropertiesName,
   subCategoriesWithRussianPropertiesName,
   shoeSizeObject,
   englishCountries,
   russianCountries,
   shoeSizeEnum,
   clothingSizeEnum,
   descriptionOfNotificationByStatus,
}
