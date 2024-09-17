import {useState} from 'react'
import './index.css'

const stepsList = [
  {stepId: 'YOUR_DETAILS', displayText: 'Your Details'},
  {stepId: 'DATE_SELECTION', displayText: 'Date Selection'},
  {stepId: 'GUESTS', displayText: 'Guests'},
  {stepId: 'TRAVEL_ASSISTANCE', displayText: 'Travel Assistance'},
  {stepId: 'CONFIRMATION', displayText: 'Confirmation'},
]

const DateSelection = ({
  startDateInput,
  endDateInput,
  onChangeStartDateInput,
  onChangeEndDateInput,
  onChangeSelectedStep,
  onChangetoPrevStep,
}) => {
  const [showStartDateError, setShowStartDateError] = useState(false)
  const [showEndDateError, setShowEndDateError] = useState(false)
  const [showDateDiffError, setdateDiffError] = useState(false)

  const onSubmittingDateSelection = () => {
    const getDifference = startDateInput < endDateInput
    if (startDateInput === '') {
      setShowStartDateError(true)
    } else if (endDateInput === '') {
      setShowStartDateError(false)
      setShowEndDateError(true)
    } else if (!getDifference) {
      setShowEndDateError(false)
      setdateDiffError(true)
    } else {
      setdateDiffError(false)
      setShowEndDateError(false)
      setShowStartDateError(false)
      onChangeSelectedStep(stepsList[2].stepId, stepsList[1].stepId)
    }
  }
  const onClickPrevious = () => onChangetoPrevStep(stepsList[0].stepId)

  const hoverStartDateClass = showStartDateError
    ? 'dateSelectionInputField errorInputField'
    : 'dateSelectionInputField'
  const hoverEndDateClass = showEndDateError
    ? 'dateSelectionInputField errorInputField'
    : 'dateSelectionInputField'

  return (
    <form className="dateSelectionDescription">
      <h1 className="dateSelectionHeading">Date Selection</h1>
      <p className="dateSelectionPara">Select your Start and End Date</p>

      <div className="dateSelectionFormContainer">
        <label htmlFor="startDate" className="dateSelectionLabels">
          Start Date
        </label>
        <input
          className={hoverStartDateClass}
          id="startDate"
          type="date"
          placeholder="mm/dd/yy"
          value={startDateInput}
          onChange={e => onChangeStartDateInput(e.target.value)}
        />
        {showStartDateError && <p className="errorMsg">Select start date</p>}
        <label htmlFor="endDate" className="dateSelectionLabels">
          End Date
        </label>
        <input
          className={hoverEndDateClass}
          id="endDate"
          type="date"
          placeholder="mm/dd/yy"
          value={endDateInput}
          onChange={e => onChangeEndDateInput(e.target.value)}
        />

        {showEndDateError && <p className="errorMsg">Select end date</p>}
        {showDateDiffError && (
          <p className="errorMsg">
            The end date cannot be less than the start date
          </p>
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
              type="button"
              className="dateSelectionNextButton"
              onClick={onSubmittingDateSelection}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </form>
  )
}

export default DateSelection
