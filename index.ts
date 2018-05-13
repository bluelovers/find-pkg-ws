/**
 * Created by user on 2018/5/14/014.
 */

import * as findYarnWorkspaceRoot from 'find-yarn-workspace-root';
import * as path from 'path';

function findWorkspacePackageJson(cwd?: string)
{
	let ws = findYarnWorkspaceRoot(cwd || process.cwd());

	if (ws)
	{
		return path.join(ws, 'package.json');
	}

	return null;
}

export = Object.assign(findWorkspacePackageJson, {
	findWorkspacePackageJson,
	findPkg: findWorkspacePackageJson,
	default: findWorkspacePackageJson,
});
