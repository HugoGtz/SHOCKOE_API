import md5 from 'md5'

export default (myPlaintextPassword) => {
    return md5(myPlaintextPassword)
}