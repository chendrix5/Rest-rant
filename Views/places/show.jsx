const React = require('react')
const Def = require('../default')

function show (data) {
  let comments = (
    <h3 className="inactive">
      No comments yet!
    </h3>
  )
  if (data.place.comments.length) {
    comments = data.place.comments.map (c =>{
      return (
        <div className="border">
          <h2 classname="rant">{c.rant ? 'Rant!' : 'Rave!'}</h2>
          <h4> {c.content}</h4>
          <h3>
            <strong>- {c.author}</strong>
          </h3>
          <h4> Rating: {c.stars}</h4>
          </div>
      )
    })
  }
    return (
        <Def>
          <main>
            <h1>{data.place.name}</h1>
            <img src={data.place.pic} alt={data.place.name}/>
            <h3> Located in {data.place.city}, {data.place.state} </h3>
            <h3> {data.place.showEstablished()}</h3>
            <h4> {data.place.cuisines} </h4>
            <h2> RATINGS </h2>
            <p> No ratings yet</p>
            <h2> Comments </h2>
            {comments}
            <p> No comments yet</p>
            <a href={`/places/${data.id}/edit`} className="btn btn-warning"> Edit </a> 
            <form method="POST" action={`/places/${data.id}?_method=DELETE`}>
              <button type="submit" className="btn btn-danger">
                Delete
              </button>
            </form>

            <form method="POST" action="/show">
            <div className="form-group">
    <label htmlFor="Author">Author</label>
    <input className="form-control" id="Author" name="Author" required />
  </div>
  <div className="form-group">
    <label htmlFor="Content">Content</label>
    <textarea className="form-control" id="Content" name="Content" rows="4" cols="5"/>
  </div>
  <div className="form-group">
    <label htmlFor="Star">Star Rating</label>
    <input className="form-control" id="Star" name="Star" type="number" />
  </div>
  <div className="form-group">
    <label htmlFor="Rant">Rant</label>
    <input className="form-control" id="Rant" name="Rant" type="checkbox" step=".5" />
  </div>
  <button type="submit" className="btn btn-danger">
                Submit
              </button>

            </form>
  


            
          </main>
        </Def>
    )
}

module.exports = show
