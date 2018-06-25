import * as React from 'react';

interface GoProps {
    gotitle: string;
}

interface GoState {
    count: number;
}

export class GoComponent extends React.Component<GoProps, GoState> {
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
        };

        this.incCount = this.incCount.bind(this);
    };

    incCount (): void {
        this.setState({
            count: this.state.count + 1,
        });
    }

    render (): JSX.Element {
        return (
            <div>
                <h1>{this.props.gotitle}</h1>
                <div className="count-div">{this.state.count}</div>
                <button onClick={this.incCount}>+</button>
            </div>
        );
    }
}
