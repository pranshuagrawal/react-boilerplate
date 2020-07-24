import React from 'react';
import { connect } from 'react-redux';
import { selectors as loginSelectors } from '../../store/login'

class Home extends React.Component {
    render(){
        const { login } = this.props;
        return(
            <div className="container my-5">
                <p>Hello World 1</p>
                <p>{JSON.stringify(login)}</p>
                <p>Hello World 2</p>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log("Working");
    console.log(state);
    return {
        login: loginSelectors.getState(state)
    }
}

export default connect(mapStateToProps,null)(Home);