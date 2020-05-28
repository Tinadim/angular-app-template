import http from 'http';
import { Application } from 'express';
import { logger } from '@logger';
import { serverConfig } from './server-config';
import { registerShutdownHandler } from './shutdown-handler';

export function startServer(app: Application) {
    const server = http.createServer(app);
    const { port, useShutdownHandler } = serverConfig;

    return new Promise((resolve) => {
        server.listen(port, () => {
            if (useShutdownHandler) {
                registerShutdownHandler(server);
            }
            logger.info(`Server listening on port ${port}...`);
            resolve(server);
        });

        server.on('error', (error: any) => {
            logger.error('HTTP Server error:', error);
            throw error(error);
        });
    });
}
