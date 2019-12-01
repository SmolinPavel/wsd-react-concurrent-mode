import React, { Suspense, useDeferredValue } from 'react'

import ProfileDetails from './ProfileDetails'
import ProfileTimeline from './ProfileTimeline'

function ProfilePage({ resource, shouldUseDeffered }) {
  const deferredResource = useDeferredValue(resource, {
    timeoutMs: 3000,
  })
  return (
    <Suspense fallback={<h1>Loading profile...</h1>}>
      <ProfileDetails resource={resource} />
      <Suspense fallback={<h1>Loading posts...</h1>}>
        <ProfileTimeline
          resource={shouldUseDeffered ? deferredResource : resource}
          isStale={deferredResource !== resource}
        />
      </Suspense>
    </Suspense>
  )
}

export default ProfilePage
