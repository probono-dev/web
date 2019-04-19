import * as express from 'express';
import * as next from 'next';
import * as compression from 'compression';

const { PORT = '3000' } = process.env;

const port = parseInt(PORT, 10);
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

/**
 * Convenience method to create route handlers. It removes params in path definition to look up file to use
 * and passes query params and search query as the `query` to the `Next JS` component that gets rendered.
 *
 * # Example
 *
 * We want to respond to the path: `/projects/:projectId/by/:userId`
 *
 * We have to create a component inside the `pages` directory: `./pages/projects/by`
 *
 * Our route definition will look like this:
 *
 * ```js
 * createHandler(server, '/projects/:projectId/by/:userId');
 * ```
 *
 * and our corresponding component can get these props:
 *
 * ```js
 * // pages/projects/by.jsx
 * // ...
 * export default class ProjectsBy extends Component {
 *   static getInitialProps({ query: { projectId, userId } }) {
 *      return { projectId, userId };
 *   }
 *
 *   render() {
 *     const { projectId, userId } = this.props;
 *     return <div>Project id: {projectId} by user: {userId}</div>
 *   }
 * }
 * ```
 *
 * @param {express.Express} server - instance of an Express server we want to decorate with the new path
 * @param {string} path - path to the component we want to use and parameters
 */
const registerHandler = (server: express.Express, path: string) => {
  server.get(path, (req, res) => {
    return app.render(req, res, path.replace(/\/:[a-z]+/, ''), {
      ...req.query,
      ...req.params,
    });
  });
};

// Let Next JS prepare our application, then...
app.prepare().then(() => {
  // Create an Express server, which will serve our static files
  const server = express();

  // Enable compression when client requests it
  server.use(compression());

  // Register handlers

  registerHandler(server, '/');

  registerHandler(server, '/connect');

  server.use(express.static('static'));

  // Let Next JS handle all other routes too
  server.get('*', (req, res) => {
    return handle(req, res);
  });

  // Tell the server to listen to requests at specified port
  server.listen(port, () => {
    console.log(`> Ready on port: ${port} 🚀`);
  });
});
