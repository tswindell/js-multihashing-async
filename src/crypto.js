'use strict'

const sha3 = require('js-sha3')

const toCallback = require('./to-callback')
const sha = require('./crypto-sha1-2')

const toBuf = (doWork, other) => (input) => {
  return new Buffer(doWork(input, other), 'hex')
}

module.exports = {
  sha1: sha.sha1,
  sha2256: sha.sha2256,
  sha2512: sha.sha2512,
  sha3512: toCallback(toBuf(sha3.sha3_512)),
  sha3384: toCallback(toBuf(sha3.sha3_384)),
  sha3256: toCallback(toBuf(sha3.sha3_256)),
  sha3224: toCallback(toBuf(sha3.sha3_224)),
  shake128: toCallback(toBuf(sha3.shake_128, 256)),
  shake256: toCallback(toBuf(sha3.shake_256, 512)),
  keccak224: toCallback(toBuf(sha3.keccak_224)),
  keccak256: toCallback(toBuf(sha3.keccak_256)),
  keccak384: toCallback(toBuf(sha3.keccak_384)),
  keccak512: toCallback(toBuf(sha3.keccak_512))
}
