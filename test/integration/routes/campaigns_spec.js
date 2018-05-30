describe('Routes: Campaigns', () => {

    const Campaigns = app.datasource.models.Campaigns
    
    const defaultCampaigns = {
        id : 100000,
        description: 'descricao da campanha',
        logotipo : 'logotipo',
        how_works : 'como trabalhamos',
        how_pay : 'como contribuir',
        imagem_promo : 'imagem promocional',
        hashtag : '#DoeAmor',
        facebook_page : "APAE",
    }
    const expectedCampaigns = {
        id : 100000,
        description: 'descricao da update',
        logotipo : 'logotipo',
        how_works : 'como trabalhamos',
        how_pay : 'como contribuir',
        imagem_promo : 'imagem promocional',
        hashtag : '#DoeAmor',
        facebook_page : "APA",
    }

    describe('POST /campaign', () => {
        it('should post a campaign', done => {
            request
            .post('/campaign')
            .send(defaultCampaigns)
            .end((err, res) => {
            expect(res.body.name).to.eql(defaultCampaigns.name)
            expect(res.body.id).to.eql(defaultCampaigns.id)
            done(err)
            })
        })
    })
    
    describe("GET / Campaigns", () => {
        it("should return a list of campaigns", done => {
            request
            .get('/campaign')
            .end((err , res) => {
                expect(res.body.description).to.eql(defaultCampaigns.description)
                expect(res.body.logotipo).to.eql(defaultCampaigns.logotipo)
                expect(res.body.how_works).to.eql(defaultCampaigns.how_works)
                expect(res.body.how_pay).to.eql(defaultCampaigns.how_pay)
                expect(res.body.imagem_promo).to.eql(defaultCampaigns.imagem_promo)
                expect(res.body.hashtag).to.eql(defaultCampaigns.hashtag)
                expect(res.body.facebook_page).to.eql(defaultCampaigns.facebook_page)
                expect(res.body.active).to.eql(true)
                done(err)
            })
        })
    })
    
    describe('PUT /campaign', () => {
        it('should update a campaign', done => {
          request
          .put('/campaign')
          .send(expectedCampaigns)
          .end((err, res) => {
              console.log(res.body)
            expect(res.body).to.eql([1])
            done(err)
          })
        })
    })
    
    describe('DELETE /campaign', () => {
        it('should delete a campaing', done => {
            request
            .delete('/campaign')
            .send(defaultCampaigns)
            .end((err, res) => {
            expect(res.statusCode).to.eql(200)
            done(err)
            })
        })
    })
 })