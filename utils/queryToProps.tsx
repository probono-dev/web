import React, { PureComponent, ComponentType } from 'react';

export type QueryProps = {
  [key: string]: string;
}

export /**
 * Next Js gives us the query parameters in the `getInitialProps` static method
 * This wraps a class so that we can compose this with functional components and still
 * have access to the query params via props
 *
 * @template P - prop types of the wrapped component
 * @param {ComponentType<P>} Component - component we want to use query params in
 * @returns the wrapped component that will receive the query params as props
 */
const queryToProps = <P extends object>(Component: ComponentType<P>) => {
  class Wrapped extends PureComponent<P & QueryProps> {
    static getInitialProps({ query }: any) {
      return { ...query };
    }

    render() {
      return <Component {...this.props} />;
    }
  }

  return Wrapped;
};
