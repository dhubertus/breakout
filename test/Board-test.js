var assert =require('chai').assert
var Board = require('../lib/Board')

describe('Board', function() {
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')
  let board = new Board({ ctx })

  it ('should be a function', function() {
    assert.isFunction(Board)
  })

  it ('should instantiate a new object', function() {
    assert.isObject(board)
  })

  it('should take a width', function() {
    assert.equal(board.width, 500)
  })

  it('should take a height', function() {
    assert.equal(board.height, 500)
  })

  it('should instantiate a new paddle', function() {
    assert.isObject(board.paddle)
    assert.equal(board.paddle.x, 225)
    assert.equal(board.paddle.height, 10)
    assert.equal(board.paddle.width, 50)
  })

  it('should have an array of level 1 blocks', function() {
    assert.lengthOf(board.block, 60)
  })

  it('should have array of blocks with width 50', function() {    // var board = new Board({})
    assert.equal(board.block[0].width, 50)
  })

  it('should have an array of blocks with height 25', function() {
    assert.equal(board.block[0].height, 25)
  })

  it('should have the first row painted redish but not the second', function() {    // var board = new Board({})
    assert.equal(board.block[0].color, '#bc3654')
    assert.notEqual(board.block[11].color, '#bc3654')
  })


  it('should have an array of level 2 blocks', function() {
    assert.lengthOf(board.block2, 60)
  })

  it('should have an array level 2 blocks, each with width: 50 and height 25', function() {
    assert.equal(board.block2[0].width, 50)
    assert.equal(board.block2[0].height, 25)
  })

  it('should have an array of blocks for winning', function() {
    assert.lengthOf(board.block3, 90)
  })

  it('should start on level one', function() {
    assert.equal(board.level, 1)
  })

  it('should have a score of 0 on start', function() {
    assert.equal(board.score, 0)
  })

  it('should have 5 lives on start', function() {
    assert.equal(board.lives, 5)
  })

  it('should instantiate a new ball object', function() {
    assert.isObject(board.ball)
    assert.equal(board.ball.x, 240)
    assert.equal(board.ball.y, 440)
    assert.equal(board.ball.width, 10)
    assert.equal(board.ball.height, 10)
    assert.equal(board.ball.color, '#bc3654')
  })
})
