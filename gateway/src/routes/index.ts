import { Router } from "express";
import fs from "fs";
import path from "path";

const router = Router();

function loadRoutesRecursively(dir: string, parentPath = "") {
  fs.readdirSync(dir).forEach((item) => {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      loadRoutesRecursively(fullPath, `${parentPath}/${item}`);
    } else if (!item.startsWith("index")) {
      const routeModule = require(fullPath);
      const route = routeModule.default || routeModule;
      const routeName = item.replace(/Routes\.(ts|js)$/, "");
      const routePath = `${parentPath}/${routeName}`;

      router.use(routePath, route);
    }
  });
}

loadRoutesRecursively(path.join(__dirname));

export default router;