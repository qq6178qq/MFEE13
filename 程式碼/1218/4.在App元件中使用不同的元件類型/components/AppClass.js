import React from 'react'

class AppClass extends React.Component {
  constructor() {
    super()
    this.state = {
      total: 0, //init value
    }
  }

  render() {
    return (
      <>
        <h1
          onClick={() => {
            this.setState({
              total: this.state.total + 1,
            })
          }}
        >
          {this.state.total}
        </h1>
      </>
    )
  }
}

export default AppClass
