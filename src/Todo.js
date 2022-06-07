import React, { Component } from 'react'

export default class Todo extends Component {

    render() {
        var content = this.props.data.map((entry) => {
            return (
                <div className="container" key={entry.id}>
                    <div className="row" >
                        <div className="col s6">
                            <h5 className="pink-text darken-3">
                                {entry.make}
                            </h5>
                        </div>
                        <div className="col s6">
                            <button
                                className="btn-floating btn-large waves-effect waves-light red"
                                onClick={() => this.props.removeAcion(entry.id)}>
                                <i className="material-icons">check</i>
                            </button>
                        </div>
                    </div>
                </div>
            )
        })
        return (
            <div>
                {content}
            </div>
        )
    }
}
/*

<form  >
    <label htmlFor="making"> Action : </label>
    <input type="text" id="m"/>
    <button >Add </button>
</form> */
