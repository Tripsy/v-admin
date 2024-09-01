import ValueError from '@/lib/exceptions/valueError';

interface RoutesElement {
  href: string;
  group: string | null;
}

interface Routes {
  [key: string]: RoutesElement;
}

class RoutesCollection {
  data: Routes = {};

  add(key: string, href: string, group?: string): void {
    this.data[key] = {
      href: href,
      group: group ?? null
    };
  }

  get(key: string, props?: object): string {
    return this.#resolveHref(key, props);
  }

  #resolveHref(key: string, props?: object): string {
    if (!this.data.hasOwnProperty(key)) {
      throw new ValueError('Route not defined for: `' + key + '`')
    }

    let href = this.data[key].href;

    if (props) {
      Object.entries(props).forEach(entry => {
        const [key, value] = entry;

        href = href.replace(':' + key, value);
      });
    }

    return href;
  }
}

let routes = new RoutesCollection();

routes.add('home', '/');
routes.add('dashboard', '/');
routes.add('project-list', '/dashboard/project', 'dashboard');
routes.add('project-view', '/dashboard/project/:key');

export default routes;
