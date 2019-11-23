module.exports = (app, authenticate, axios) => {
  const instances = [{ endpoint: '/netdata-home', upstream: process.env.NETDATA_HOME_URL }];
  // var username = 'ops';
  // var password = '48520';
  // var basicAuth = 'Basic ' + btoa(username + ':' + password);

  instances.forEach(({ endpoint, upstream }) => {
    app.get(endpoint, authenticate, ({ res }) => {
      axios
        .get(upstream + '/api/v1/info', {
          auth: {
            username: 'ops',
            password: '486520'
          },
          headers: {
            'X-Auth-Token': 'a9f6c6d0-0d8d-11ea-b9a2-0242ac170011'
          }
        })
        .then(response => res.send({ info: response.data }));
    });
  });
};
