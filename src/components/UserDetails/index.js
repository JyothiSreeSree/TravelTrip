import {useState} from 'react'
import {MdErrorOutline} from 'react-icons/md'
import './index.css'

const stepsList = [
  {stepId: 'YOUR_DETAILS', displayText: 'Your Details'},
  {stepId: 'DATE_SELECTION', displayText: 'Date Selection'},
  {stepId: 'GUESTS', displayText: 'Guests'},
  {stepId: 'TRAVEL_ASSISTANCE', displayText: 'Travel Assistance'},
  {stepId: 'CONFIRMATION', displayText: 'Confirmation'},
]

const UserDetails = ({
  yourDetailsName,
  yourDetailsStartLocation,
  yourDetailsEndLocation,
  onChangeYourDetailsName,
  onChangeYourDetailsStartLocation,
  onChangeYourDetailsEndLocation,
  onChangeSelectedStep,
}) => {
  const [showNameError, setShowNameError] = useState(false)
  const [showStartLocationError, setShowStartLocationError] = useState(false)
  const [showEndLocationError, setShowEndLocationError] = useState(false)

  const onSubmittingYourDetails = event => {
    event.preventDefault()
    if (yourDetailsName === '') {
      setShowNameError(true)
    } else if (yourDetailsStartLocation === '') {
      setShowStartLocationError(true)
      setShowNameError(false)
    } else if (yourDetailsEndLocation === '') {
      setShowEndLocationError(true)
      setShowStartLocationError(false)
    } else {
      setShowNameError(false)
      setShowEndLocationError(false)
      setShowStartLocationError(false)
      onChangeSelectedStep(stepsList[1].stepId, stepsList[0].stepId)
    }
  }

  return (
    <form className="yourDetailsDescription">
      <h1 className="yourDetailsHeading">Your Details</h1>
      <p className="yourDetailsPara">Enter your name and location details</p>

      <div className="yourDetailsFormContainer">
        <label htmlFor="name" className="yourDetailsLabels">
          Name
        </label>
        <div className="inputFieldContainer">
          <input
            className={
              showNameError
                ? 'yourDetailsInputField errorInputField'
                : 'yourDetailsInputField'
            }
            id="name"
            type="text"
            placeholder="Enter name"
            value={yourDetailsName}
            onChange={e => onChangeYourDetailsName(e.target.value)}
          />
          {showNameError && <MdErrorOutline className="errorIcon" />}
        </div>
        {showNameError && <p className="errorMsg">Enter your name</p>}

        <label htmlFor="startLocation" className="yourDetailsLabels">
          Start Location
        </label>
        <div className="inputFieldContainer">
          <input
            className={
              showStartLocationError
                ? 'yourDetailsInputField errorInputField'
                : 'yourDetailsInputField'
            }
            id="startLocation"
            type="text"
            placeholder="Enter start location"
            value={yourDetailsStartLocation}
            onChange={e => onChangeYourDetailsStartLocation(e.target.value)}
          />
          {showStartLocationError && <MdErrorOutline className="errorIcon" />}
        </div>
        {showStartLocationError && (
          <p className="errorMsg">Enter your start location</p>
        )}

        <label htmlFor="endLocation" className="yourDetailsLabels">
          End Location
        </label>
        <div className="inputFieldContainer">
          <input
            className={
              showEndLocationError
                ? 'yourDetailsInputField errorInputField'
                : 'yourDetailsInputField'
            }
            id="endLocation"
            type="text"
            placeholder="Enter end location"
            value={yourDetailsEndLocation}
            onChange={e => onChangeYourDetailsEndLocation(e.target.value)}
          />
          {showEndLocationError && <MdErrorOutline className="errorIcon" />}
        </div>
        {showEndLocationError && (
          <p className="errorMsg">Enter your end location</p>
        )}

        <div className="buttonContainer">
          <button
            type="button"
            className="yourDetailsNextButton"
            onClick={onSubmittingYourDetails}
          >
            Next
          </button>
        </div>
      </div>
    </form>
  )
}

export default UserDetails
