import {v4 as uuidV4} from 'uuid'
import './index.css'

const stepsList = [
  {stepId: 'YOUR_DETAILS', displayText: 'Your Details'},
  {stepId: 'DATE_SELECTION', displayText: 'Date Selection'},
  {stepId: 'GUESTS', displayText: 'Guests'},
  {stepId: 'TRAVEL_ASSISTANCE', displayText: 'Travel Assistance'},
  {stepId: 'CONFIRMATION', displayText: 'Confirmation'},
]

const Confirmation = ({
  yourDetailsName,
  yourDetailsStartLocation,
  yourDetailsEndLocation,
  startDateInput,
  endDateInput,
  totalGuests,
  selectedTripValue,
  onChangeSelectedStep,
  addTripList,
  onCancellingBooking,
}) => {
  const onClickCancelBookingBtn = () => onCancellingBooking()

  const onClickConfirmBookingBtn = () => {
    const tripsDetails = {
      id: uuidV4(),
      endLocation: yourDetailsEndLocation,
      startDate: startDateInput,
      endDate: endDateInput,
    }
    onChangeSelectedStep('', stepsList[4].stepId)
    addTripList(tripsDetails)
  }

  return (
    <form className="dateSelectionDescription">
      <h1 className="dateSelectionHeading">Confirmation</h1>
      <p className="dateSelectionPara">Confirm your details</p>

      <div className="dateSelectionFormContainer">
        <div className="confirmationNameContainer">
          <p className="nameHeading">Name:</p>
          <p className="confirmedName">{yourDetailsName}</p>
        </div>
        <div className="confirmationNameContainer">
          <p className="nameHeading">Start Location:</p>
          <p className="confirmedName">{yourDetailsStartLocation}</p>
        </div>
        <div className="confirmationNameContainer">
          <p className="nameHeading">End Location:</p>
          <p className="confirmedName">{yourDetailsEndLocation}</p>
        </div>
        <div className="confirmationNameContainer">
          <p className="nameHeading">Start Date:</p>
          <p className="confirmedName">{startDateInput}</p>
        </div>
        <div className="confirmationNameContainer">
          <p className="nameHeading">End Date:</p>
          <p className="confirmedName">{endDateInput}</p>
        </div>
        <div className="confirmationNameContainer">
          <p className="nameHeading">Guests:</p>
          <p className="confirmedName">{totalGuests}</p>
        </div>
        <div className="confirmationNameContainer">
          <p className="nameHeading">Travel Assistance:</p>
          <p className="confirmedName">{selectedTripValue}</p>
        </div>
        <div className="buttonsContainer">
          <div className="buttonContainer">
            <button
              type="button"
              className="dateSelectionNextButton"
              onClick={onClickCancelBookingBtn}
            >
              Cancel
            </button>
          </div>
          <div className="buttonContainer">
            <button
              type="button"
              className="dateSelectionNextButton"
              onClick={onClickConfirmBookingBtn}
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </form>
  )
}

export default Confirmation
