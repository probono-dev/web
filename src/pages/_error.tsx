import React from 'react';
import { NextContext } from 'next';

interface ErrorProps {
  statusCode: number;
}

class Error extends React.Component<ErrorProps> {
  public static getInitialProps({ res, err }: NextContext) {
    const statusCode = res
      ? res.statusCode
      : err
      ? ((err as unknown) as Error & ErrorProps).statusCode
      : null;
    return { statusCode };
  }

  public render() {
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
