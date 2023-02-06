import React from 'react'
import APIService from '../service/APIService'

export default class DocComponent extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      docs: []
    }
  }

  componentDidMount() {
    APIService.getDoc().then((data) => {
      this.setState({docs: data.data._embedded.documentVResponseList})
      console.log(this.state.data)
    })
    .catch(function (ex) {
      console.log('Response parsing failed. Error: ', ex);
    });
  }

  render() {
    return (
        <div>
          <h2 className="text-center">Doc Details</h2>
          <table className="table table-striped">
            <thead>
            <tr>
              <th>Doc author</th>
              <th>Doc description</th>
              <th>Doc title</th>
            </tr>
            </thead>
            <tbody>
            {
              this.state.docs.map(doc =>
                  <tr key={doc.id}>
                    <td>{doc.author}</td>
                    <td>{doc.description}</td>
                    <td>{doc.title}</td>
                  </tr>
              )
            }
            </tbody>
          </table>
        </div>
    )
  }
}

