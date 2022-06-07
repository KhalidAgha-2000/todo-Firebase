import React, { Component } from 'react'
import fire from './fire'

export default class AddTodo extends Component {
  constructor() {
    super();
    this.state = {
      make: ""
    }
  }
  db = null;

  addAction = (e) => {
    e.preventDefault();
    this.db = fire.firestore();
    this.db.collection('action').add({
      make: this.state.make
    });
    this.setState({
      make: ""

    });
  }

  updateInput = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    });
  }
  render() {
    return (
      <div className="container" >
        <form onSubmit={this.addAction} className="col s12">
          <div className="row">
            <div className="col s12">
              <p>Add new Action</p>
              <div className="input-field inline">
                <input id="make" type="text"
                  className="validate center-align"
                  required
                  onChange={this.updateInput}
                  value={this.state.make} />
              </div>
            </div>
          </div>
          <button className="btn-floating btn-large waves-effect waves-light red">
            <i class="material-icons">
              add
            </i>
          </button>
        </form>
      </div>

    );
  }
}
// Change = (e) => {
//     this.setState({
//         [e.target.id]: e.target.value
//     })
// }

// Submit = (e) => {
//     e.preventDefault();
//     console.log(this.state);
//     this.props.AddToDo(this.state);
// }



/*
 <h4>Add Actions</h4>

 <input className="center-align"
 type="text" name="make"
 id="make"
  onChange={this.updateInput}
  value={this.state.make} required />
 */