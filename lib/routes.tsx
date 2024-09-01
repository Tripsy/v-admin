interface RoutesElement {
  path: string;
  group: string | null;
}

interface Routes {
  [key: string]: RoutesElement;
}

class RoutesCollection {
  data: Routes = {};

  add(key: string, path: string, group?: string): void {
    this.data[key] = {
      path: path,
      group: group ?? null
    };
  }

  get(key: string, props?: object): string {
    return this.#resolvePath(key, props);
  }

  #resolvePath(key: string, props?: object): string {
    if (this.data[key].path === undefined) {
      throw new ValueError('Route path not defined for: `' + path + '`');
    }

    let path = this.data[key].path;

    if (props) {
      Object.entries(props).forEach(entry => {
        const [key, value] = entry;

        path = path.replace(':' + key, value);
      });
    }

    return path;
  }
}

let routes = new RoutesCollection();

routes.add('home', '/');
routes.add('dashboard', '/');
routes.add('project-list', '/project', 'dashboard');
routes.add('project-view', '/project/:key');

export default routes;
