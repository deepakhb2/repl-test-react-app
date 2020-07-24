import React from 'react';

export default class ExitModal extends React.Component {
    constructor(props){
        super(props);

        this.modalAppears = this.modalAppears.bind(this);
        this.modalDisappears = this.modalDisappears.bind(this);

        this.state = {
            visibility: false
        }
    }

    modalAppears() {
        this.setState = {
            visibility: true
        }
    }

    modalDisappears() {
        this.setState = {
            visibility: false
        }
    }


    render() {
        if(this.state.visibility === false){
            return null
        } else {
            return(
                <div className="exit-modal">
                    Content here
                </div>
            );
        }
    }
}