import React, { Component } from 'react'

export default class Try extends Component {
constructor(props) {
    super(props)
    this.state = {
        data: this.props.data
    }
}

    render() {
        return (
            <div>
{
this.state.data.map((data) => (
<p key={data}>
{data.name}
</p>
))


}
        </div>
        )
    }
}
