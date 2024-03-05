class Toggle extends React.Component {
    constructor(props){
        super(props);

        this.state = { isToggleOn : true };
        // callback에서 `this`를 사용하기 위해서는 바인딩을 필수적으로 해줘야 합니다.
        // bind 하는 이유 자바 스크립트에서 기본적으로 클래스 함수들이 바운드되지 않음 바운드를 하지 않으면 this.handleClick은  undefined라서 사용할 수 없음
        this.handleClick = this.handleClick.bind(this);
    }

    // 일반적인 함수를 선언하는것과 같음
    handleClick(){
        this.setState(prevState => ({
            isToggleOn: ! prevState.isToggleOn
        }))
    }

    render(){
        return (
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? '켜짐' : '꺼짐'}
            </button>
        )
    }
}

function MyButton(props){
    const handleDelete = (id, event) => {
        console.log(id, event.target);
    };

    return (
        <button onClick={(event) => handleDelete(1, event)}>
            삭제하기
        </button>
    )
}