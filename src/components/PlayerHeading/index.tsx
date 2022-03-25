import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import logoLg from "./assets/images/logo.png";

import {
  PlayerInfo,
  PlayerInfoItem,
  PlayerInfoItemCard,
  PlayerInfoItemCardContent,
  PlayerPhoto,
  StyledPlayerHeading,
  TeamLogo,
} from "./styled-components";

import PlayerDetails, { IDetail } from "./PlayerDetails";
import PlayerCircularStats from "./PlayerCircularStats";
import PlayerTitle, { IPlayerName } from "./PlayerTitle";
import PlayerStats, { IStatItem } from "./PlayerStats";

export * from "./PlayerDetails";
export * from "./PlayerStats";
export * from "./PlayerTitle";

const sliderSettings = {
  slidesToShow: 3,
  arrows: false,
  dots: false,
  infinite: false,
  // variableWidth: true,
  rows: 0,
  // responsive: [
  //   {
  //     breakpoint: 992,
  //     settings: {
  //       slidesToShow: 1,
  //       dots: true,
  //       variableWidth: false,
  //     },
  //   },
  // ],
};

interface Props {
  playerName: IPlayerName;
  photo: string;
  stats: IStatItem[];
  details: IDetail[];
}

const PlayerHeading = ({ playerName, photo, stats, details }: Props) => {
  return (
    <StyledPlayerHeading>
      <div className="container mx-auto">
        <TeamLogo>
          <img src={logoLg} alt="logo" />
        </TeamLogo>

        <PlayerTitle className="mobile" {...playerName} />

        <PlayerInfo>
          <PlayerInfoItemCard>
            <PlayerInfoItemCardContent>
              {/* <Slider {...sliderSettings}> */}
                <PlayerInfoItem className="photo" aria-hidden="false">
                  <PlayerPhoto>
                    <img src={photo} alt="" />
                  </PlayerPhoto>
                </PlayerInfoItem>
                <PlayerInfoItem className="details" aria-hidden="false">
                  <PlayerTitle {...playerName} />
                  <PlayerDetails data={details} />
                  <PlayerCircularStats />
                </PlayerInfoItem>
                <PlayerInfoItem className="stats" aria-hidden="false">
                  <PlayerStats data={stats} />
                </PlayerInfoItem>
              {/* </Slider> */}
            </PlayerInfoItemCardContent>
          </PlayerInfoItemCard>
        </PlayerInfo>
      </div>
    </StyledPlayerHeading>
  );
};

export default PlayerHeading;
