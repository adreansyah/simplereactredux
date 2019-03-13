import React, { Component } from 'react';
import { connect } from 'react-redux';
import { tests,tests2 } from '../actions';
import PropTypes from 'prop-types'
class Coba extends Component{
    
    componentWillMount(){
        console.log('MOUNTING COMPONENT');
    }
    
    componentWillUnmount(){
        console.log('UNMOUNTING COMPONENT')
    }

    render(){      
        console.log(this.props.testing2)
        return (
            <div>
                Hellow
            </div>
        )
    }
    
    componentDidMount(){
        this.props.tests({ 
            item: 'welcome' 
        });
        this.props.tests2({ 
            item: 'welcome' 
        });
        console.log('COMPONENT DID MOUNTING');
    }
}

const mapStateToProps = state => {  
    return ({
      testing:state.test,
      testing2:state.test2
    });
};
  
const mapDispatchToProps = {
    tests,
    tests2
};

Coba.propTypes = {
    // text: PropTypes.string.isRequired,
    // content: PropTypes.array.isRequired,
    // onPress: PropTypes.func.isRequired,
    // size: PropTypes.number.isRequired,
    // styles: PropTypes.object.isRequired,
    // isReady: PropTypes.bool.isRequired,
    testing:PropTypes.array.isRequired,
}

const CobaContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Coba);

export default CobaContainer;