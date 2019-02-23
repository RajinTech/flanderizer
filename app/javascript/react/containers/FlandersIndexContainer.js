import React, { Component } from 'react';

class FlandersIndexContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phrase: {},
      output: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handlePhraseChange = this.handlePhraseChange.bind(this)
  }

  handlePhraseChange(event) {
  let newPhrase = event.target.value
  console.log(event.target.value);
  this.setState({ phrase: newPhrase })
  }

  handleSubmit(event){
    event.preventDefault();
    let formPayload = this.state.phrase.split(" ");
    console.log("payload");
    console.log(formPayload);
    let pergatory = formPayload.map((word) => {
      if(word.endsWith("r")){
        return (word.concat("ino"))
      } else if (word.endsWith("s")){
        return (word.slice(0, -1).concat("inos"))
      } else if (word == "hi" || word == "Hi"){
        return (word.concat(" didily ho"))
      } else if (word == "do" || word == "Do"){
        return ("ding dong diddly " + word)
      } else {
        return (word)
      }
    })
    console.log("pergatory");
    console.log(pergatory);
    this.setState({ output: pergatory.join(" ")})


  }

  render(){
    let output = this.state.output
    return(
      <div>
      <div className="row" >
        <form onSubmit={this.handleSubmit}>
          <label className="input-style">Enter a Phrase
            <input
              name="phrase"
              onChange={this.handlePhraseChange}

              />
          </label>
          <input className="flanderize" type="submit" value="Flanderize"/>
        </form>
        {output}
      </div>
        <div className="row">
        <div id="ned-flanders">
<div className="head">
  <div className="hair-top hair"></div>
  <div className="hair-side hair"></div>
  <div className="no-border neck-bottom"></div>
  <div className="no-border neck-left"></div>
  <div className="body lip"></div>
  <div className="no-border body head-main"></div>
  <div className="no-border hair-line1 hair-line"></div>
  <div className="no-border hair-line2 hair-line"></div>
  <div className="no-border hair-line3 hair-line"></div>
  <div className="no-border hair-line4 hair-line"></div>
  <div className="no-border hair-line5 hair-line"></div>
  <div className="body head-top"></div>
  <div className="no-border body eye-bulge"></div>
  <div className="no-border body head-top-inner"></div>
  <div className="no-border neck-right"></div>
  <div className="body ear">
<div className="no-border inner"></div>
  </div>
  <div className="no-border sideburn hair"></div>
  <div className="no-border body head-side"></div>

  <div className="left-eye eye">
<div className="no-border pupil"></div>
<div className="no-border body eyelid-top"></div>
<div className="no-border body eyelid-bottom"></div>
  </div>

  <div className="right-eye eye">
<div className="no-border pupil"></div>
<div className="no-border body eyelid-top"></div>
<div className="no-border body eyelid-bottom"></div>
  </div>

  <div className="no-border glasses"></div>

  <div className="no-border mouth-top"></div>
  <div className="no-border mouth-left"></div>
  <div className="no-border mouth-right"></div>
  <div className="no-border mouth-bottom"></div>
  <div className="no-border mouth-inner"></div>
  <div className="no-border tongue"></div>

  <div className="moustache">
<div className="no-border moustache-hair1 hair left"></div>
<div className="no-border moustache-hair2 hair left"></div>
<div className="no-border moustache-hair3 hair left"></div>
<div className="no-border moustache-hair4 hair right"></div>
<div className="no-border moustache-hair5 hair right"></div>
<div className="no-border moustache-hair6 hair right"></div>
  </div>

  <div className="body nose"></div>





</div>




</div>

</div>
      </div>
    )
  }
}

export default FlandersIndexContainer
