import React, { useState, useTransition } from 'react'

import { fetchProfileData } from './fakeApi'
import Settings from './Settings'
import ProfilePage from './ProfilePage'
import { AppWrapper, Button, DelayedLoader } from './styled'

function getNextId(id) {
  return id === 4 ? 0 : id + 1
}

function App() {
  const [isSlow3G, setIsSlow3G] = useState(false)
  const [isLoaderDelayed, setIsLoaderDelayed] = useState(false)
  const [shouldUseDeffered, setShouldUseDeffered] = useState(false)
  const [shouldUseTransition, setShouldUseTransition] = useState(true)
  const [userNameTimeout, setUserNameTimeout] = useState(2000)
  const [userFactsTimeout, setUserFactsTimeout] = useState(2000)
  const fetchProfileDataWith3G = fetchProfileData({
    isSlow3G,
    userNameTimeout,
    userFactsTimeout,
  })
  const [resource, setResource] = useState(fetchProfileDataWith3G(0))

  const [startTransition, isPending] = useTransition({
    timeoutMs: 5000,
  })

  const nextUserId = getNextId(resource.userId)
  const nextClickHandler = shouldUseTransition
    ? () =>
        startTransition(() => {
          setResource(fetchProfileDataWith3G(nextUserId))
        })
    : () => setResource(fetchProfileDataWith3G(nextUserId))

  return (
    <AppWrapper>
      <Settings
        isSlow3G={isSlow3G}
        setIsSlow3G={setIsSlow3G}
        isLoaderDelayed={isLoaderDelayed}
        setIsLoaderDelayed={setIsLoaderDelayed}
        shouldUseDeffered={shouldUseDeffered}
        setShouldUseDeffered={setShouldUseDeffered}
        shouldUseTransition={shouldUseTransition}
        setShouldUseTransition={setShouldUseTransition}
        userNameTimeout={userNameTimeout}
        setUserNameTimeout={setUserNameTimeout}
        userFactsTimeout={userFactsTimeout}
        setUserFactsTimeout={setUserFactsTimeout}
      />

      <Button disabled={isPending && !isLoaderDelayed} onClick={nextClickHandler}>
        Next
      </Button>

      {isPending ? (
        isLoaderDelayed ? (
          <DelayedLoader> Delayed Loader...</DelayedLoader>
        ) : (
          ' Loading...'
        )
      ) : null}
      <ProfilePage resource={resource} shouldUseDeffered={shouldUseDeffered} />
    </AppWrapper>
  )
}

export default App
