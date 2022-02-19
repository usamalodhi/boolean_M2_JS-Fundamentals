const { a, b, c, d, e, f, g, h } = require('../src/js-fundamentals-extra')

describe("SecondsInHours", () => {
  it("Returns 3,600 seconds for 1 hour", () => {
    expect(a(1)).toEqual(3600)
  })
  it("Returns 7,200 seconds for 2 hours", () => {
    expect(a(2)).toEqual(7200)
  })
  it("Returns 25,200 seconds for 7 hours", () => {
    expect(a(7)).toEqual(25200)
  })
})

describe("MilesTravelled", () => {
  it("Returns 10 miles when travelling 10mph for 60 minutes", () => {
    expect(b(10, 60)).toEqual(10)
  })
  it("Returns 5 miles when travelling 10mph for 30 minutes", () => {
    expect(b(10, 30)).toEqual(5)
  })
  it("Returns 20 miles when travelling 10mph for 120 minutes", () => {
    expect(b(10, 120)).toEqual(20)
  })
  it("Returns 1 miles when travelling 10mph for 5 minutes", () => {
    expect(b(10, 5)).toEqual(1)
  })
  it("Returns 100 miles when travelling 50mph for 120 minutes", () => {
    expect(b(50, 120)).toEqual(100)
  })
})

describe("KilometersToMiles", () => {
  it("Returns 6 miles for 10 kilometers", () => {
    expect(c(10)).toEqual(6)
  })
  it("Returns 3 miles for 5 kilometers", () => {
    expect(c(5)).toEqual(3)
  })
  it("Returns 0 miles for 0 kilometers", () => {
    expect(c(0)).toEqual(0)
  })
  it("Returns 1 mile for 1.6 kilometers", () => {
    expect(c(1.6)).toEqual(1)
  })
  it("Returns 2 miles for 3.2 kilometers", () => {
    expect(c(3.2)).toEqual(2)
  })
})

describe("MakeSentence", () => {
  it("'Hello world' returns 'Hello World.'", () => {
    expect(d("Hello world")).toEqual('Hello world.')
  })
  it("'april is the cruelest month' returns 'April is the cruelest month.'", () => {
    expect(d("april is the cruelest month")).toEqual('April is the cruelest month.')
  })
  it("'This is already a sentence.' returns 'This is already a sentence.'", () => {
    expect(d("This is already a sentence.")).toEqual('This is already a sentence.')
  })
  it("'hello world!' returns 'Hello World!'", () => {
    expect(d("hello world!")).toEqual('Hello world!')
  })
  it("'Who goes there?' returns 'Who goes there?'", () => {
    expect(d("Who goes there?")).toEqual('Who goes there?')
  })
})

describe("fileExtension", () => {
  it("image.png returns png", () => {
    expect(e("image.png")).toEqual('png')
  })
  it("file.old.pdf returns pdf", () => {
    expect(e("file.old.pdf")).toEqual('pdf')
  })
  it("temp returns empty string", () => {
    expect(e("temp")).toEqual('')
  })
})

describe("range", () => {
  it("[1,2,8] returns 7", () => {
    expect(f([1,2,8])).toEqual(7)
  })
  it("[1,1,1,1,1] returns 0", () => {
    expect(f([1,1,1,1,1,1])).toEqual(0)
  })
  it("[-10,21,13,100,1,-100] returns 200", () => {
    expect(f([-10,21,13,100,1,-100])).toEqual(200)
  })
})

describe("checkTransactions", () => {
  it("Transactions [10, 5, 10] applied to 0 starting balance returns true", () => {
    expect(g([10, 5, 10], 0, 0)).toEqual(true)
  })
  it("Transactions [-10] applied to 0 starting balance returns false", () => {
    expect(g([-10], 0, 0)).toEqual(false)
  })
  it("Transactions [10, 5, -10] applied to 0 starting balance returns true", () => {
    expect(g([10, 5, -10], 0, 0)).toEqual(true)
  })
  it("Transactions [10, 5, -10, -5] applied to 0 starting balance returns true", () => {
    expect(g([10, 5, -10, -5], 0, 0)).toEqual(true)
  })
  it("Transactions [10, 5, -10, -10] applied to 0 starting balance returns false", () => {
    expect(g([10, 5, -10, -10], 0, 0)).toEqual(false)
  })
  it("Transactions [10, 5, -10, -10] applied to 10 starting balance returns true", () => {
    expect(g([10, 5, -10, -10], 10, 0)).toEqual(true)
  })
  it("Transactions [-10, -20] applied to 35 starting balance returns true", () => {
    expect(g([-10, -20], 35, 0)).toEqual(true)
  })
  it("Transactions [-10, -20] applied to 20 starting balance with 15 overdraft returns true", () => {
    expect(g([-10, -20], 20, 15)).toEqual(true)
  })
  it("Transactions [-10, -20] applied to 20 starting balance with 5 overdraft returns false", () => {
    expect(g([-10, -20], 20, 5)).toEqual(false)
  })
})

const films = [
  {
    name:'The Power Of The Dog', 
    genres: [
      'Drama', 
      'Western'
    ]
  },
  {
    name:'Dune', 
    genres: [
      'Sci-Fi'
    ]
  },
  {
    name: 'The Matrix Resurrections', 
    genres: [
      'Sci-Fi'
    ]
  },
  {
    name:'The Last Duel', 
    genres: [
      'Drama', 
      'History'
    ]
  },
]

describe("filmsInGenre", () => {
  it("'History' returns 'The Last Duel' only", () => {
    expect(h(films, 'History')).toEqual(['The Last Duel'])
  })
  it("'Sci-Fi' returns 'The Matrix Resurrections' and 'Dune'", () => {
    expect(h(films,'Sci-Fi')).toEqual(['Dune', 'The Matrix Resurrections'])
  })
  it("'Drama' returns 'The Power Of The Dog' and 'The Last Duel'", () => {
    expect(h(films,'Drama')).toEqual(['The Power Of The Dog', 'The Last Duel'])
  })
})