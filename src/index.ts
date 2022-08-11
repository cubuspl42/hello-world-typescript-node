import * as ReactDOMServer from 'react-dom/server';
import { App } from './app';

process.stdout.write(
    ReactDOMServer.renderToString(App()) + "\n",
);
