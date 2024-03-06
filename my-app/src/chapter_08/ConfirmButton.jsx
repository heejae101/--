import React from "react";

class ConfirmButton extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            isConfirmed: false,
        };

        // 컴펌버튼
        // this.handleConfirm = this.handleConfirm.bind(this);

    }

    // handleConfirm() {
    //     this.setState((prevState) => ({
    //         isConfirmed: !prevState.isConfirmed,
    //     }));
    // }

    // 이렇게 할 수 있음
    handleConfirm = () => {
        this.setState((prevState) => ({
            isConfirmed : !prevState.isConfirmed,
        }));
    }

    render(){
        return(
            <button
                onClick={this.handleConfirm}
                disabled={this.state.isConfirmed}
            >
                    {this.state.isConfirmed ? "확인됨" : "확인하기"}
            </button>
        );
    }
}

export default ConfirmButton;