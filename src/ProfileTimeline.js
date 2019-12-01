import React from 'react'

import { UnorderedList, UnorderedListItem } from './styled'

function ProfileTimeline({ isStale, resource }) {
  const posts = resource.posts.read()
  return (
    <UnorderedList>
      {posts.map((post) => (
        <UnorderedListItem key={post.id} isStale={isStale}>
          {post.text}
        </UnorderedListItem>
      ))}
    </UnorderedList>
  )
}

export default ProfileTimeline
