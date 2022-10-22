const React = require('react')
const Def = require('./default')

function home () {
    return (
      <Def>
          <main>
              <h1>HOME</h1>
              <div>
              <img id="chiaFood" src="/images/chia-fruit-drink.jpg" alt="food" />
                </div>
              <a href="/places">
  <button className="btn-primary">Places Page</button>
</a> 
          </main>
      </Def>
    )
  }
  

module.exports = home
