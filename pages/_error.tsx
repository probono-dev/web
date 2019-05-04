import React from 'react';
import { NextContext } from 'next';

type ErrorProps = {
    statusCode: number;
}

class Error extends React.Component<ErrorProps> {
    static getInitialProps({ res, err }: NextContext) {
        const statusCode = res ? res.statusCode : err ? err.statusCode : null;
        return { statusCode };
    }

    render() {
        return (
            <p>
                {this.props.statusCode
                    ? `An error ${this.props.statusCode} occurred on server`
                    : 'An error occurred on client'}
            </p>
        );
    }
}

export default Error;