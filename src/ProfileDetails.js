import React from 'react'

import { Header } from './styled'

function ProfileDetails({ resource }) {
  const user = resource.user.read()
  return <Header>{user.name}</Header>
}

export default ProfileDetails
