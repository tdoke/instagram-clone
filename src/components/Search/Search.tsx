import * as React from "react";
import Autosuggest from "react-autosuggest";
import styled from "styled-components";
import { Row, Col } from "antd";
import { images, frameworks } from "framework-logos";
import { history } from "routes/history";

const StyledSuggestion = styled.div`
  padding: 0px 10px;
`;
const StyledWrapper = styled.div`
  .react-autosuggest__input {
    width: 100%;
    margin-top: 25px;
    border: 1px solid lightgrey;
    outline: none;
  }
  .react-autosuggest__suggestions-container {
    margin-top: 15px;
  }
  .react-autosuggest__suggestions-list {
    list-style: none;
    padding-left: 0;
  }
  .react-autosuggest__suggestion {
    padding: 10px 0px;
    position: relative;
    z-index: 9999;
    background-color: white;
    border-left: 1px solid #dbdbdb;
    border-right: 1px solid #dbdbdb;
    border-bottom: 1px solid #dbdbdb;
    cursor: pointer;
  }
  .react-autosuggest__suggestion--first {
    border-top: 1px solid #dbdbdb;
  }
  .react-autosuggest__suggestion:hover {
    background-color: #fafafa;
  }
`;

export interface SearchProps {}

interface Suggestion {
  name: string;
  year: number;
  img: string;
}
export interface SearchState {
  value: string;
  suggestions: Suggestion[];
}

// Teach Autosuggest how to calculate suggestions for any given input value.
const getSuggestions = (value: string): Suggestion[] => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0
    ? []
    : frameworks.filter(
        lang => lang.name.toLowerCase().slice(0, inputLength) === inputValue
      );
};

// When suggestion is clicked, Autosuggest needs to populate the input
// based on the clicked suggestion. Teach Autosuggest how to calculate the
// input value for every given suggestion.
const getSuggestionValue = (suggestion: Suggestion) => {
  history.push(`/profile/${suggestion.name}`);
  return suggestion.name;
};

// Use your imagination to render suggestions.
const renderSuggestion = (suggestion: Suggestion) => (
  <StyledSuggestion>
    <Row gutter={16} align="middle">
      <Col md={4}>
        <img src={images[suggestion.img]} />
      </Col>
      <Col md={20}>{suggestion.name}</Col>
    </Row>
  </StyledSuggestion>
);

class Search extends React.Component<SearchProps, SearchState> {
  constructor(props: SearchProps) {
    super(props);
    this.state = {
      value: "",
      suggestions: []
    };
  }
  onChange = (event: any, { newValue }: { newValue: string }) => {
    this.setState({
      value: newValue
    });
  };

  // Autosuggest will call this function every time you need to update suggestions.
  // You already implemented this logic above, so just use it.
  onSuggestionsFetchRequested = ({ value }: { value: string }) => {
    this.setState({
      suggestions: getSuggestions(value)
    });
  };

  // Autosuggest will call this function every time you need to clear suggestions.
  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  render() {
    const { value, suggestions } = this.state;

    // Autosuggest will pass through all these props to the input.
    const inputProps = {
      placeholder: "Type a javascript framework",
      value,
      onChange: this.onChange
    };

    // Finally, render it!
    return (
      <StyledWrapper>
        <Autosuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          inputProps={inputProps}
        />
      </StyledWrapper>
    );
  }
}

export default Search;
