import { Data } from "../../../Card/mockdata"
import './ScoreList.css'

const ScoreList = () => {
    console.log(Data)
    return (
        <div className="scorelist">
            <div>
                <div>{Data.score.min}</div>
                <div>คะแนนต่ำสุด {Data.score.year}</div>
            </div>
            <div>
                <div>{Data.score.avg}</div>
                <div>คะแนนเฉลี่ย {Data.score.year}</div>
            </div>
            <div>
                <div>{Data.score.max}</div>
                <div>คะแนนสูงสุด {Data.score.year}</div>
            </div>



        </div>
    )


}
export default ScoreList