// Write your code here
// Style your elements here
import {useState} from 'react'
import {DivContainer, Heading, Button} from './styledComponents'

const Unlock = () => {
  const [isLocked, setLock] = useState(false)

  const onLockunLock = () => {
    setLock(prevState => !prevState)
  }
  const text = isLocked ? 'lock' : 'unlock'
  return (
    <DivContainer>
      {isLocked ? (
        <>
          <img
            src="https://assets.ccbp.in/frontend/hooks/unlock-img.png "
            alt="unlock"
          />
          <Heading>Your divice is Unlocked</Heading>
        </>
      ) : (
        <>
          <img
            src="https://assets.ccbp.in/frontend/hooks/lock-img.png "
            alt="lock"
          />
          <Heading>Your device is Locked</Heading>
        </>
      )}

      <Button type="button" onClick={onLockunLock}>
        {text}
      </Button>
    </DivContainer>
  )
}
export default Unlock
