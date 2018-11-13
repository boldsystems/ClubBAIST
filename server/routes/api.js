const router = require('koa-router');

module.exports = class ApiRoute {
  constructor(client, app) {
    this.client = client;
    this.app = app;
    this.router = new router({
      prefix: '/api'
    });

    this.initializeRoutes();
  }

  initializeRoutes() {
    this.router.param('id', async (id, ctx, next) => {
      ctx.state.id = id;
      await next();
    });

    this.router.get('/teetimes', this.getTeeTimes.bind(this));
    this.router.put('/teetimes', this.putTeeTimes.bind(this));
    this.router.delete('/teetimes', this.deleteTeeTimes.bind(this));

    this.router.get('/members/:id', this.getMember.bind(this));
    this.router.get('/members/:id/teetimes', this.getMemberTeetimes.bind(this));

    this.app.use(this.router.routes())
      .use(this.router.allowedMethods());
  }

  async getTeeTimes(ctx, next) {
    ctx.status = 200;
    ctx.body = { message: 'hi' };
  }

  async putTeeTimes(ctx, next) {
    let body = ctx.request.body;
    console.log(ctx.request.body);
    let res = await this.client.manager.reserveTeeTime(body.MemberID, body.PlayerCount, body.CartCount, body.Date);
    ctx.assert(res,
      400, 'Invalid request');
    ctx.status = 200;
    ctx.body = { message: 'OK' };
  }

  async deleteTeeTimes(ctx, next) {

  }

  async getMember(ctx, next) {
    let member = await this.client.manager.getMember(ctx.state.id);
    ctx.assert(member, 404, 'Member not found');
    ctx.status = 200;
    ctx.body = member.dataValues;
  }

  async getMemberTeetimes(ctx, next) {

  }


};
