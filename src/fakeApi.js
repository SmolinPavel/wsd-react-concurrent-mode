export function fetchProfileData({
  isSlow3G,
  userNameTimeout,
  userFactsTimeout,
}) {
  return (userId) => {
    let userPromise = fetchUser({ isSlow3G, timeout: userNameTimeout })(userId)
    let postsPromise = fetchPosts({ isSlow3G, timeout: userFactsTimeout })(userId)
    return {
      userId,
      user: wrapPromise(userPromise),
      posts: wrapPromise(postsPromise),
    }
  }
}

// Suspense integrations like Relay implement
// a contract like this to integrate with React.
// Real implementations can be significantly more complex.
// Don't copy-paste this into your project!
function wrapPromise(promise) {
  let status = 'pending'
  let result
  let suspender = promise.then(
    (r) => {
      status = 'success'
      result = r
    },
    (e) => {
      status = 'error'
      result = e
    }
  )
  return {
    read() {
      if (status === 'pending') {
        throw suspender
      } else if (status === 'error') {
        throw result
      } else if (status === 'success') {
        return result
      }
    },
  }
}

export function fetchUser({ isSlow3G, timeout }) {
  return (userId) => {
    return new Promise((resolve) => {
      setTimeout(
        () => {
          switch (userId) {
            case 0:
              resolve({
                name: 'Юлия Бухвалова',
              })
              break
            case 1:
              resolve({
                name: 'Никита Дубко',
              })
              break
            case 2:
              resolve({
                name: 'Валентин Гиль',
              })
              break
            case 3:
              resolve({
                name: 'Михаил Иванкив',
              })
              break
            case 4:
              resolve({
                name: 'Вадим Макеев',
              })
              break
            default:
              throw Error('Unknown user.')
          }
        },
        isSlow3G ? timeout*8 : timeout
      )
    })
  }
}

export function fetchPosts({ isSlow3G, timeout }) {
  return (userId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        switch (userId) {
          case 0:
            resolve([
              {
                id: 0,
                text: 'Разработчица в LiveJournal',
              },
              {
                id: 1,
                text: 'Автор блога Про CSS',
              },
              {
                id: 2,
                text:
                  'Любит экспериментировать, открывать новое в SVG и создавать инструменты',
              },
            ])
            break
          case 1:
            resolve([
              {
                id: 0,
                text: 'Разработчик интерфейсов в Яндекс',
              },
              {
                id: 1,
                text: 'Доброжелюбный бородач',
              },
              {
                id: 2,
                text:
                  'Организатор митапов MinskCSS и MinskJS и международной конференции CSS-Minsk-JS',
              },
            ])
            break
          case 2:
            resolve([
              {
                id: 0,
                text: 'Энтузиаст JAMstack',
              },
              {
                id: 1,
                text: 'Фронтенд-разработчик из Минска',
              },
              {
                id: 2,
                text: 'Более известен как Vally Pepyako',
              },
            ])
            break
          case 3:
            resolve([
              {
                id: 0,
                text: 'Читает лекции и бесплатные курсы по веб-разработке',
              },
              {
                id: 1,
                text: 'Старается сделать что-то полезное',
              },
              {
                id: 2,
                text: 'Вредных привычек нет',
              },
            ])
            break
          case 4:
            resolve([
              {
                id: 0,
                text: 'Веб-евангелист в HTML Academy',
              },
              {
                id: 1,
                text: 'Основатель сообщества «Веб-стандарты»',
              },
              {
                id: 2,
                text: 'Автор движка для презентаций Shower',
              },
            ])
            break
          default:
            throw Error('Unknown user.')
        }
      }, isSlow3G ? timeout*8 : timeout)
    })
  }
}
