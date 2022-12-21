import React from 'react'
import { useSelector } from 'react-redux'
import { selectDisplay } from '../redux/slices/displayCountrySlice'

const Overview = () => {
    const currentDisplay = useSelector(selectDisplay)

  return (
    <div className='stack'>
        <h2>{currentDisplay.name.official}</h2>
        <h2>Commonly called: "{currentDisplay.name.common}"</h2>

        <table className='overview-table'>
            <tbody>
                <tr>
                    <th>Capitol City: </th>
                    <td>{currentDisplay.capital && currentDisplay.capital}</td>
                </tr>
                <tr>
                    <th>Continent(s): </th>
                    <td>{currentDisplay.continents}</td>
                </tr>
                <tr>
                    <th>Independent: </th>
                    <td>{currentDisplay.independent ? 'True' : 'False'}</td>
                </tr>
                <tr>
                    <th>Population: </th>
                    <td>{currentDisplay.population}</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default Overview