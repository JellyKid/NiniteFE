export function parseAD(settings) {
  if(!settings.server || !settings.domain || !settings.user || !settings.password){
    throw new Error('Missing setting!');
  }
  let baseDN = settings.domain.replace(/^([^\.]+)\.([^\.]+)$/,(match,p1,p2) => {
    return 'dc=' + p1 + ',dc=' + p2;
  });
  if (!baseDN) throw new Error('baseDN did not parse correctly');
  let server = /\./.test(settings.server) ? settings.server : settings.server + '.' + settings.domain;
  let user = /[\@|\\|\/]/.test(settings.user) ? settings.user : settings.user + '@' + settings.domain;
  return {
    url: server,
    baseDN: baseDN,
    username: user,
    password: settings.password
  };
}
