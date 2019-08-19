import chai from 'chai';
import chaiHttp from 'chai-http';
import { inputValidation, deleteAttribute, optimalFunction } from './api/api'
import app from './app';

const { expect } = chai

chai.use(chaiHttp);

describe('Test functions', () => {
    it('DeleteAttribute Should return other properties without deleted property', () => {
        expect(deleteAttribute({ type: 'durban', crux: 'Indices', color: 'green', title: 'Indict the idiot' }, 'type').to.include({ crux: 'Indices', color: 'green', title: 'Indict the idiot' }));
    });

    it('optimalFunction Should return index', () => {
        expect(deleteAttribute(optimalFunction([3,2,5,4], [2,3,4,2])).to.equal(0));
    });

    it('inputValidation should return valid', async () => {
        const res = await chai.request(app)
        .post('/post')
        .send({ type: 'durban', crux: 'Indices', color: 'green', title: 'Indict the idiot' });
        expect(res).to.equal.a('valid')
    })

    it('inputValidation should return array', async () => {
        const res = await chai.request(app)
        .post('/post')
        .send({ crux: 'Indices', color: 'green', title: 'Indict the idiot' });
        expect(res).to.equal.a(['type']);
    })
});