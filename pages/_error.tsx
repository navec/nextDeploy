import ErrorComponent from 'next/error';

class CustomError extends ErrorComponent {
  static getInitialProps() {
    const statusCode = 500;
    return { statusCode, title: 'CustomError', namespacesRequired: [] };
  }
}

export default CustomError;
