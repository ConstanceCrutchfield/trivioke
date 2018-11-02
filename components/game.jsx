/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
/* eslint-disable react/sort-comp */
/* eslint-disable no-undef */
/* eslint-disable no-restricted-globals */
import React from 'react';
import Lifelines from './lifelines.jsx';
import Trivia from './trivia.jsx';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currTeam: null,
      question: null,
      teams: {
        team1: [],
        team2: [],
        team3: [],
        team4: [],
      },
    };
    this.triviaRequest = this.triviaRequest.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  triviaRequest() {
    const { category, diff } = this.props;
    const url = `https://opentdb.com/api.php?amount=1&category=${category}&difficulty=${diff}&type=multiple`;
    fetch(url)
      .then(res => res.json())
      .then(data => this.setState({ question: data.results[0] }))
      .catch((err) => { console.error(err); });
  }

  componentDidMount() {
    this.triviaRequest();
  }

  handleChange() {
    this.setState({
    });
  }

  render() {
    const { question } = this.state;
    return (
      <div>
        <Lifelines handleChange={this.handleChange} />
        <Trivia
          triviaRequest={this.triviaRequest}
          handleChange={this.handleChange}
          question={question}
        />
      </div>
    );
  }
}
export default Game;
