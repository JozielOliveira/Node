describe('Routes: Users', () => {
  const Users = app.datasource.models.Users

  describe('GET /users', () => {
    const defaultUser = {
        email: 'admin@admin.com',
        password: 'password',
    }
    it('should return a vilidation of users', done => {
      request
      .post('/auth')
      .send(defaultUser)
      .end((err, res) => {
        expect(res.statusCode).to.eql(200)
        done(err)
      })
    })
  })
})
