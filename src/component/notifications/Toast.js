import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ToastContainer } from "react-toastify";


class Toast extends Component {
    render() {
        return(
            <div>
                <ToastContainer />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}
export default connect(mapStateToProps)(Toast)
    