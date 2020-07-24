import React from 'react';
import MediumButton from './MediumButton'

class BackgroundWrapper extends React.Component {
  const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? "palevioletred" : "white"};
  `
    render() {
        return (
          <div style={{color: this.props.backgroundColor}}>
            <MediumButton text={"Click me!"}></MediumButton>
          </div>
        );
    }

}

BackgroundWrapper.defaultProps = {
    backgroundColor: "green"
};

export default BackgroundWrapper;