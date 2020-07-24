import React from 'react';
import MediumButton from './MediumButton'

class BackgroundWrapper extends React.Component {
  
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