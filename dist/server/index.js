"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable */
const express_1 = __importDefault(require("express"));
const next_1 = __importDefault(require("next"));
const middleware_1 = __importDefault(require("next-i18next/middleware"));
const next_config_1 = __importDefault(require("../next.config"));
const i18n_1 = __importDefault(require("../i18n"));
const port = process.env.PORT || 3000;
const app = next_1.default({ dev: process.env.NODE_ENV !== 'production', conf: next_config_1.default });
const handle = app.getRequestHandler();
(async () => {
    await app.prepare();
    const server = express_1.default();
    await i18n_1.default.initPromise;
    server.use(middleware_1.default(i18n_1.default));
    server.get('*', (req, res) => handle(req, res));
    await server.listen(port);
    console.log(`> Ready on http://localhost:${port}`); // eslint-disable-line no-console
})();
//# sourceMappingURL=index.js.map