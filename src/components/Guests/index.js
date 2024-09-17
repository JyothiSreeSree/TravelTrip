import './index.css'

const stepsList = [
  {stepId: 'YOUR_DETAILS', displayText: 'Your Details'},
  {stepId: 'DATE_SELECTION', displayText: 'Date Selection'},
  {stepId: 'GUESTS', displayText: 'Guests'},
  {stepId: 'TRAVEL_ASSISTANCE', displayText: 'Travel Assistance'},
  {stepId: 'CONFIRMATION', displayText: 'Confirmation'},
]

const Guests = ({
  adultsCount,
  childrenCount,
  infantsCount,
  onClickAdultsDecreaseBtn,
  onClickAdultsIncreaseBtn,
  onClickChildrenDecreaseBtn,
  onClickChildrenIncreaseBtn,
  onClickInfantsDecreaseBtn,
  onClickInfantsIncreaseBtn,
  onChangeSelectedStep,
  onChangetoPrevStep,
}) => {
  const onDecreasingAdultCount = () => {
    onClickAdultsDecreaseBtn()
  }

  const onIncreasingAdultCount = () => {
    onClickAdultsIncreaseBtn()
  }

  const onDecreasingChildrenCount = () => {
    onClickChildrenDecreaseBtn()
  }

  const onIncreasingChildrenCount = () => {
    onClickChildrenIncreaseBtn()
  }

  const onDecreasingInfantCount = () => {
    onClickInfantsDecreaseBtn()
  }

  const onIncreasingInfantCount = () => {
    onClickInfantsIncreaseBtn()
  }

  const onSubmittingGuests = event => {
    event.preventDefault()
    onChangeSelectedStep(stepsList[3].stepId, stepsList[2].stepId)
  }

  const onClickPrevious = () => onChangetoPrevStep(stepsList[1].stepId)

  return (
    <form className="guestsDescription" data-testid="guests">
      <div>
        <h1 className="guestsHeading">Guests</h1>
        <p className="guestsPara">Select your guests</p>
      </div>
      <div className="guestsFormContainer">
        <div className="guestsEachDetailsContainer">
          <div className="guestsEachDetailsContainerDesc">
            <p className="guestType">Adults</p>
            <p className="guestAge">Age 13 or above</p>
          </div>
          <div className="guestsEachDetailsContainerButtons">
            <button
              type="button"
              className="button"
              onClick={onDecreasingAdultCount}
            >
              -
            </button>
            <p className="count">{adultsCount}</p>
            <button
              type="button"
              className="button"
              onClick={onIncreasingAdultCount}
            >
              +
            </button>
          </div>
        </div>
        <hr />
        <div className="guestsEachDetailsContainer">
          <div className="guestsEachDetailsContainerDesc">
            <p className="guestType">Children</p>
            <p className="guestAge">Age 2-12</p>
          </div>
          <div className="guestsEachDetailsContainerButtons">
            <button
              type="button"
              className="button"
              onClick={onDecreasingChildrenCount}
            >
              -
            </button>
            <p className="count">{childrenCount}</p>
            <button
              type="button"
              className="button"
              onClick={onIncreasingChildrenCount}
            >
              +
            </button>
          </div>
        </div>
        <hr />
        <div className="guestsEachDetailsContainer">
          <div className="guestsEachDetailsContainerDesc">
            <p className="guestType">Infants</p>
            <p className="guestAge">under 2</p>
          </div>
          <div className="guestsEachDetailsContainerButtons">
            <button
              type="button"
              className="button"
              onClick={onDecreasingInfantCount}
            >
              -
            </button>
            <p className="count">{infantsCount}</p>
            <button
              type="button"
              className="button"
              onClick={onIncreasingInfantCount}
            >
              +
            </button>
          </div>
        </div>

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
              onClick={onSubmittingGuests}
              className="dateSelectionNextButton"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </form>
  )
}

export default Guests
