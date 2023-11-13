import * as yup from 'yup'

const valueIsNotEmpty = (value) => value?.trim()

export const schema = yup.object().shape({
   name: yup
      .string()
      .required('Введите имя.')
      .test('check-name-is-not-blank', 'Имя обязательное поле', (value) =>
         value.trim()
      )
      .min(2, 'Имя должно содержать больше двух букв.')
      .test(
         'check-name-to-include-digits',
         'Имя не должно содержать символы.',
         (value) => /^[\p{L}\s]+$/u.test(value)
      ),
   surname: yup
      .string()
      .required('Введите фамилию.')
      .test('check-name-is-not-blank', 'Фамилия обязательное поле', (value) =>
         value.trim()
      )
      .min(2, 'Фамилия должна содержать больше двух букв.')
      .test(
         'check-surname-to-include-digits',
         'Фамилия не должна содержать символы.',
         (value) => /^[\p{L}\s]+$/u.test(value)
      ),
   email: yup
      .string()
      .required('Введите электронную почту.')
      .test('check-the-main-symbol: @', 'Введите @', (value) =>
         value.includes('@')
      )
      .test(
         'length',
         'Почта слишком длинная',
         (value) => valueIsNotEmpty(value) && value.length <= 255
      )
      .test(
         'local-part-dot-start',
         'Имя пользователя не может начинаться с точки.',
         (value) => !value?.split('@')[0]?.startsWith('.')
      )
      .test(
         'local-part-dot-end',
         'Имя пользователя не может заканчиваться точкой.',
         (value) => !value?.split('@')[0]?.endsWith('.')
      )
      .test(
         'local-part-length',
         'Имя пользователя не может содержать больше 64 символов.',
         (value) => valueIsNotEmpty(value) && value?.length <= 64
      )
      .test(
         'local-part-includes-queue-dot',
         'Имя пользователя не может содержать двух точек последовательно.',
         (value) => !value?.split('@')[0].includes('..')
      )
      .test(
         'domain-before-dot-start-with',
         'Домейн не может начинаться с точки.',
         (value) => !value?.split('@')[1]?.startsWith('.')
      )
      .test(
         'domain-before-dot-end-with',
         'Домейн не может заканчиваться точкой.',
         (value) => !value?.split('@')[1]?.endsWith('.')
      )
      .test(
         'domain-after-@',
         'После символа @ должно быть что-то написано.',
         (value) => valueIsNotEmpty(value.split('@')[1])
      ),
   phoneNumber: yup
      .string()
      .nullable()
      .notRequired()
      .when({
         is: (value) => value?.trim().length,
         then: (rule) =>
            rule
               .trim()
               .test(
                  'check-start-code',
                  'Телефон номера должен начинаться +996',
                  (value) => value.startsWith('+996')
               )
               .test(
                  'check-numbers-and-plus',
                  'Номер должен содержать только один плюс в начале и цифры',
                  (value) => /^\+[0-9]+$/.test(value)
               )
               .test(
                  'check-length',
                  'Длина номера телефона должна быть равна 13',
                  (value) => value.length === 13
               ),
      }),
   facebookLink: yup
      .string()
      .nullable()
      .notRequired()
      .when({
         is: (value) => value?.trim().length,
         then: (rule) =>
            rule.test(
               'check-facebook-url',
               'Введите ссылку от facebook-ка.',
               (value) => /^https:\/\/www\.facebook\.com\/.*/.test(value)
            ),
      }),
   instagramLink: yup
      .string()
      .notRequired()
      .when({
         is: (value) => value?.trim().length,
         then: (rule) =>
            rule.test(
               'check-instagram-url',
               'Введите ссылку от instagram-а.',
               (value) => /^https:\/\/www\.instagram\.com\/.*/.test(value)
            ),
      }),
   vkLink: yup
      .string()
      .notRequired()
      .when({
         is: (value) => value?.trim().length,
         then: (rule) =>
            rule.test('check-vk-url', 'Введите ссылку от vk-а.', (value) =>
               /^https:\/\/vk\.com\//.test(value)
            ),
      }),
   telegramLink: yup
      .string()
      .notRequired()
      .when({
         is: (value) => value?.trim().length,
         then: (rule) =>
            rule.test(
               'check-telegram-url',
               'Введите ссылку от telegram-а.',
               (value) => /^https:\/\/t\.me\//.test(value)
            ),
      }),
})
