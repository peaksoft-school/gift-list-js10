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
}

const shoeSizes = [35, 36, 37, 38, 39, 40, 41, 42, 43, 44]

const clothingSizes = ['XXS', 'XS', 'S', 'M', 'L', 'XXL', 'XL', 'XXXL']

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
   shoeSizeObject,
   englishCountries,
   russianCountries,
   shoeSizeEnum,
   clothingSizeEnum,
   descriptionOfNotificationByStatus,
}
