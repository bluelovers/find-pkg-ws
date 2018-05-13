"use strict";
const findYarnWorkspaceRoot = require("find-yarn-workspace-root");
const path = require("path");
function findWorkspacePackageJson(cwd) {
    let ws = findYarnWorkspaceRoot(cwd || process.cwd());
    if (ws) {
        return path.join(ws, 'package.json');
    }
    return null;
}
module.exports = Object.assign(findWorkspacePackageJson, {
    findWorkspacePackageJson,
    findPkg: findWorkspacePackageJson,
    default: findWorkspacePackageJson,
});
