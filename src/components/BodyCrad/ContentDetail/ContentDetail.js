import UserScore from "./UserScore"
import ScoreList from "./ScoreList"
import './ContentDetail.css'

const ContentDetail = () => {
    return (
        <div>
            <div className="ContenDetail-row">
                <div>รอบที่ x :  Admisssion</div>
                <div>edit score</div>
            </div>

            <div className="ContenDetail-row">
                <img src="../../assets/icon/page-1-copy-2.png"/>
                <UserScore />
            </div>


            <ScoreList />
        </div>
    )


}
export default ContentDetail