import React from 'react'

import Checkbox from './Checkbox'
import { SettingsWrapper } from './styled'

function Settings({
  isSlow3G,
  setIsSlow3G,
  shouldUseDeffered,
  setShouldUseDeffered
}) {
  const getCheckboxHandler = (fn) => (event) => fn(event.target.checked)
  return (
    <SettingsWrapper>
      <label>
        <Checkbox
          checked={isSlow3G}
          onChange={getCheckboxHandler(setIsSlow3G)}
        />
        <span style={{ marginLeft: 8 }}>Slow 3G</span>
      </label>
      <label>
        <Checkbox
          checked={shouldUseDeffered}
          onChange={getCheckboxHandler(setShouldUseDeffered)}
        />
        <span style={{ marginLeft: 8 }}>Use deffered value</span>
      </label>
    </SettingsWrapper>
  )
}

export default Settings
