import chai from 'chai'
import chaiHttp from 'chai-http'
import chaiJsonSchema from 'chai-json-schema'
import app from 'server'

const { expect } = chai;

chai.use(chaiHttp);
chai.use(chaiJsonSchema);

let request = chai.request

export {request, app}