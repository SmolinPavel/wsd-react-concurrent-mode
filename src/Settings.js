import React from 'react'

import Checkbox from './Checkbox'
import { SettingsWrapper, StyledTextField } from './styled'

function Settings({
  isSlow3G,
  setIsSlow3G,
  isLoaderDelayed,
  setIsLoaderDelayed,
  shouldUseDeffered,
  setShouldUseDeffered,
  shouldUseTransition,
  setShouldUseTransition,
  userNameTimeout,
  setUserNameTimeout,
  userFactsTimeout,
  setUserFactsTimeout,
}) {
  const getCheckboxHandler = (fn) => (event) => fn(event.target.checked)
  const getNumberHandler = (fn) => (event) => fn(event.target.value)

  return (
    <SettingsWrapper>
      <label>
        <Checkbox
          checked={isSlow3G}
          onChange={getCheckboxHandler(setIsSlow3G)}
        />
        <span>Slow 3G</span>
      </label>
      <label>
        <Checkbox
          checked={isLoaderDelayed}
          onChange={getCheckboxHandler(setIsLoaderDelayed)}
        />
        <span>Delayed Loader</span>
      </label>
      <label>
        <Checkbox
          checked={shouldUseTransition}
          onChange={getCheckboxHandler(setShouldUseTransition)}
        />
        <span>Use transition hook</span>
      </label>
      <label>
        <Checkbox
          checked={shouldUseDeffered}
          onChange={getCheckboxHandler(setShouldUseDeffered)}
        />
        <span>Use deffered value</span>
      </label>
      <label>
        <StyledTextField
          value={userNameTimeout}
          onChange={getNumberHandler(setUserNameTimeout)}
        />
        <span>User name fetch time</span>
      </label>
      <label>
        <StyledTextField
          value={userFactsTimeout}
          onChange={getNumberHandler(setUserFactsTimeout)}
        />
        <span>User facts fetch time</span>
      </label>
    </SettingsWrapper>
  )
}

export default Settings
