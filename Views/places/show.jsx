const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def>
          <main>
            <h1>{data.place.name}</h1>
            <h2> {data.place.pic}</h2>
            <h3> {data.place.city}, {data.place.state} </h3>
            <h4> {data.place.cuisines} </h4>
            <h2> RATINGS </h2>
            <p> No ratings yet</p>
            <h2> Comments </h2>
            <p> No comments yet</p>
            
          </main>
        </Def>
    )
}

module.exports = show
