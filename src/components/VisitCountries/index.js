import {Component} from 'react'
import './index.css'

const initialCountriesList = [
  {
    id: '53c9c67a-c923-4927-8a75-fdfc4bc5ec61',
    name: 'Australia',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-australia-img.png',
    isVisited: false,
  },
  {
    id: '8baa8029-fb2c-4f06-bfcc-3dc9ad12b24d',
    name: 'Canada',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-canada-img.png',
    isVisited: false,
  },
  {
    id: '1b520f98-6548-41f3-816e-c8b887865172',
    name: 'Greenland',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-greenland-img.png',
    isVisited: false,
  },
  {
    id: '25841996-fbfd-4554-add4-4c94082c8ccd',
    name: 'India',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-india-img.png',
    isVisited: true,
  },
  {
    id: '603c3568-13b0-11ec-82a8-0242ac130003',
    name: 'Netherlands',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-netherland-img.png',
    isVisited: false,
  },
  {
    id: '3c988dec-55e1-477d-a9e2-b354fd559849',
    name: 'Portugal',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-portugal-img.png',
    isVisited: false,
  },
  {
    id: 'd766f754-34f7-413e-81ec-9992821b97fa',
    name: 'Switzerland',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-switzerland-img.png',
    isVisited: false,
  },
  {
    id: '7ebb4e04-b124-417f-a69e-564a456d70f1',
    name: 'Thailand',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-thailand-img.png',
    isVisited: false,
  },
  {
    id: '1e4b1dcd-6ace-4dde-ad8d-675927d5ae47',
    name: 'United Kingdom',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-united-kingdom-img.png',
    isVisited: true,
  },
  {
    id: 'e76da8ca-bc48-4981-902b-a4d2d46feb6d',
    name: 'Venezuela',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-venezuela-img.png',
    isVisited: false,
  },
]

class VisitCountries extends Component {
  state = {countriesList: initialCountriesList}

  onVisit = e => {
    const activeid = e.currentTarget.value
    const country = initialCountriesList.find(each => each.id === activeid)
    if (country.isVisited === false) {
      this.setState(prevState => ({
        countriesList: prevState.countriesList.map(each => {
          if (each.id === activeid) {
            return {...each, isVisited: true}
          }
          return each
        }),
      }))
    }
  }

  onRemove = e => {
    const activeid = e.currentTarget.value
    this.setState(prevState => ({
      countriesList: prevState.countriesList.map(each => {
        if (each.id === activeid) {
          return {...each, isVisited: false}
        }
        return each
      }),
    }))
  }

  renderCountries = () => {
    const {countriesList} = this.state
    return (
      <div className="countries_cont">
        <h1 className="title">Countries</h1>
        <div className="list_container">
          <ul className="countries_list">
            {countriesList.map(country => (
              <li key={country.id} className="country_item">
                <p className="country_name">{country.name}</p>
                {country.isVisited ? (
                  <p className="visitedTitle">Visited</p>
                ) : (
                  <button
                    className="country_btn"
                    onClick={this.onVisit}
                    value={country.id}
                    type="button"
                  >
                    Visit
                  </button>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }

  renderVisitedCountries = () => {
    const {countriesList} = this.state
    const visitedList = countriesList.filter(each => each.isVisited === true)
    const isCountryVisited = visitedList.length !== 0
    return (
      <div className="countries_cont">
        <h1 className="title">Visited Countries</h1>
        <div className="list_container">
          {isCountryVisited ? (
            <ul className="visited_countries_list">
              {visitedList.map(country => (
                <li key={country.id} className="visited_country">
                  <img
                    src={country.imageUrl}
                    alt="thumbnail"
                    className="country_img"
                  />
                  <div className="name_cont">
                    <p>{country.name}</p>
                    <button
                      type="button"
                      className="custom_btn"
                      onClick={this.onRemove}
                      value={country.id}
                    >
                      Remove
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <div className="no_visit">
              <p>No Countries Visited Yet!</p>
            </div>
          )}
        </div>
      </div>
    )
  }

  render() {
    return (
      <div className="bg_container">
        <div className="app_container">
          {this.renderCountries()}
          {this.renderVisitedCountries()}
        </div>
      </div>
    )
  }
}

export default VisitCountries
