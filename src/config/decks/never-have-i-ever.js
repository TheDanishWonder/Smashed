import generalDeck from './general-deck'
import { getRandomPlayer, getLowSip } from './utils'

export default {
  icon: 'pipe-disconnected',
  description: 'Always gets all the secrets out',
  cards: [
    ...generalDeck,
    () => `Never have i ever been attracted to fuck boys/girls, losers take ${getLowSip()} sips`,
    () => `Never have i ever been had a tinder, bumble, grindr or badoo, losers take ${getLowSip()} sips`,
    () => `Never have i ever been a fuck boys/girls, losers take ${getLowSip()} sips`,
    () => `Never have i ever been hooked up in a club/bars bathroom, losers take ${getLowSip()} sips`,
    () => `Never have i ever given somebody else a STD, losers take ${getLowSip()} sips`,
    () => `Never have i ever cockblocked on purpose, losers take ${getLowSip()} sips`,
    () => `Everybody drinks ${getLowSip()} sips if your dad name is William`,
    () => `Everybody drinks ${getLowSip()} sips if your dad name is James`,
    () => `Everybody drinks ${getLowSip()} sips if your dad name is John`,
    () => `Everybody drinks ${getLowSip()} sips if your dad name is Robert`,
    () => `Everybody drinks ${getLowSip()} sips if your dad name is Michael`,
    () => `Never have i ever walked the walk of shame, losers take ${getLowSip()} sips`,
    () => `Never have i ever , losers take ${getLowSip()} sips`,
    (players) => {
        const player = getRandomPlayer(players)
        return `${player} every time ${player} drink you cheer them on and vise versa, for the next ${getLowSip()} rounds.`
      },
    () => `Everyone that is getting laid tonight take ${getLowSip()} sips.`,
    () => `Never have i ever dumped a person cause of your body count, losers take ${getLowSip()} sips`,
    () => `Never have i ever driven past my destination because i was too drunk or asleep, losers take ${getLowSip()} sips`,
    () => `Never have i ever masturbated multiple times in one day, losers take ${getLowSip()} sips`,
    () => `Never have i ever hooked up with more than one person from the same family, losers take ${getLowSip()} sips`,
    () => `Never have i ever been caught during sesx, losers take ${getLowSip()} sips`,
    () => `Never have i ever thrown up during a blowjob, losers take ${getLowSip()} sips`,
    () => `Never have i ever broke my dick, losers take ${getLowSip()} sips`,
    () => `Never have i ever lied about who i have had sex with, losers take ${getLowSip()} sips`,
    () => `Never have i ever sexted, losers take ${getLowSip()} sips`,
    () => `Never have i ever had a eskimo brother/sister, losers take ${getLowSip()} sips`,
    () => `Never have i ever pissed myself while drunk, losers take ${getLowSip()} sips`,
    () => `Never have i ever made out with somebody after i threw up, losers take ${getLowSip()} sips`,
    () => `Never have i ever hooked up with a stranger, losers take ${getLowSip()} sips`,
    () => `Never have i ever given out a fake number, losers take ${getLowSip()} sips`,
    () => `Never have i ever hooked up with a celebrity, losers take ${getLowSip()} sips`,
    () => `Never have i ever gotten fingered by a girl, losers take ${getLowSip()} sips`,
    () => `Never have i ever been a cocktease, losers take ${getLowSip()} sips`,
    () => `Never have i ever kissed anyone at this party, losers take ${getLowSip()} sips`,
    () => `Never have i ever had sex with anyone at this party, losers take ${getLowSip()} sips`,
    () => `Never have i ever spend a day without underwear on, losers take ${getLowSip()} sips`,
    () => `Never have i ever wingmanned by taking the friend, losers take ${getLowSip()} sips`,
    () => `Never have i ever had a threesome, losers take ${getLowSip()} sips`,
    () => `Never have i ever done netflix and chill, losers take ${getLowSip()} sips`,
    () => `Never have i ever sneaked a person out of the house in the morning, losers take ${getLowSip()} sips`,
    () => `Never have i ever felt victemized by this game, losers take ${getLowSip()} sips`,
    () => `Never have i ever not honored the rule of 'dips', losers take ${getLowSip()} sips`,
    () => `Never have i ever joined the mile-high club, losers take ${getLowSip()} sips`,
    () => `Never have i ever not honored the rule of 'shotgun', losers take ${getLowSip()} sips`,
    () => `Never have i ever hooked up with a friends sibling, losers take ${getLowSip()} sips`,
    () => `Never have i ever made a tik tok, losers take ${getLowSip()} sips`,
    () => `Never have i ever had something with multiple people at the same time, losers take ${getLowSip()} sips`,
    () => `Never have i ever skinny dipped, losers take ${getLowSip()} sips`,
    () => `Never have i ever had a finger in my ass, losers take ${getLowSip()} sips`,
    () => `Never have i ever hooked up with a person i couldnt remember the name of, losers take ${getLowSip()} sips`,
    () => `Never have i ever broken up over text, losers take ${getLowSip()} sips`,
    () => `Never have i ever cheated, losers take ${getLowSip()} sips`,
    () => `Never have i ever gotten promised a drivers license, if i didnt start smoking, losers take ${getLowSip()} sips`,
    () => `Never have i ever fantasized about another person during sex, losers take ${getLowSip()} sips`,
    () => `Never have i ever said a wrong name during sex, losers take ${getLowSip()} sips`,
    () => `Never have i ever been pulled over for speeding, losers take ${getLowSip()} sips`,
    () => `Never have i ever fallen asleep during sex, losers take ${getLowSip()} sips`,
    () => `Never have i ever peed in a trashcan, losers take ${getLowSip()} sips`,
    () => `Never have i ever peed in public, losers take ${getLowSip()} sips`,
    () => `Never have i ever had a one night stand, losers take ${getLowSip()} sips`,
    () => `Never have i ever taken drugs, losers take ${getLowSip()} sips`,
    () => `Never have i ever taken the granade for a friend, losers take ${getLowSip()} sips`,
    () => `Never have i ever watched reality TV, losers take ${getLowSip()} sips`,
    () => `Never have i ever stolen anything, losers take ${getLowSip()} sips`,
    () => `Never have i ever been on a blind date, losers take ${getLowSip()} sips`,
    () => `Never have i ever looked through another persons texts, losers take ${getLowSip()} sips`,
    () => `Never have i ever ate food that i dropped on the floor, losers take ${getLowSip()} sips`,
    () => `Never have i ever gossiped behind my friends back, losers take ${getLowSip()} sips`,
    () => `Never have i ever lied to parents, losers take ${getLowSip()} sips`,
    () => `Never have i ever tried to talk my way out of a ticket, losers take ${getLowSip()} sips`,
    () => `Never have i ever broken a bone, losers take ${getLowSip()} sips`,
    () => `Never have i ever walked away from the bill, losers take ${getLowSip()} sips`,
    () => `Never have i ever twerked, losers take ${getLowSip()} sips`,
    () => `Never have i ever deleted a picture of social media because it didnt get enough likes, losers take ${getLowSip()} sips`,
    () => `Never have i ever had a crush on Channing Tatum, losers take ${getLowSip()} sips`,
    () => `Never have i ever taken a nude, losers take ${getLowSip()} sips`,
    () => `Never have i ever recieved a nude, losers take ${getLowSip()} sips`,
    () => `Never have i ever send nude, losers take ${getLowSip()} sips`,
    () => `Never have i ever forwarded a nude, losers take ${getLowSip()} sips`,
    () => `Never have i ever gotten a lapdance, losers take ${getLowSip()} sips`,
    () => `Never have i ever performed a lapdance, losers take ${getLowSip()} sips`,
    () => `Never have i ever flakced on somebody, losers take ${getLowSip()} sips`,
    () => `Never have i ever skipped school, losers take ${getLowSip()} sips`,
    () => `Never have i ever ghosted someone, losers take ${getLowSip()} sips`,
    () => `Never have i ever been ghosted, losers take ${getLowSip()} sips`,
    () => `Never have i ever sold minors fake alcohol to see them pretend to be drunk, losers take ${getLowSip()} sips`,
    () => `Never have i ever streaked in public, losers take ${getLowSip()} sips`,
    () => `Never have i ever wanted to fuck a friends mom, losers take ${getLowSip()} sips`,
    () => `Never have i ever speeded in my car, losers take ${getLowSip()} sips`,
    () => `Never have i ever sang in the shower, losers take ${getLowSip()} sips`,
    () => `Never have i ever showered with another person, losers take ${getLowSip()} sips`,
    () => `Never have i ever been in a fight, losers take ${getLowSip()} sips`,
    () => `Never have i ever lost my wallet, losers take ${getLowSip()} sips`,
    () => `Never have i ever fallen while biking, losers take ${getLowSip()} sips`,
    () => `Never have i ever taken viagra, losers take ${getLowSip()} sips`,
    () => `Never have i ever had a inappropiate boner, losers take ${getLowSip()} sips`,
    () => `Never have i ever cheated in board games, losers take ${getLowSip()} sips`,
    () => `Never have i ever raged in monopoly, losers take ${getLowSip()} sips`,
    () => `Never have i ever watched all episodes of Friends, losers take ${getLowSip()} sips`,
    () => `Never have i ever watched an episode of GoT, losers take ${getLowSip()} sips`,
    () => `Never have i ever been vegetarian, losers take ${getLowSip()} sips`,
    () => `Never have i ever been a cutter, losers take ${getLowSip()} sips`,
    () => `Never have i ever watched all episodes of HIMYM, losers take ${getLowSip()} sips`,
    () => `Never have i ever failed a class, losers take ${getLowSip()} sips`,
    () => `Never have i ever walked into a light-pole, losers take ${getLowSip()} sips`,
    () => `Never have i ever had whiskey dick, losers take ${getLowSip()} sips`,
    () => `Never have i ever been too drunk to hook up, losers take ${getLowSip()} sips`,
    () => `Never have i ever blacked out, losers take ${getLowSip()} sips`,
    () => `Never have i ever had sex in a car, losers take ${getLowSip()} sips`,
    () => `Never have i ever turned on the water after peeing, pretending to wash my hands, losers take ${getLowSip()} sips`,
    () => `Never have i ever not showered in 5 days or more, losers take ${getLowSip()} sips`,
    () => `Never have i ever lost my bathing suit and not realise it, losers take ${getLowSip()} sips`,
    () => `Never have i ever send a text to the wrong number, losers take ${getLowSip()} sips`,
    () => `Never have i ever called the wrong number, losers take ${getLowSip()} sips`,
    () => `Never have i ever send a nude to the wrong person, losers take ${getLowSip()} sips`,
    () => `Never have i ever lied to get into somebodies pants, losers take ${getLowSip()} sips`,
    () => `Never have i ever wanted to be a sugar babe, losers take ${getLowSip()} sips`,
    () => `Never have i ever been a gold digger, losers take ${getLowSip()} sips`,
    () => `Never have i ever cheesy pick-up line, losers take ${getLowSip()} sips`,
    () => `Never have i ever gotten plastic surgery, losers take ${getLowSip()} sips`,
  ]
}