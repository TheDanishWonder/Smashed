const boosters = [
  'What a legend!',
  'Nou braai ons!',
  "You're a winner!",
  'Get lit!',
  'What a champ!',
  'Man of the year!',
  'Another one!',
  'Get some!',
  'That was impressive!',
  'A man among boys!',
  'Keep going!',
  'U wot m8?',
  'Seriously?',
  'The strong will survive!',
  'Get there!',
  'Shazam!',
  'Slam dunk!',
  'Home run!',
  'Well done!',
  "Ain't no thang!",
  'Boss mode engaged!',
  'Achievement unlocked!',
  'Level up!'
]

export default function getRandomMoraleBooster () {
  const i = Math.floor(Math.random() * boosters.length)
  return boosters[i]
}
