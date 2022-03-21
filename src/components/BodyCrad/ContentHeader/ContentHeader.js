import './ContentHeader.css'
import { Data } from '../../Card/mockdata'
const ContentHeader = () => {
    return (
        <div>
            <div>รอบที่เปิด</div>
            <div>
                {Data.roundSeats.map((item, index) => {
                    console.log(item)
                    return (
                        <div key={index} className={item > 0 ? "Oval" : "Oval-none"} >
                            {index + 1}
                        </div>
                    )
                })}

            </div>
        </div>
    )


}
export default ContentHeader