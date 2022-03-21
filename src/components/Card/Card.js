import BodyCrad from '../BodyCrad';
import FooterCard from '../FooterCard';
import HeaderCard from '../HeaderCard';
import './Card.css';
import { Data } from './mockdata';

function Card() {
  return (
    <div className="">
      <HeaderCard Data={Data} />
      <BodyCrad />
      <FooterCard />
    </div>
  );
}

export default Card;
