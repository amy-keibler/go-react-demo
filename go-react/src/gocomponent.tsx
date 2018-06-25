import * as React from 'react';
import axios from 'axios';

interface GoProps {
    gotitle: string;
}

interface GoState {
    count: number;
}

interface InfoResponse {
    served_by: string,
    number: number
}

export class GoComponent extends React.Component<GoProps, GoState> {
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
        };

        this.incCount = this.incCount.bind(this);
        this.requestCount = this.requestCount.bind(this);
    };

    incCount (): void {
        this.setState({
            count: this.state.count + 1,
        });
    }

    requestCount (): void {
        axios("/api/v1/info").then((infoResponse) => {
            this.setState({
                count: infoResponse.data.number,
            });
        }).catch((error) => {
            console.log("error: " + error);
            this.setState({
                count: 0,
            });
        });
    }

    render (): JSX.Element {
        return (
            <div>
                <h1>{this.props.gotitle}</h1>
                <div className="count-div">{this.state.count}</div>
                <button className="increment" onClick={this.incCount}>+</button>
                <button className="request" onClick={this.requestCount}>?</button>
            </div>
        );
    }
}
