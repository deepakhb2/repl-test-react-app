import React from 'react';

class TestReact extends React.Component {
    constructor(props) {
        super(props);
        this.updateResults = this.updateResults.bind(this);
        this.createData = this.createData.bind(this);
        this.rows = this.rows.bind(this);
        this.state = {results: this.rows()}
    }

    rows() {
      return [
        this.createData("https://www.youtube.com/watch?v=ug50zmP9I7s", 'Online', 2, 24, 'Cam1', true),
        this.createData("https://www.youtube.com/watch?v=Bey4XXJAqS8", 'Offline', 2, 37, 'Am2', true),
        this.createData("https://www.youtube.com/watch?v=Bey4XXJAqS8", 'Online', 2, 24, 'Zam3', false),
        this.createData("https://www.youtube.com/watch?v=ug50zmP9I7s", 'Offline', 2, 67, 'Dam4', false),
        this.createData("https://www.youtube.com/watch?v=Bey4XXJAqS8", 'Online', 2, 49, 'Lam5', false),
      ]
    }
    
    createData(videos, status, model, manage, device, favourite) {
      return { videos, status, model, manage, device, favourite };
    }

    updateResults() {
      const newRows = [...this.rows()];
      const newData=[{videos:'youtubeURL'},{status:'Online'},{model:4},{manage:49},{device:'Lam6'},{favourite:false}]
      this.setState({ results: newRows.concat(newData) }); 
    }

    render() {
        return(
          <>
            <button onClick= { () => this.updateResults()}>Click me to concat records</button>
            <div>
              {this.state.results.length} Records
            </div>
          </>
        )
    }
}

export default TestReact;