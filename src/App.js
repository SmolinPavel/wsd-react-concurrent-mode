import React, { useState, useTransition } from 'react'

import { fetchProfileData } from './fakeApi'
import Settings from './Settings'
import ProfilePage from './ProfilePage'
import { AppWrapper, Button } from './styled'

function getNextId(id) {
  return id === 4 ? 0 : id + 1
}

function App() {
  const [isSlow3G, setIsSlow3G] = useState(false)
  const [shouldUseDeffered, setShouldUseDeffered] = useState(false)
  const fetchProfileDataWith3G = fetchProfileData(isSlow3G)
  const [resource, setResource] = useState(fetchProfileDataWith3G(0))
  const [startTransition, isPending] = useTransition({
    timeoutMs: 12000,
  })
  return (
    <AppWrapper>
      <Settings
        isSlow3G={isSlow3G}
        setIsSlow3G={setIsSlow3G}
        shouldUseDeffered={shouldUseDeffered}
        setShouldUseDeffered={setShouldUseDeffered}
      />
      <Button
        disabled={isPending}
        onClick={() => {
          startTransition(() => {
            const nextUserId = getNextId(resource.userId)
            setResource(fetchProfileDataWith3G(nextUserId))
          })
        }}
      >
        Next
      </Button>
      {isPending ? ' Loading...' : null}
      <ProfilePage resource={resource} shouldUseDeffered={shouldUseDeffered} />
    </AppWrapper>
  )
}

export default App
