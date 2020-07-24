import React from 'react';

class MediumButton extends React.PureComponent {
    render() {
        return <button style={{ width: 100, height: 50 }}>{this.props.text}</button>;
    }
}

export default MediumButton;