import './index.css'

const stepsList = [
  {stepId: 'YOUR_DETAILS', displayText: 'Your Details'},
  {stepId: 'DATE_SELECTION', displayText: 'Date Selection'},
  {stepId: 'GUESTS', displayText: 'Guests'},
  {stepId: 'TRAVEL_ASSISTANCE', displayText: 'Travel Assistance'},
  {stepId: 'CONFIRMATION', displayText: 'Confirmation'},
]

const travelAssistanceList = [
  {value: 'car', displayText: 'Car'},
  {value: 'flight', displayText: 'Flight'},
  {value: 'bus', displayText: 'Bus'},
  {value: 'train', displayText: 'Train'},
]

const TravelAssistance = ({
  isTravelAssistanceNeed,
  selectedTripValue,
  onChangeTravelAssistanceCheckbox,
  onChangeSelectTripValue,
  onChangeSelectedStep,
  onChangetoPrevStep,
}) => {
  const onNeedOfTravelAssistance = () => {
    onChangeTravelAssistanceCheckbox()
  }

  const onChangeTravelAssistance = event => {
    onChangeSelectTripValue(event.target.value)
  }
  const onSubmittingTravelAssistance = event => {
    event.preventDefault()
    onChangeSelectedStep(stepsList[4].stepId, stepsList[3].stepId)
  }

  const onClickPrevious = () => onChangetoPrevStep(stepsList[2].stepId)
  return (
    <form className="travelAssistanceDescription">
      <h1 className="travelAssistanceHeading">Travel Assistance</h1>
      <p className="travelAssistancePara">Select your travel assistance</p>

      <div className="travelAssistanceFormContainer">
        <div>
          <input
            className="travelAssistanceNeededClass"
            id="isTravelAssNeeded"
            type="checkbox"
            checked={isTravelAssistanceNeed}
            onChange={onNeedOfTravelAssistance}
          />
          <label htmlFor="isTravelAssNeeded" className="travelAssistanceLabels">
            Travel Assistance Needed
          </label>
        </div>
        {isTravelAssistanceNeed && (
          <div className="travelAssistanceDetails">
            <label
              htmlFor="travelAssistanceType"
              className="travelAssistanceLabels"
            >
              Travel Assistance
            </label>
            <select
              className="travelAssistanceTypeContainer"
              id="travelAssistanceType"
              name="travelAssistance"
              onChange={onChangeTravelAssistance}
              value={selectedTripValue}
            >
              {travelAssistanceList.map(eachList => (
                <option key={eachList.value} value={eachList.displayText}>
                  {eachList.displayText}
                </option>
              ))}
            </select>
          </div>
        )}

        <div className="buttonsContainer">
          <div className="buttonContainer">
            <button
              type="button"
              className="dateSelectionNextButton"
              onClick={onClickPrevious}
            >
              Previous
            </button>
          </div>
          <div className="buttonContainer">
            <button
              type="submit"
              className="dateSelectionNextButton"
              onClick={onSubmittingTravelAssistance}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </form>
  )
}

export default TravelAssistance
