import {Component} from 'react'
import Header from '../Header'
import UserDetails from '../UserDetails'
import DateSelection from '../DateSelection'
import Guests from '../Guests'
import TravelAssistance from '../TravelAssistance'
import Confirmation from '../Confirmation'
import TravelContext from '../../context/TravelContext'
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

class BookANewTrip extends Component {
  state = {
    onSelectedStep: stepsList[0].stepId,
    yourDetailsName: '',
    yourDetailsStartLocation: '',
    yourDetailsEndLocation: '',
    startDateInput: '',
    endDateInput: '',
    adultsCount: 1,
    childrenCount: 0,
    infantsCount: 0,
    isTravelAssistanceNeed: false,
    selectedTripValue: travelAssistanceList[0].value,
    isCompletedStepList: [],
  }

  // changing moving to next step
  onChangeSelectedStep = (nextstepId, presentStepId) => {
    this.setState(prevState => ({
      onSelectedStep: nextstepId,
      isCompletedStepList: [...prevState.isCompletedStepList, presentStepId],
    }))
  }

  //  on moving to previous step
  onChangetoPrevStep = stepId => {
    console.log('prevvious state')
    this.setState(prevState => ({
      onSelectedStep: stepId,
      isCompletedStepList: prevState.isCompletedStepList.filter(
        eachCompletedList => eachCompletedList.includes(stepId) === false,
      ),
    }))
  }

  // Function to update name
  onChangeYourDetailsName = name => {
    this.setState({yourDetailsName: name})
  }

  // Function to update start location
  onChangeYourDetailsStartLocation = startLocation => {
    this.setState({yourDetailsStartLocation: startLocation})
  }

  // Function to update end location
  onChangeYourDetailsEndLocation = endLocation => {
    this.setState({yourDetailsEndLocation: endLocation})
  }

  //  changing start date in date selection
  onChangeStartDateInput = startdate => {
    this.setState({
      startDateInput: startdate,
    })
  }

  //  changing end date in date selection
  onChangeEndDateInput = enddate => {
    this.setState({
      endDateInput: enddate,
    })
  }

  // decreasing adults btn
  onClickAdultsDecreaseBtn = () => {
    const {adultsCount} = this.state
    if (adultsCount > 1) {
      this.setState(prevState => ({
        adultsCount: prevState.adultsCount - 1,
      }))
    }
  }

  // increasing adults btn
  onClickAdultsIncreaseBtn = () => {
    this.setState(prevState => ({
      adultsCount: prevState.adultsCount + 1,
    }))
  }

  // decreasing childrenscount
  onClickChildrenDecreaseBtn = () => {
    const {childrenCount} = this.state
    if (childrenCount > 0) {
      this.setState(prevState => ({
        childrenCount: prevState.childrenCount - 1,
      }))
    }
  }

  // increasing childrenscount
  onClickChildrenIncreaseBtn = () => {
    this.setState(prevState => ({
      childrenCount: prevState.childrenCount + 1,
    }))
  }

  // decreasing infants count
  onClickInfantsDecreaseBtn = () => {
    const {infantsCount} = this.state
    if (infantsCount > 0) {
      this.setState(prevState => ({
        infantsCount: prevState.infantsCount - 1,
      }))
    }
  }

  // increasing infants count
  onClickInfantsIncreaseBtn = () => {
    this.setState(prevState => ({
      infantsCount: prevState.infantsCount + 1,
    }))
  }

  // is travel assistance selected
  onChangeTravelAssistanceCheckbox = () => {
    this.setState(prevState => ({
      isTravelAssistanceNeed: !prevState.isTravelAssistanceNeed,
    }))
  }

  // selecting type of trip
  onChangeSelectTripValue = tripType => {
    this.setState({selectedTripValue: tripType})
  }

  // cancelling booking
  onCancellingBooking = () => {
    this.setState({
      onSelectedStep: stepsList[0].stepId,
      yourDetailsName: '',
      yourDetailsStartLocation: '',
      yourDetailsEndLocation: '',
      startDateInput: '',
      endDateInput: '',
      adultsCount: 1,
      childrenCount: 0,
      infantsCount: 0,
      isTravelAssistanceNeed: false,
      selectedTripValue: travelAssistanceList[0].value,
      isCompletedStepList: [],
    })
  }

  // Confirmed Page
  renderConfirmedBookingForm = () => (
    <div className="dateSelectionDescription">
      <form className="dateSelectionFormContainer">
        <img
          className="confirmedImage"
          src="https://assets.ccbp.in/frontend/react-js/travel-trip-steps-successfully-completed-img.png"
          alt="success"
        />
        <h1 className="awesomeText">Awesome!</h1>
        <p className="bookingConfirmedDescription">
          Your booking has been confirmed.
        </p>
        <button
          className="bookTripButton"
          type="button"
          onClick={this.onCancellingBooking}
        >
          Book a New Trip
        </button>
      </form>
    </div>
  )
  // rendering all the details

  renderEachStepInformation = callAddTripList => {
    const {
      onSelectedStep,
      yourDetailsEndLocation,
      yourDetailsName,
      yourDetailsStartLocation,
      startDateInput,
      endDateInput,
      adultsCount,
      childrenCount,
      infantsCount,
      isTravelAssistanceNeed,
      selectedTripValue,
    } = this.state
    switch (onSelectedStep) {
      case stepsList[0].stepId:
        return (
          <UserDetails
            yourDetailsName={yourDetailsName}
            yourDetailsStartLocation={yourDetailsStartLocation}
            yourDetailsEndLocation={yourDetailsEndLocation}
            onChangeYourDetailsName={this.onChangeYourDetailsName}
            onChangeYourDetailsStartLocation={
              this.onChangeYourDetailsStartLocation
            }
            onChangeYourDetailsEndLocation={this.onChangeYourDetailsEndLocation}
            onChangeSelectedStep={this.onChangeSelectedStep}
            onChangetoPrevStep={this.onChangetoPrevStep}
          />
        )
      case stepsList[1].stepId:
        return (
          <DateSelection
            startDateInput={startDateInput}
            endDateInput={endDateInput}
            onChangeStartDateInput={this.onChangeStartDateInput}
            onChangeEndDateInput={this.onChangeEndDateInput}
            onChangeSelectedStep={this.onChangeSelectedStep}
            onChangetoPrevStep={this.onChangetoPrevStep}
          />
        )
      case stepsList[2].stepId:
        return (
          <Guests
            adultsCount={adultsCount}
            childrenCount={childrenCount}
            infantsCount={infantsCount}
            onChangeSelectedStep={this.onChangeSelectedStep}
            onChangetoPrevStep={this.onChangetoPrevStep}
            onClickAdultsDecreaseBtn={this.onClickAdultsDecreaseBtn}
            onClickAdultsIncreaseBtn={this.onClickAdultsIncreaseBtn}
            onClickChildrenDecreaseBtn={this.onClickChildrenDecreaseBtn}
            onClickChildrenIncreaseBtn={this.onClickChildrenIncreaseBtn}
            onClickInfantsDecreaseBtn={this.onClickInfantsDecreaseBtn}
            onClickInfantsIncreaseBtn={this.onClickInfantsIncreaseBtn}
          />
        )
      case stepsList[3].stepId:
        return (
          <TravelAssistance
            isTravelAssistanceNeed={isTravelAssistanceNeed}
            selectedTripValue={selectedTripValue}
            onChangeTravelAssistanceCheckbox={
              this.onChangeTravelAssistanceCheckbox
            }
            onChangeSelectTripValue={this.onChangeSelectTripValue}
            onChangeSelectedStep={this.onChangeSelectedStep}
            onChangetoPrevStep={this.onChangetoPrevStep}
          />
        )
      case stepsList[4].stepId:
        return (
          <Confirmation
            yourDetailsName={yourDetailsName}
            yourDetailsStartLocation={yourDetailsStartLocation}
            yourDetailsEndLocation={yourDetailsEndLocation}
            startDateInput={startDateInput}
            endDateInput={endDateInput}
            totalGuests={adultsCount + childrenCount + infantsCount}
            selectedTripValue={selectedTripValue}
            onChangeSelectedStep={this.onChangeSelectedStep}
            addTripList={callAddTripList}
            onCancellingBooking={this.onCancellingBooking}
          />
        )

      default:
        return this.renderConfirmedBookingForm()
    }
  }

  render() {
    const {isCompletedStepList, onSelectedStep} = this.state
    return (
      <TravelContext.Consumer>
        {value => {
          const {addTripList} = value
          const callAddTripList = tripDetails => addTripList(tripDetails)
          return (
            <div className="bookANewTripContainer">
              <Header />
              <div className="bookANewTripDetailsContainer">
                <ul className="stepsListContainer">
                  {stepsList.map(eachStep => (
                    <li className="stepListItem" key={eachStep.stepId}>
                      {isCompletedStepList.includes(eachStep.stepId) ? (
                        <img
                          className="eachStepSuccessImage"
                          src="https://assets.ccbp.in/frontend/react-js/travel-trip-steps-successfully-completed-img.png"
                          alt={eachStep.displayText}
                        />
                      ) : (
                        <span className="eachStepNumber">
                          {stepsList.indexOf(eachStep) + 1}
                        </span>
                      )}
                      <p className="eachStepDisplayText">
                        {eachStep.displayText}
                      </p>
                    </li>
                  ))}
                </ul>
                <div className="eachStepInformationContainer">
                  {this.renderEachStepInformation(callAddTripList)}
                </div>
              </div>
              <div className="mobileViewBookANewTripContainer">
                <ul className="mobileViewStepsList">
                  {stepsList.map(eachStep => {
                    const selectedBackgroundColor =
                      eachStep.stepId === onSelectedStep
                        ? 'horizontalLine horizontalLineBackgroundColor'
                        : 'horizontalLine'
                    return (
                      <li className="horizontalLineItem" key={eachStep.stepId}>
                        <hr className={selectedBackgroundColor} />
                      </li>
                    )
                  })}
                </ul>
                <div className="eachStepInformationContainer">
                  {this.renderEachStepInformation(callAddTripList)}
                </div>
              </div>
            </div>
          )
        }}
      </TravelContext.Consumer>
    )
  }
}

export default BookANewTrip
