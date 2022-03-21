import './FooterCard.css';
import { Data } from '../Card/mockdata';

function FooterCard() {
  return (
    <div >
        <p>{Data.likes} คนที่สนใจ</p>
    </div>
  );
}

export default FooterCard;
