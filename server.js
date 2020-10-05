import express from 'express'
import cors from 'cors'
import v1 from 'api/v1'
import morgan from 'morgan'
import params from 'strong-params'

let app = express()

app.use(morgan('combined'))
app.use(cors())
app.use(express.json())
app.use(params.expressMiddleware())

app.use('/api/v1', v1)

app.get('*', function(req, res) {
    res.status(404).json({error: "Resource not found"})
});

export default app