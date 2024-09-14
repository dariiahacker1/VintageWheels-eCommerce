import './AdvancedSearch.css'
import React from "react";

const AdvancedSearch = ({
                            yearFrom,
                            yearTo,
                            setYearFrom,
                            setYearTo,
                            priceLowest,
                            priceHighest,
                            setPriceLowest,
                            setPriceHighest,
                            transmission,
                            setTransmission,
                            odometerMin,
                            odometerMax,
                            setOdometerMin,
                            setOdometerMax
                        }) => {

    return (

        <div className="advanced-search-options">
            <div className="option">
            <p>Year(s):</p>
            <div className="inputs">
                <input type="number" placeholder="From:" value={yearFrom}
                       onChange={(e) => setYearFrom(e.target.value)}/>
                <input type="number" placeholder="To:" value={yearTo} onChange={(e) => setYearTo(e.target.value)}/>
            </div>
        </div>

        <div className="option">
            <p>Price:</p>
            <div className="inputs">
                <input type="number" placeholder="Lowest:" value={priceLowest}
                       onChange={(e) => setPriceLowest(e.target.value)}/>
                <input type="number" placeholder="Highest:" value={priceHighest}
                       onChange={(e) => setPriceHighest(e.target.value)}/>
            </div>
        </div>

        <div className="option">
            <p>Transmission:</p>
            <select name="transmission" id="transmission" value={transmission}
                    onChange={(e) => setTransmission(e.target.value)}>
                <option value="">All</option>
                <option value="manual">Manual</option>
                <option value="automatic">Automatic</option>
            </select>
        </div>

        <div className="option">
            <p>Odometer:</p>
            <div className="inputs">
                <input type="number" placeholder="Min:" value={odometerMin}
                       onChange={(e) => setOdometerMin(e.target.value)}/>
                <input type="number" placeholder="Max:" value={odometerMax}
                       onChange={(e) => setOdometerMax(e.target.value)}/>
            </div>
        </div>
    </div>)

}

export default AdvancedSearch;