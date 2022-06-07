import fire from './fire'
import './App.css';
import React, { Component } from 'react'
import Todo from './Todo';
import AddTodo from './AddTodo';


export default class App extends Component {

  state = {
    Loading: true,
    action: [],

  }
  db = null;

  componentDidMount() {
    this.db = fire.firestore();
    this.getFireStoreData();
    this.getFSDataInRealTime();
    // this.AddToFB();
  }

  getFSDataInRealTime() {
    this.db = fire.firestore();
    this.db.collection('action').onSnapshot((snapshot) => {
      console.log('Something Happened on the Server !!!!');
      let changes = snapshot.docChanges();
      console.log(changes);
      this.getFireStoreData();
    })
  }

  getFireStoreData() {
    this.db.collection('action').get().then((snapshot) => {
      var newCollection = [];
      snapshot.docs.forEach((doc) => {
        var entry = { ...doc.data(), id: doc.id };
        newCollection.push(entry);
      })
      this.setState({
        action: newCollection,
      })
      this.setState({
        Loading: false,
      })
    })
  }
  AddToDo = (todo) => {
    todo.id = Math.random();
    let action = [...this.state.action, todo];
    this.setState({
      action: action
    })
  }


  removeAcion = (id) => {
    this.db.collection('action').doc(id).delete();
    this.getFireStoreData();
  }

  render() {
    return (
      <div className="App">
        <h2 className="green-text darken-5">Your Actions For Today</h2>
        {
          this.state.Loading ? <div><h2 className="green-text">Loading...</h2></div> : <Todo data={this.state.action} removeAcion={this.removeAcion}></Todo>
        }
        <AddTodo AddToDo={this.AddToDo} />
      </div>
    );
  }
}


/*AddToFB() {
    this.db.collection("action").doc(id).set({

    })
      .then(function () {

        console.log("Document successfully written!");
      })

  } */