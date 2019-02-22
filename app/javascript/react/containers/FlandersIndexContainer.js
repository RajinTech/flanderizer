import React, { Component } from 'react';

class FlandersIndexContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phrase: {},
      output: {}
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handlePhraseChange = this.handlePhraseChange.bind(this)
  }

  handlePhraseChange(event) {
  let newStreet = event.target.value
  this.setState({ street: newStreet })
  }

  handleSubmit(event){
    event.preventDefault();
    let formPayload = this.state.phrase.split(" ");
    let pergatory = formPayload.map((word) => {
      if(word.endsWith("r")){
        word.concat("ino")
      } else if (word.endsWith("")){
        word.concat("")
      } else if (word.endsWith("")){
        word.concat("")
      } else if (word.endsWith("")){
        word.concat("")
      } else {
        word
      }
    })
    this.setState({ output: pergatory.join(" ")})


  }

  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Enter a Phrase
            <input
              name="phrase"
              onChange={this.handlePhraseChange}
              value={this.state.phrase}
              />
          </label>
        </form>
      </div>
    )
  }
}

export default FlandersIndexContainer
