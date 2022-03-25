import PlayerHeading, {IDetail, IPlayerName, IStatItem} from "../../components/PlayerHeading";

import tyronethompson from "./assets/images/tyronethompson.png";
import ollienorris from "./assets/images/ollienorris.png";
import joshlord from "./assets/images/joshlord.png";
import pitagussowakula from "./assets/images/pitagussowakula.png";
import rivezreihana from "./assets/images/rivezreihana.png";

interface IPlayer {
    playerName: IPlayerName;
    photo: string;
    stats: IStatItem[];
    details: IDetail[];
}

const players: IPlayer[] = [
  {
    playerName: {
      firstName: "Tyrone",
      lastName: "Thompson",
      number: "12",
    },
    photo: tyronethompson,
    stats: [
      { attr: "OFF", value: 120 },
      { attr: "AST", value: 98 },
      { attr: "TCK", value: 86 },
      { attr: "TRY", value: 99 },
      { attr: "PAS", value: 85 },
      { attr: "DEF", value: 65 },
    ],
    details: [
        { className: "height", label: "Height", value: "6'5\"" },
        { className: "weight", label: "Weight", value: "111 kg" },
        { className: "age", label: "Age", value: "26" },
        {
          className: "college",
          label: "College",
          value: "Rockbell Bay College",
        },
        {
          className: "born",
          label: "Born",
          value: "Wellington, California. NZ",
        },
        { className: "position", label: "Position", value: "Hooker" },
      ],
  },
  {
    playerName: {
      firstName: "Ollie",
      lastName: "Norris",
      number: "12",
    },
    photo: ollienorris,
    stats: [
      { attr: "OFF", value: 40 },
      { attr: "AST", value: 98 },
      { attr: "TCK", value: 67 },
      { attr: "TRY", value: 99 },
      { attr: "PAS", value: 85 },
      { attr: "DEF", value: 40 },
    ],
    details: [
      { className: "height", label: "Height", value: "6'5\"" },
      { className: "weight", label: "Weight", value: "111 kg" },
      { className: "age", label: "Age", value: "22" },
      {
        className: "college",
        label: "College",
        value: "Rockbell Bay College",
      },
      {
        className: "born",
        label: "Born",
        value: "Wellington, California. NZ",
      },
      { className: "position", label: "Position", value: "Prop" },
    ],
  },
  {
    playerName: {
      firstName: "Josh",
      lastName: "Load",
      number: "5",
    },
    photo: joshlord,
    stats: [
      { attr: "OFF", value: 40 },
      { attr: "AST", value: 98 },
      { attr: "TCK", value: 67 },
      { attr: "TRY", value: 99 },
      { attr: "PAS", value: 85 },
      { attr: "DEF", value: 40 },
    ],
    details: [
      { className: "height", label: "Height", value: "6'5\"" },
      { className: "weight", label: "Weight", value: "111 kg" },
      { className: "age", label: "Age", value: "22" },
      {
        className: "college",
        label: "College",
        value: "Rockbell Bay College",
      },
      {
        className: "born",
        label: "Born",
        value: "Wellington, California. NZ",
      },
      { className: "position", label: "Position", value: "Lock" },
    ],
  },
  {
    playerName: {
      firstName: "Pita Gus",
      lastName: "Sowakula",
      number: "12",
    },
    photo: pitagussowakula,
    stats: [
      { attr: "OFF", value: 40 },
      { attr: "AST", value: 98 },
      { attr: "TCK", value: 67 },
      { attr: "TRY", value: 99 },
      { attr: "PAS", value: 85 },
      { attr: "DEF", value: 40 },
    ],
    details: [
      { className: "height", label: "Height", value: "6'5\"" },
      { className: "weight", label: "Weight", value: "111 kg" },
      { className: "age", label: "Age", value: "22" },
      {
        className: "college",
        label: "College",
        value: "Rockbell Bay College",
      },
      {
        className: "born",
        label: "Born",
        value: "Wellington, California. NZ",
      },
      { className: "position", label: "Position", value: "Loose Forward" },
    ],
  },
  {
    playerName: {
      firstName: "Rivez",
      lastName: "Reihana",
      number: "12",
    },
    photo: rivezreihana,
    stats: [
      { attr: "OFF", value: 40 },
      { attr: "AST", value: 98 },
      { attr: "TCK", value: 67 },
      { attr: "TRY", value: 99 },
      { attr: "PAS", value: 85 },
      { attr: "DEF", value: 40 },
    ],
    details: [
      { className: "height", label: "Height", value: "6'5\"" },
      { className: "weight", label: "Weight", value: "111 kg" },
      { className: "age", label: "Age", value: "22" },
      {
        className: "college",
        label: "College",
        value: "Rockbell Bay College",
      },
      {
        className: "born",
        label: "Born",
        value: "Wellington, California. NZ",
      },
      { className: "position", label: "Position", value: "First-Five Eighth" },
    ],
  },
];

export default function PlayersPage() {
  return (
    <section>
      {players.map(({ playerName, photo, stats, details }, index) => (
        <PlayerHeading
        key={`player-${index}`}
          playerName={playerName}
          photo={photo}
          stats={stats}
          details={details}
        />
      ))}
    </section>
  );
}
